import React, { useState } from "react";
import OptionComponent from "./OptionComponent";

// Utility function to generate unique IDs
const generateUniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

const OptionRender = () => {
  const [options, setOptions] = useState([
    { id: generateUniqueId(), answer: "", correctAnswer: false },
    { id: generateUniqueId(), answer: "", correctAnswer: false },
    { id: generateUniqueId(), answer: "", correctAnswer: false },
    { id: generateUniqueId(), answer: "", correctAnswer: false },
  ]);

  const addOption = () => {
    const newOption = {
      id: generateUniqueId(),
      answer: "",
      correctAnswer: false,
    };
    setOptions([...options, newOption]);
  };

  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const handleTextChange = (id, newText) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, answer: newText } : option
      )
    );
  };

  const handleCheckboxChange = (id, isChecked) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, correctAnswer: isChecked } : option
      )
    );
  };

  console.log(options);

  return (
    <div className="p-4">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-center">#</th>
            <th className="px-4 py-2 border-b text-center">Options</th>
            <th className="px-4 py-2 border-b text-center">Check Answer</th>
            <th className="px-4 py-2 border-b text-center">Remove Option</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <OptionComponent
              key={option.id}
              option={option}
              onTextChange={handleTextChange}
              onCheckboxChange={handleCheckboxChange}
              onRemove={removeOption}
            />
          ))}
        </tbody>
      </table>
      <button
        className="bg-blue-500 text-white p-3 rounded-lg mt-4"
        onClick={addOption}
      >
        Add Option
      </button>
    </div>
  );
};

export default OptionRender;
