import { useState } from "react";

import { ReactiveInput } from "./ReactiveInput";

const App = () => {
  const [nameList, setNameList] = useState([]);

  return (
    <div id="App">
      <ReactiveInput nameList={nameList} setNameList={setNameList} />
      <ul>
        {nameList.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
