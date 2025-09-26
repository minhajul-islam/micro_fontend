import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ManageArea from "./ManageArea";

const App = () => (
  <div className="container">
    <ManageArea />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);

export default App;