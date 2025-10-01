import { useState } from "react";

export default function useSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn((e) => !e);
    console.log(isOn);
  };
  return [isOn, toggle];
}
