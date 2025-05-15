import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const CreateAvatarModal = ({ onClose, isOpen }) => {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("realistic");
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState("female");

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-black p-6 rounded-2xl shadow-lg w-[90%] max-w-md relative"
          >
            <h2 className="text-2xl font-bold mb-4">Create New Avatar</h2>

            <div className="space-y-4">
              <div>
                <label className="block font-medium text-sm mb-1">Prompt</label>
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. A futuristic warrior with glowing eyes"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium text-sm mb-1">Style</label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                >
                  <option value="realistic">Realistic</option>
                  <option value="anime">Anime</option>
                  <option value="cartoon">Cartoon</option>
                  <option value="pixel">Pixel Art</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-sm mb-1">
                  Age Range
                </label>
                <input
                  type="range"
                  min="5"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">Age: {age}</span>
              </div>

              <div>
                <label className="block font-medium text-sm mb-1">Gender</label>
                <div className="flex gap-4">
                  {["female", "male", "non-binary"].map((g) => (
                    <label key={g} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={gender === g}
                        onChange={() => setGender(g)}
                      />
                      {g.charAt(0).toUpperCase() + g.slice(1)}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-2">
              <button
                onClick={onClose}
                className="bg-gray-800 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                onClick={() => {
                  console.log("Avatar Config:", { prompt, style, age, gender });
                  // You can connect this to backend/gen logic here
                  onClose();
                }}
              >
                Generate Avatar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateAvatarModal;
