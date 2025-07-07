import useConversation from "../../statemanage/useConversation";
import { useSocketContext } from "../../context/SocketContext";

export default function ChatUser({user}) {

  const { socket, onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const {selectedConversation} = useConversation();
  return (
    <div className="p-6 border-b border-white/10 flex items-center space-x-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
            <img 
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              alt={selectedConversation.name}
              className="w-full h-full object-cover"
            />
          </div>
          {isOnline && <div className="online-indicator"></div>}
        </div>

        <div className="flex-1">
            <h1 className="text-lg font-semibold text-white">{selectedConversation.name}</h1>
            <span className={`text-sm ${isOnline ? 'text-green-400' : 'text-white/60'}`}>
              {isOnline ? "🟢 Online" : "⚪ Last seen recently"}
            </span>
        </div>
    </div> 
  );
}
