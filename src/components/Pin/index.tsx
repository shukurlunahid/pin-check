import { FC } from "react";

import { PIN_LENGTH } from "../../const";

import "./index.css";

interface IProps {
  filledLength: number;
}

const Pin: FC<IProps> = ({ filledLength }) => {
  const rows = [];
  for (let i = 0; i < PIN_LENGTH; i++) {
    rows.push(
      <li className="item" key={i}>
        <input type="radio" checked={i < filledLength}></input>
      </li>
    );
  }
  return (
    <div className="pin">
      <ul className="container">{rows}</ul>
    </div>
  );
};

export default Pin;
