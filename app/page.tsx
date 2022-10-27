"use client";

import { use } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return res.json();
}

export default function Home() {
  const data = use(getData());
  console.log(data.length);
  return <div>Home</div>;
}
