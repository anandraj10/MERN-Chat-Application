import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMessages();
  const lastMessageRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  console.log("Messages: ", messages);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages && messages.length > 0 && 
        messages.map((message, index) => (
          <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <Message message={message} />
          </div>
        ))
      }

      {loading &&
        [...Array(3)].map((_, idx) => <Message key={idx} />)}

      {!loading && (!messages || messages.length === 0) && (
        <p className="text-center text-gray-400">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;









// const Messages = () => {
//   const { messages, loading } = useGetMessage();
//   console.log("Messages: ", messages);
//   return (
//     <div className='px-4 flex-1 overflow-auto'>

//       {!loading && messages.length > 0 && messages.map((message) => (
//         <Message key={message._id} message={message} />))}

//       {loading && [...Array(3)].map((_, idx) => <Message key={idx} />)}

//       {!loading && (!messages || messages.length === 0) && (
//         <p className='text-center text-white-700'>Send a message to start the conversation</p>
//       )}
//     </div>
//   )
// }


// export default Messages