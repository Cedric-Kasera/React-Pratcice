import React, { useEffect, useState } from "react";

function Count() {
  const [Counter, setCounter] = useState(0);
  const [reset, setreset] = useState(0);

  useEffect(() => {
    console.log(Counter);
  }, [Counter]);

  function HandleReturn() {
    setreset((prev) => !prev);
    console.log(reset);
  }

  function HandleClick() {
    setCounter(Counter == 0);
  }

  return (
    <div className="bg-slate-300 p-4">
      {/* <img src="./profile-pic.jpg" alt="" className="md:w-[60%] rounded-full" /> */}
      <p className="bg-white text-right">{Counter}</p>

      {Counter < 10 && <p className="text-red-700">Count is less than 10</p>}
      <div className="flex gap-2 justify-between">
        <button
          onClick={() => setCounter((prev) => prev + 1)}
          className="bg-blue-500 text-center p-3 rounded-lg text-white"
        >
          Add
        </button>
        <button
          onClick={() =>  setCounter((prev) => prev * 0)}
          className="bg-red-500 text-center p-3 rounded-lg text-white"
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default Count;
