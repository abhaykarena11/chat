import { useEffect, useState } from "react"
import useConversation from "../statemanage/useConversation";
import axios from "axios";

export default function useGetMessages() {

    const [loading,setLoading] = useState(false);
    const {messages , setMessages , selectedConversation} = useConversation();

    useEffect(()=>{
        console.log("Selected conversation in useGetMessages:", selectedConversation);
        if(selectedConversation && selectedConversation._id){
            // Clear messages before fetching new ones
            setMessages([]);
            const getMessages = async () => {
                setLoading(true);
    
                try {
                    const response = await axios.get(`http://localhost:5000/message/get/${selectedConversation._id}`, {
                        withCredentials: true, // Ensures cookies are sent
                    });                   
                    setMessages(response.data.messages);
                    console.log("Fetched messages:", response.data.messages);
                } catch (error) {
                    console.log("error in fetch message");
                    console.log(error);
                }
            }
            getMessages();
        } else {
            setMessages([]);
        }
        
    },[selectedConversation]); // Only depend on selectedConversation

    useEffect(() => {
    }, [selectedConversation,setMessages]);
  return (
    {messages , loading}
  )
}
