import "./counter.css";

type PropsType = {
  counter: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
};

export function Counter(props: PropsType) {
  return (
    <div className="counter">
      <p className="counter__value">{props.counter}</p>
      <div className="plus__minus">
        <button className="btn btn__minus" onClick={props.onDecrement}>
          -1
        </button>
        <button className="btn btn__plus" onClick={props.onIncrement}>
          +1
        </button>
      </div>
      <button className="btn btn__reset" onClick={props.onReset}>
        Сброс счетчика
      </button>
    </div>
  );
}
