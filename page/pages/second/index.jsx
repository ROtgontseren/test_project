import Link from "next/link";
import React from "react";
import { useState } from "react";

const second = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen gap-2">
      <select className="select select-secondary w-full max-w-xs">
        <option disabled selected>
          Pick your color
        </option>
        <option>green</option>
        <option>red</option>
        <option>blue</option>
        <option>purple</option>
        <option>pink</option>
        <option>orange</option>
        <option>yellow</option>
        <option>black</option>
      </select>
      <Link href={"./first"}>
        <button className="btn btn-primary">Prev</button>
      </Link>
      <Link href={"../finish"}>
        <button className="btn btn-primary">Next</button>
      </Link>
    </div>
  );
};

export default second;
