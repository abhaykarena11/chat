import Search from "./Search";
import Users from "./Users";

export default function Left() {
  return (
    <div className="w-[28%] glass-dark text-white shadow-glow">
      <div className="p-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Chats
        </h1>
      </div>
      <Search/>
      <div className="mx-4 my-4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      <Users></Users>
    </div>
  )
}
