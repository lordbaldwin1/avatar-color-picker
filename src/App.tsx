import { useState } from "react";

const colors = [
  { name: "gray", value: "#6b7280" },
  { name: "blue", value: "#3b82f6" },
  { name: "green", value: "#22c55e" },
  { name: "red", value: "#ef4444" },
  { name: "yellow", value: "#eab308" },
  { name: "purple", value: "#a855f7" },
  { name: "orange", value: "#f97316" },
  { name: "pink", value: "#ec4899" },
];

function Avatar({ avatarBgColor }: { avatarBgColor: string }) {
  return (
    <div
      className="flex items-center justify-center w-1/4 mb-4 border-1 border-black rounded-full aspect-square"
      style={{
        backgroundColor: avatarBgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      Avatar
    </div>
  );
}

function ColorPicker() {
  const [bgColor, setBgColor] = useState<string>(colors[0].value);
  const [isAvatarSelected, setIsAvatarSelected] = useState<boolean>(false);
  const [avatarBgColor, setAvatarBgColor] = useState<string>(colors[1].value);

  const handleColorChange = (color: string) => {
    if (isAvatarSelected) {
      setAvatarBgColor(color);
    } else {
      setBgColor(color);
    }
  };

  const handleReset = () => {
    if (isAvatarSelected) {
      setAvatarBgColor(colors[1].value);
    } else {
      setBgColor(colors[0].value);
    }
  };

  const handleAvatarToggle = () => {
    setIsAvatarSelected(!isAvatarSelected);
  };

  const activeColor = isAvatarSelected ? avatarBgColor : bgColor;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        className="flex flex-col items-center justify-start rounded-lg p-4 md:p-8 lg:p-12 aspect-video shadow-[#858383] shadow-lg"
        style={{
          backgroundColor: bgColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <Avatar avatarBgColor={avatarBgColor} />
        <button
          onClick={handleAvatarToggle}
          className="h-10 w-25 mb-4 bg-blue-500 hover:bg-blue-600 text-black border-1 border-black rounded-md"
        >
          {isAvatarSelected ? "Avatar" : "Background"}
        </button>
        <div>
          {colors.map((color) => (
            <button
              key={color.name}
              className="w-10 h-10 mx-2 border-1 border-black rounded-full"
              onClick={() => handleColorChange(color.value)}
              style={{
                backgroundColor: color.value,
                transform:
                  activeColor === color.value ? "scale(1.2)" : "scale(1)",
              }}
            ></button>
          ))}
        </div>
        <button
          className="h-10 w-20 mt-4 bg-red-500 hover:bg-red-600 text-black border-1 border-black rounded-md"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-300">
      <h1 className="text-4xl font-medium mb-4">Avatar Color Picker</h1>
      <ColorPicker />
    </div>
  );
}

export default App;
