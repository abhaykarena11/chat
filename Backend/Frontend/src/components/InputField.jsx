const InputField = ({ icon: Icon, type, placeholder ,formData , name, setformData }) => {
    function changeHandler(e){
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div className="relative">
      <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white/60 z-10">
        <Icon className="text-lg" />
      </div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-white/10 border border-white/20 rounded-full py-3 pl-16 pr-6 text-white placeholder-white/60 backdrop-blur-md transition-all duration-300 focus:outline-none focus:border-purple-400 focus:shadow-glow"
        value={formData[name]}
        onChange={changeHandler}
      />
    </div>
  );
};

export default InputField;
