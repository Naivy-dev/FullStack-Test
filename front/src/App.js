import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./components/ToggleButton";

function App() {
  return (
    <div className="App">
      <Card>
        <ToggleButton />
      </Card>
    </div>
  );
}

export default App;
