import ChatUser from "./ChatUser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import useConversation from "../../statemanage/useConversation";

export default function Right() {
  const {selectedConversation} = useConversation();
  return (
    selectedConversation ? (
      <div className="flex-1 glass-dark text-white shadow-glow flex flex-col">
        <ChatUser user={selectedConversation}></ChatUser>
        <Messages></Messages>
        <SendMessage></SendMessage>
      </div>
    ) : (
      <div className="flex-1 glass-dark text-white shadow-glow flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome to ChatApp
          </h2>
          <p className="text-white/70">Select a user to start chatting</p>
        </div>
      </div>
    )
  )
}
