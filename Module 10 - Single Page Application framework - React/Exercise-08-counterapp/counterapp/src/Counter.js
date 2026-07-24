import React, { useState } from "react";

// GUESSED CONTENT: custom file name wasn't visible in screenshots.
// Placeholder based on folder name "counterapp" — replace with your real component.

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Counter App</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
