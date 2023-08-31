import { useAppSelector } from "../../store";

import Pin from "../../components/Pin";
import Form from "../../components/Form";

import "./index.css";

const Login = () => {
  const { context } = useAppSelector((state) => state);
  const { firstPin, secondPin } = context;

  return (
    <div className="login">
      <h2>Pin kodu yazın</h2>
      <Pin filledLength={firstPin.length} />
      <h2>Pin kodu təkrarlayın</h2>
      <Pin filledLength={secondPin.length} />
      <Form />
    </div>
  );
};

export default Login;
