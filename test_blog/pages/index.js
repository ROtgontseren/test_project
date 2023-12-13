import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const { blog, setBlog } = useState();

  const fetchData = async () => {
    try {
      const res = await fetch("https://dev.to/api/articles?per_page=10");
      const data = await res.json();
    } catch (error) {
      console.log("aldaa garlaa");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="flex justify-center items-center w-screen h-screen flex-col gap-12">
      <h1 className="text-red-600">SEO</h1>
      <input
        type="text"
        placeholder="search"
        className="w-[200px] h-12 rounded-2xl px-2"
      />
    </main>
  );
}
