import { useState } from "react";

const useInput = (initValue) => {
  const [inputHook, setInputHook] = useState(initValue);

  const resetState = () => {
    setInputHook(initValue || "");
  };

  const bindState = {
    value: inputHook,
    onChange: (inputEvent) => setInputHook(inputEvent.target.value),
  };

  return [inputHook, bindState, resetState];
};

export default useInput;
