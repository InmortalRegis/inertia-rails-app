import React, { useState } from "react";
const Index = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-400">
      <h1>Hello World</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Index;
