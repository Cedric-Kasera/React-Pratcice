import React, { useEffect } from "react";
import { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const reducer = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (count < 1000000) {
      reducer();
    }
  }, [count]);

  return (
    <div className="bg-slate-400 p-2 items-center">
      <p className="text-black font-bold">My Countdown = {count} </p>
    </div>
  );
}

export default UseEffect;
