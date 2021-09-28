import React, { useState } from "react";
import { CirclePicker } from "react-color";

export default function ColorPicker({
  isPickerVisible,
  setisPickerVisible,
  addTodo,
  setTodo,
  todo,
}) {
  const [colorSelected, setColorSelected] = useState("");
  const colorSubmitHandler = () => {
    todo.color = colorSelected
    addTodo();
    setisPickerVisible(false);
  };
  return (
    <div className={isPickerVisible ? "color-background" : "invisible"}>
      <div className="color-container">
        <h1>Choose a color</h1>
        <CirclePicker
        color={colorSelected}
          onChangeComplete={(color)=> {setColorSelected(color.hex);
          }}
        />
        <button
          style={{ marginTop: "20px" }}
          className="btn"
          onClick={colorSubmitHandler}
        >
          Create todo
        </button>
      </div>
    </div>
  );
}
