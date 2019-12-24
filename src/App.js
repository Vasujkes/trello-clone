import React from "react";
import { Card, Panel } from "./components";

import "./index.scss";

function App() {
  return (
    <div className="app">
      <Panel
        cards={[
          { text: "Тестовый текст 1" },
          { text: "Тестовый текст 2" },
          { text: "Тестовый текст 3" }
        ]}
      />
        <Panel
        cards={null}
      />
    </div>
  );
}

export default App;
