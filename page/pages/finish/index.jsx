import React from "react";
import Link from "next/link";

const finish = ({ setName, setColor }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen gap-2 flex-col">
      <h1>name : {setName}</h1>
      <h1>color : {setColor}</h1>
      <Link href={"./"}>
        <button className="btn btn-primary">finish</button>
      </Link>
    </div>
  );
};

export default finish;
