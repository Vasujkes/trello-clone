import React from "react";
import { Card, Panel } from "./components";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <Panel
        items={[
          { text: "Тестовый текст 1" },
          { text: "Тестовый текст 2" },
          { text: "Тестовый текст 3" }
        ]}
      />
    </div>
  );
}

export default App;
