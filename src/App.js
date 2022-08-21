import React, { useState } from "react";
import Modal from "./modal";
import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {open&&<Modal open={open} setOpen={setOpen} />}
    </div>
  );
}

export default App;
