import { useEffect, useState } from "react";

import { setFirstPin, setSecondPin } from "../../store/context";
import { useAppDispatch, useAppSelector } from "../../store";

import { PIN_LENGTH, PIN_NUMBERS } from "../../const";

import "./index.css";

const Form = () => {
  const dispatch = useAppDispatch();
  const { context } = useAppSelector((state) => state);
  const [pinArr, setPinArr] = useState<any[]>([]);
  const { firstPin, secondPin } = context;

  useEffect(() => {
    if (pinArr.length === PIN_LENGTH) {
      setPinArr([]);
    }
    if (firstPin.length < PIN_LENGTH) {
      dispatch(setFirstPin(pinArr));
    }

    if (firstPin.length === PIN_LENGTH && secondPin.length < PIN_LENGTH) {
      dispatch(setSecondPin(pinArr));
    }
  }, [pinArr]);

  useEffect(() => {
    if (secondPin.length === PIN_LENGTH) {
      if (firstPin.join("") === secondPin.join("")) {
        alert("Ugurlu");
      } else {
        alert("Ugursuz");
      }
      dispatch(setFirstPin([]));
      dispatch(setSecondPin([]));
      setPinArr([]);
    }
  }, [firstPin, secondPin]);

  const handleClick = (item: any) => {
    if (item === "") return;
    if (item === "sil") {
      setPinArr((current) => current.slice(0, -1));
      return;
    }
    setPinArr([...pinArr, item]);
  };

  return (
    <div className="form">
      <ul className="container">
        {PIN_NUMBERS.map((item, index) => (
          <li onClick={() => handleClick(item)} className="item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
