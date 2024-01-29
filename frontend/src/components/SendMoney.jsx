import React from "react";

const SendMoney = () => {
  return (
    <div className="m-5 p-5 mx-auto mt-40 w-[350px] h-[320px] shadow-xl bg-slate-50 rounded-xl">
      <div className="text-center text-4xl font-bold mb-12">Send Money </div>
      <div className="font-semibold text-2xl"> Krishna </div>
      <div className="font-medium mb-5">Amount (in Rs)</div>
      <input type="text" placeholder="Enter Amount" className="p-2 w-full bg-slate-50 border border-black rounded-lg mb-7" />
      <button className="w-full bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none">
  Initiate Transfer
</button>
    </div>
  );
};

export default SendMoney;
