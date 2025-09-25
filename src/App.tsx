import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Button from "./Button";


const App = () => (
  <div className="container">
    <div>Name: host-app</div>
    <div>Framework: react-18</div>
    <Button />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;