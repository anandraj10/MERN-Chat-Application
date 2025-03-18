import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
    {
        participants: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true, // Ensures at least two participants are required
            },
        ],
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Message',
            },
        ],
    },
    { timestamps: true } // ✅ Ensures createdAt & updatedAt fields are added
);

// Ensure the model name matches exactly in other files
const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;
