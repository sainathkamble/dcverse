const FloatingButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="fixed bottom-6 right-6 z-50 px-5 py-3 text-black font-semibold text-base rounded-full backdrop-blur-md bg-black/5 shadow-[0_1px_0_0_rgba(255,255,255,0.5),0_-1px_0_0_rgba(255,255,255,0.5),-1px_0_0_0_rgba(0,0,0,0.5),1px_0_0_0_rgba(0,0,0,0.5)] transition-transform duration-200 active:scale-90 hover:scale-110 before:absolute before:inset-0 before:rounded-full before:bg-black/10 before:blur-md before:-z-10"
  >
    Create New Avatar
  </button>
);

export default FloatingButton;
