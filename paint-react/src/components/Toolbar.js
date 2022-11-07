import React from "react";
import "../styles/toolbar.scss";
import { BsBrush, BsCircle, BsEraser } from "react-icons/bs";
import { BiRectangle, BiRedo, BiSave, BiUndo } from "react-icons/bi";
import { HiOutlineMinusSm } from "react-icons/hi";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__button brush"><BsBrush /></button>
      <button className="toolbar__button rect"><BiRectangle /></button>
      <button className="toolbar__button circle"><BsCircle /></button>
      <button className="toolbar__button eraser"><BsEraser /></button>
      <button className="toolbar__button line"><HiOutlineMinusSm /></button>
      <input type="color" style={{ marginLeft: "10px"}}/>
      <button className="toolbar__button undo"><BiUndo /></button>
      <button className="toolbar__button redo"><BiRedo /></button>
      <button className="toolbar__button save"><BiSave /></button>
    </div>
  );
};

export default Toolbar;