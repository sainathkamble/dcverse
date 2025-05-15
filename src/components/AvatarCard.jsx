const AvatarCard = ({ name, avatar }) => (
  <div className="relative w-full max-w-sm mx-auto overflow-hidden border border-gray-200 rounded-xl shadow-md bg-white transition-transform duration-300 hover:scale-[1.02]">
    <img
      src={avatar}
      alt={name}
      className="w-full h-64 sm:h-48 object-cover object-center rounded-t-3xl"
    />
    <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-sm px-4 py-3 flex items-center justify-between rounded-b-3xl">
      <p className="text-base font-semibold text-gray-800 truncate">{name}</p>
      <button className="bg-indigo-500 hover:bg-indigo-700 text-white rounded-full px-4 py-2 text-sm font-medium shadow-sm hover:shadow-md transition">
        Edit
      </button>
    </div>
  </div>
);

export default AvatarCard;
