import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ToggleButton from "./components/ToggleButton";
import { useDispatch } from "react-redux";
import { createInfo } from "./actions/info";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(createInfo());
    return;
  }, [dispatch]);

  return (
    <div className="App">
      <Card>
        <ToggleButton />
      </Card>
    </div>
  );
}

export default App;
