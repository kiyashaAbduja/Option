// OptionComponent.jsx
import React from "react";

const OptionComponent = ({
  option,
  onTextChange,
  onCheckboxChange,
  onRemove,
}) => {
  return (
    <tr>
      <td className="px-4 py-2 border-b text-center">{option.id}</td>
      <td className="px-4 py-2 border-b text-center">
        <input
          type="text"
          value={option.answer}
          onChange={(e) => onTextChange(option.id, e.target.value)}
          className="w-full border border-gray-300 p-2 text-center"
        />
      </td>
      <td className="px-4 py-2 border-b text-center">
        <input
          type="checkbox"
          checked={option.correctAnswer}
          onChange={(e) => onCheckboxChange(option.id, e.target.checked)}
          className="mx-auto"
        />
      </td>
      <td className="px-4 py-2 border-b text-center">
        <button
          onClick={() => onRemove(option.id)}
          className="bg-red-500 text-white p-2 rounded-lg"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default OptionComponent;
