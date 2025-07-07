import { useState } from "react";
import { IoIosSend } from "react-icons/io";
import useConversation from "../../statemanage/useConversation";

export default  function SendMessage() {
  const {selectedConversation} = useConversation();
  const [message , setMessage] = useState("");

  async function sendmsgHandler (e) {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await fetch(`http://localhost:5000/message/send/${selectedConversation._id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        credentials: "include",
        body: JSON.stringify({message}) // Ensure the body is a string
    });
    setMessage("");
    // Trigger refetch of messages after sending
    if (selectedConversation) {
      // This will trigger useGetMessages to refetch
      import("../../statemanage/useConversation").then(({ default: useConversation }) => {
        useConversation.getState().setSelectedConversation({ ...selectedConversation });
      });
    }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form onSubmit={sendmsgHandler} className="p-4 border-t border-white/10">
      <div className="flex items-center space-x-3">
        <div className="flex-1">
          <input 
            type="text" 
            placeholder="Type your message..." 
            className="modern-input w-full py-2 px-4" 
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          />
        </div>
        <button 
          type="submit" 
          className="modern-button-secondary p-2 rounded-full hover:scale-105 smooth-transition w-10 h-10 flex items-center justify-center" 
          disabled={!message.trim()}
        >
          <IoIosSend className="text-lg" />
        </button>
      </div>
    </form>
  );
}
