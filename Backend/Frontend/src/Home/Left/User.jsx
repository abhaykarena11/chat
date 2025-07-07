import useConversation from "../../statemanage/useConversation";

function User({user , isOnline}){
  const {_id , name , email} = user;
  const {selectedConversation,setSelectedConversation} = useConversation();
  function onClickHandler(){
    setSelectedConversation(user);
    console.log("User selected:", user);
  }
  const selected = selectedConversation && selectedConversation._id === _id ? "glass shadow-glow" : "";

    return(
        <div className={`${selected} hover:glass hover:shadow-glow smooth-transition cursor-pointer px-6 py-4 flex gap-4 items-center border-b border-white/10`} onClick={onClickHandler}>
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
                <img 
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              {isOnline && <div className="online-indicator"></div>}
            </div>
            <div className="flex flex-col gap-1 flex-1">
                <p className="text-sm font-semibold text-white">{name}</p>
                <p className="text-xs text-white/70">{email}</p>
            </div>
        </div>
    )
    }
    
    export default User;