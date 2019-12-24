import React from "react";
import { Card, Panel } from "./components";

import "./index.scss";

function App() {
  return (
    <div className="app">
      <Panel
        items={[
          { text: "Тестовый текст 1" },
          { text: "Тестовый текст 2" },
          { text: "Тестовый текст 3" }
        ]}
      />
        <Panel
        items={null}
      />
    </div>
  );
}

export default App;
