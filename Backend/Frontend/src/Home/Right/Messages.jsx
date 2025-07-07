import Message from "./Message";
import useGetMessages from "../../context/useGetMessages";
import { useEffect, useRef, useState } from "react";
import useGetSocketMessage from "../../context/useGetSocketMessage";

export default function Messages() {
  const {messages=[] } = useGetMessages();
  useGetSocketMessage();
  const lastMessageRef = useRef();

  const [isUserScrolling, setIsUserScrolling] = useState(false);

  // Detect user scrolling
  const handleScroll = () => {
    if (lastMessageRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = lastMessageRef.current;
      setIsUserScrolling(scrollTop + clientHeight < scrollHeight - 10); // 10px tolerance
    }
  };

  useEffect(() => {
    console.log(messages);
    if (!isUserScrolling && lastMessageRef.current) {
      // lastMessageRef.current.scrollIntoView({ behavior: "auto" }); 
      lastMessageRef.current.scrollTop = lastMessageRef.current.scrollHeight;
    }
  }, [messages,isUserScrolling]); // Trigger on `messages` array change.

  return (
    <div className="flex-1 overflow-auto custom-scrollbar p-4" ref={lastMessageRef} onScroll={handleScroll}>
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="text-4xl mb-2">💭</div>
            <p className="text-white/60">No messages yet. Start the conversation!</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg._id}>
              <Message msg={msg}></Message>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
