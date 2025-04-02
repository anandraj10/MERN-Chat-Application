import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import { getReceiverSocketId } from '../socket/socket.js';
import { io } from '../socket/socket.js'; // ✅ Ensure io is imported

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user?._id; // ✅ Ensure senderId is valid

        if (!senderId) {
            return res.status(401).json({ error: "Unauthorized: User ID not found" });
        }

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = await Message.create({
            senderId, receiverId, message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        // ✅ Save both in parallel for better performance
        await Promise.all([conversation.save(), newMessage.save()]);

        // ✅ Get receiver socket ID safely
        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        } else {
            console.log(`User ${receiverId} is offline, message stored in DB`);
        }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user?._id; // ✅ Ensure senderId is valid

        if (!senderId) {
            return res.status(401).json({ error: "Unauthorized: User ID not found" });
        }

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        // ✅ Always return an array (avoid returning null)
        const messages = conversation?.messages || [];

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
