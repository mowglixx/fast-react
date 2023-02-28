import { useRef } from "react";

export const ReactiveInput = ({ nameList, setNameList }) => {
  const inputField = useRef();
  const addNameButton = useRef();

  const addName = () => {
    setNameList([inputField.current.value, ...nameList]);
  };

  return (
    <div id="Component">
      <input ref={inputField} placeholder="enter a name" type="text" />
      <button ref={addNameButton} onClick={addName}>
        Add Name
      </button>
    </div>
  );
};
