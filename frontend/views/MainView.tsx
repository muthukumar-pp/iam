
import { useState } from "react";

export default function MainView() {
  const [name, setName] = useState("");

  return (
    <>
       <h1>Hello, {name || "World"}!</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />     
    </>
  );
}
