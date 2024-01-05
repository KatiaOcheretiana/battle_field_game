import React from "react";
import "./App.css";

import { useGameState } from "./state/useGameState";
import { HeaderWithCounter } from "./components/HeaderWithCounter";
import { ButtonReset } from "./components/ButtonReset";
import { BatteleFild } from "./components/BatteleFild";

function App() {
  const { turn, reset, matrix, fire, won } = useGameState();

  if (won) {
    alert("MOSCOW BURNED DOWN 🧨🔥 🤗 ");
  }

  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <BatteleFild matrix={matrix} onFire={fire} />
      <ButtonReset reset={reset} />
    </div>
  );
}

export default App;
