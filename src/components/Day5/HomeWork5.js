import { useContext, useState, useEffect } from "react";
import MyContext from "./Mycontext";

const A = () => {
  const [name, setName] = useState("Alice");
  const [data, setData] = useState([]);

  const dataFetch = async () => {
    try {
      await fetch("https://jsonplaceholder.typicode.com/todos/")
        .then((res) => res.json())
        .then((response) => setData(response));
    } catch (error) {
      console.log(error);
    }
  };

  const nameObj = {
    FnName: name,
    changeFn: setName,
    dataFn: dataFetch,
    actualData: data,
  };

  return (
    <>
      <MyContext.Provider value={nameObj}>
        <h1>In Component A </h1>
        <B />
      </MyContext.Provider>
    </>
  );
};

const B = () => {
  return (
    <>
      <p>In comp B</p>
      <C />
    </>
  );
};
const C = () => {
  return (
    <>
      <p>In comp C</p>
      <D />
    </>
  );
};

const D = () => {
  const _context = useContext(MyContext);
  const change = () => {
    _context.changeFn((pname) => {
      return pname === "Alice" ? "Bob" : "Alice";
    });
  };

  return (
    <>
      <p>In comp D</p>
      <h1> Hello {_context.FnName}</h1>
      <button onClick={() => change("Alice")}>Click</button>
      <E />
    </>
  );
};

const E = () => {
  return (
    <>
      <p>In comp E</p>
      <F />
    </>
  );
};

const F = () => {
  const _context = useContext(MyContext);
  useEffect(() => {
    console.log("New Data Recieved");
  }, [_context.actualData]);
  console.log(_context.actualData);
  return (
    <>
      <p>In comp F</p>
      <div>{}</div>
      <button
        onClick={() => {
          _context.dataFn();
        }}
      >
        ChngeData
      </button>
    </>
  );
};

export default A;
