import React,{useState} from 'react'

function HomeWork3() {
    return (
        <div>
            <CompA />
        </div>
    )
}
const CompA = () => {
    const [name, setName] = useState({
      key1: 100,
      key2: 200,
      key3: 300
    });
  
    const updaterHelper = () => {
      setName({
        ...name,
        key2: 3210
      });
    };
  
    return (
      <div>
        <CompB updaterHelper={updaterHelper} bProp={name} />
        <CompD anotherProp={name} />
      </div>
    );
  };
  
  const CompB = (props) => {
    return (
      <div>
        <h3>{props.bProp.key1}</h3>
        <h3>{props.bProp.key2}</h3>
        <h3>{props.bProp.key3}</h3>
  
        <CompC cProp={props.bProp} />
        <button onClick={props.updaterHelper}>Click Me</button>
      </div>
    );
  };
  
  const CompC = (props) => {
    return (
      <div>
        <h3>{props.cProp.key1}</h3>
        <h3>{props.cProp.key2}</h3>
        <h3>{props.cProp.key3}</h3>
        <strong>in C</strong>{" "}
      </div>
    );
  };
  
  const CompD = (props) => {
    return (
      <div>
        <h3>{props.anotherProp.key1}</h3>
        <h3>{props.anotherProp.key2}</h3>
        <h3>{props.anotherProp.key3}</h3>
        <strong>in D</strong>
      </div>
    );
  };

export default HomeWork3
