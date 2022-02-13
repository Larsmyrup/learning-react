import { useState } from "react";

export default function Expenses() {

  let [count, setCount] = useState(0);

  let increaseValue = () => {
    setCount(count + 1)
  }
  let decreaseValue = () => {
    setCount(count - 1)
  }

  return (
    <main className="container pt-5">
      <h1>Counter</h1>
      <div>
        {count}
      </div>
      <button
        onClick={increaseValue}
      >
        Increment
      </button>
      <button
        onClick={decreaseValue}
      >
        Decrement
      </button>
    </main>
  );
}
