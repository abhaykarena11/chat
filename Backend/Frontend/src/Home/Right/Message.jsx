import useConversation from "../../statemanage/useConversation";

export default function Message({msg}) {
  const {selectedConversation} = useConversation();
  const isOwnMessage = selectedConversation._id === msg.receiver;

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`message-bubble ${isOwnMessage ? 'message-bubble-own' : 'message-bubble-other'} smooth-transition`}>
        {msg.message}
      </div>
    </div>
  );
}
