import { useEffect } from "react"
import Left from "./Home/Left/Left"
import Logout from "./Home/Left/Logout"
import Right from "./Home/Right/Right"
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom';
import useGetAllUsers from "./context/useGetAllUsers";
import useConversation from "./statemanage/useConversation";

export default function Home() {
  const navigate = useNavigate();
  const [allUsers, loading] = useGetAllUsers();
  const { setSelectedConversation, selectedConversation } = useConversation();

  useEffect(()=>{
   
                try {
                    const token = Cookies.get("token");
                    if(!token){
                      navigate("/login");
                      return;
                    }
                } catch (error) {
                    console.error("Error fetching users: " + error);
                }
  },[]);

  // Auto-select first user when users are loaded and no user is currently selected
  useEffect(() => {
    if (allUsers.length > 0 && !selectedConversation && !loading) {
      console.log("Auto-selecting first user:", allUsers[0]);
      setSelectedConversation(allUsers[0]);
    }
  }, [allUsers, selectedConversation, loading, setSelectedConversation]);

  return (
    <div className="min-h-screen gradient-bg overflow-hidden">
      <div className="flex h-screen w-full shadow-glow">
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
      </div>
    </div>
  )
}
