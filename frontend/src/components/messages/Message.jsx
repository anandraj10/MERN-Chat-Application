import React from 'react'
import PropTypes from 'prop-types'
import useConversation from '../../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContext'
import { extractTime } from '../../utils/extractTime'

const Message = ({ message }) => {
    const { authUser } = useAuthContext()
    const { selectedConversation } = useConversation()
    
    // Safeguard against undefined message
    if (!message) {
        return null // or return a loading/empty state
    }

    const fromMe = message?.senderId === authUser?._id

    const formatedTime=extractTime(message.createdAt);
    const chatClassName = fromMe ? 'chat-end' : 'chat-start'
    const profilePic = fromMe ? authUser?.profilePic : selectedConversation?.profilePic
    const bubbleBgColor = fromMe ? 'bg-blue-500' : ''
    const shakeClass=message.shouldShake ? "shake":""

    return (
        <div>
            <div className={`chat ${chatClassName}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        {profilePic && (
                            <img
                                alt="Tailwind CSS chat bubble component"
                                src={profilePic}
                            />
                        )}
                    </div>
                </div>
                <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>
                    {message?.message || ''}
                </div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 item-center text-slate-50">
                    {formatedTime}
                </div>
            </div>
        </div>
    )
}

Message.propTypes = {
    message: PropTypes.shape({
        senderId: PropTypes.string,
        message: PropTypes.string,
    }),
}

export default Message