﻿import React from "react";
import ToolState from "../store/toolState";

const SettingBar = () => {
  return (
    <div className="setting-bar">
      <label
        style={{ marginLeft: "40px" }}
        htmlFor="line-width"
      >Width line
      </label>
      <input
        style={{ margin: "10px" }}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={50}
        onChange={e => ToolState.setLineWidth(e.target.value)}
      />
    </div>
  );
};

export default SettingBar;