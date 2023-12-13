import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useContext } from "react";

const first = ({ setName }) => {
  return (
    <div className="flex justify-center items-center w-screen h-screen gap-2">
      <h1>name</h1>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-info w-full max-w-xs"
        onChange={setName}
      />
      <Link href={"./"}>
        <button className="btn btn-primary">Prev</button>
      </Link>
      <Link href={"./second"}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
};

export default first;
