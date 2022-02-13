import { useState } from "react";
import MyButton from "../components/MyButton";

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
      <MyButton
        className="mr-4"
        onClick={increaseValue}
      >
        Increment
      </MyButton>
      <MyButton
        onClick={decreaseValue}
      >
        Decrement
      </MyButton>
    </main>
  );
}
