import React, { useState } from "react";
import MainForm from "./MainForm";
import MainResponse from "./MainResponse";

export default function ToggleButton(props) {
  const [mode, setMode] = useState("form");

  return (
    <>
      <div>
        {mode === "form" && <MainForm setMode={setMode} />}
        {mode === "response" && <MainResponse setMode={setMode} />}
      </div>
    </>
  );
}
