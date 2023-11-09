import "./CounterPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCounter } from "./selector";
import { decrementCount, incrementCount, resetCount } from "./actions";
import { Counter } from "../../components/counter/counter";

function CounterPage() {
  const counter = useSelector(getCounter);
  const dispath = useDispatch();

  const onIncremenetHandler = () => {
    dispath(incrementCount());
  };

  const onDecremenetHandler = () => {
    dispath(decrementCount());
  };

  const onResetHandler = () => {
    dispath(resetCount());
  };

  return (
    <Counter
      counter={counter}
      onIncrement={onIncremenetHandler}
      onDecrement={onDecremenetHandler}
      onReset={onResetHandler}
    />
  );
}

export default CounterPage;
