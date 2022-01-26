import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

/**
 * An input control which will only accept number and has controls to increment and decrement input on click
 * input will only accept number 0 - 9
 * @param {*} props
 * @returns
 */
export default function NumberInput(props) {
  const [inputValue, setInputValue] = useState(props.inputValue);

  useEffect(() => {
    if (props.inputValue !== inputValue) {
      setInputValue(props.inputValue);
    }
    // eslint-disable-next-line
  }, [props.inputValue]);

  const updateValue = (event, goUp) => {
    event.preventDefault();
    event.stopPropagation();

    if (goUp) {
      setInputValue(inputValue + 1);
      props.onChangeCallback(inputValue + 1);
    } else {
      if (
        goUp === undefined &&
        parseInt(event.target.value) >= parseInt(props.minimum)
      ) {
        setInputValue(parseInt(event.target.value));
        props.onChangeCallback(parseInt(event.target.value));
      }
      if (inputValue - 1 >= props.minimum) {
        setInputValue(inputValue - 1);
        props.onChangeCallback(inputValue - 1);
      }
    }
  };

  return (
    <div className={`${props.wrapperStyleClass} center-all`}>
      <button
        onClick={(e) => updateValue(e, false)}
        className="number-control-button"
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            let value = e.target.value;

            if (isNaN(value)) {
              value = inputValue;
            } else if (value.trim().length === 0) {
              value = 0;
            }

            setInputValue(parseInt(value));
            props.onChangeCallback(parseInt(value));
          }}
        />
      </span>
      <button
        onClick={(e) => updateValue(e, true)}
        className="number-control-button"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
