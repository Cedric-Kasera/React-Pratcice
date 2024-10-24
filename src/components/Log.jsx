import React, { useEffect, useState } from "react";

function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [numbers, setNumbers] = useState([]);

  // useEffect(() => {
  //  console.log("Hello", numbers)
  //  setNumbers([...numbers, numbers.length+1])
  // }, [])

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNumChage = (e) => {
    setNumbers([...numbers, e.target.value]);
  };
  return (
    <div className="md:w-[6md:w-[60%] flex flex-col bg-slate-200 gap-5 py-4 px-20%] ">
      <h1 className="text-red-500 font-extrabold px-4 text-center">LOG IN</h1>
      <div className="md:w-[6md:w-[60%] flex flex-col bg-slate-200 gap-5 py-4 px-4 flex-grow">
        <input
          type="email "
          placeholder="Email Address"
          onChange={(e) => handleChange(e)}
          className="py-2 border-black flex-1 px-10"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => handlePassChange(e)}
          className="py-2 border-black flex-1 px-10"
        />
        <input
          type="number"
          placeholder="num..."
          value={numbers[numbers.length - 1]}
          onChange={(e) => handleNumChage(e)}
          className="py-2 border-black flex-1 px-10"
        />
        <button className="bg-blue-500 text-white font-semibold rounded-md py-3 px-5 w-[100%] text-center">
          Log In
        </button>
      </div>
      {/* <p>{email} | {password}</p> */}
      <p>{numbers} </p>
    </div>
  );
}

export default Log;
