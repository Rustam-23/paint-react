import React from "react";
import "../styles/toolbar.scss";
import { BsBrush, BsCircle, BsEraser } from "react-icons/bs";
import { BiRectangle, BiRedo, BiSave, BiUndo } from "react-icons/bi";
import { HiOutlineMinusSm } from "react-icons/hi";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Eraser from "../tools/Eraser";
import Circle from "../tools/Circle";
import Line from "../tools/Line";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button className="toolbar__button brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}><BsBrush /></button>
      <button className="toolbar__button rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}><BiRectangle /></button>
      <button className="toolbar__button circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas))}><BsCircle /></button>
      <button className="toolbar__button eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}><BsEraser /></button>
      <button className="toolbar__button line" onClick={() => toolState.setTool(new Line(canvasState.canvas))}><HiOutlineMinusSm /></button>
      <input type="color" style={{ marginLeft: "10px"}}/>
      <button className="toolbar__button undo"><BiUndo /></button>
      <button className="toolbar__button redo"><BiRedo /></button>
      <button className="toolbar__button save"><BiSave /></button>
    </div>
  );
};

export default Toolbar;