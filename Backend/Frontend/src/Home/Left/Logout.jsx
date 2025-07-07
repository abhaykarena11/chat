import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();
  const logOut = async () => {
    try {
      const token = Cookies.get("token");
      if(token){
        const response = await axios.get("http://localhost:5000/user/logout",{
          withCredentials: true,
          headers: {
              Authorization: `Bearer ${token}`, // Replace YOUR_ACCESS_TOKEN with the actual token
          },
      });
      navigate("/login");
      }
      
      
    } catch (error) {
      console.log("error during log out"+error);
    }
  }
  return (
    <div className="w-[4%] glass-dark text-white flex flex-col justify-end shadow-glow mr-2" >
        <div className="p-3 flex justify-center items-center">
          <button 
            onClick={logOut}
            className="modern-button-secondary p-3 rounded-full hover:scale-105 smooth-transition w-10 h-10 flex items-center justify-center"
          >
            <CiLogout className="text-xl" />
          </button>
        </div>
    </div>
  )
}
