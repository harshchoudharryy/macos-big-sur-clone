import { useRef, useEffect, useState } from "react";
import { MdCircle, MdOutlineClose, MdMinimize, MdCode } from "react-icons/md";
import { useCalculatorStore } from "../../library/useCalculatorStore";

import {
  Modal,
  Header,
  Buttons,
  Display,
  Keypad,
  Key,
} from "./CalculatorStyle";

export function Calculator() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const { closeCalculator } = useCalculatorStore();

  const offset = useRef({ x: 0, y: 0 });

  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState<string | null>(null);
  const [prev, setPrev] = useState<string | null>(null);

  /* ================= DRAG ================= */
  const startDrag = (e: React.MouseEvent) => {
    if (!modalRef.current) return;
    const rect = modalRef.current.getBoundingClientRect();
    offset.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
    setDragging(true);
  };

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!dragging || !modalRef.current) return;
      modalRef.current.style.left = `${e.clientX - offset.current.x}px`;
      modalRef.current.style.top = `${e.clientY - offset.current.y}px`;
    };
    const stop = () => setDragging(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", stop);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", stop);
    };
  }, [dragging]);

  /* ================= CALCULATOR LOGIC ================= */

  const inputNumber = (num: string) => {
    setValue((prev) => (prev === "0" ? num : prev + num));
  };

  const clear = () => {
    setValue("0");
    setPrev(null);
    setOperator(null);
  };

  const setOp = (op: string) => {
    setPrev(value);
    setOperator(op);
    setValue("0");
  };

  const calculate = () => {
    if (!prev || !operator) return;

    const a = parseFloat(prev);
    const b = parseFloat(value);
    let result = 0;

    switch (operator) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "×":
        result = a * b;
        break;
      case "÷":
        result = b === 0 ? 0 : a / b;
        break;
    }

    setValue(result.toString());
    setPrev(null);
    setOperator(null);
  };

  return (
    <Modal ref={modalRef}>
      <Header onMouseDown={startDrag} />

     <Buttons onPointerDown={(e) => e.stopPropagation()}>
  <span onClick={closeCalculator}>
    <MdOutlineClose />
    <MdCircle />
  </span>

  <span>
    <MdMinimize />
    <MdCircle />
  </span>

  <span>
    <MdCode />
    <MdCircle />
  </span>
</Buttons>

      <Display>{value}</Display>

      <Keypad>
        <Key className="light" onClick={clear}>AC</Key>
        <Key className="light">±</Key>
        <Key className="light">%</Key>
        <Key className="operator" onClick={() => setOp("÷")}>÷</Key>

        <Key onClick={() => inputNumber("7")}>7</Key>
        <Key onClick={() => inputNumber("8")}>8</Key>
        <Key onClick={() => inputNumber("9")}>9</Key>
        <Key className="operator" onClick={() => setOp("×")}>×</Key>

        <Key onClick={() => inputNumber("4")}>4</Key>
        <Key onClick={() => inputNumber("5")}>5</Key>
        <Key onClick={() => inputNumber("6")}>6</Key>
        <Key className="operator" onClick={() => setOp("-")}>−</Key>

        <Key onClick={() => inputNumber("1")}>1</Key>
        <Key onClick={() => inputNumber("2")}>2</Key>
        <Key onClick={() => inputNumber("3")}>3</Key>
        <Key className="operator" onClick={() => setOp("+")}>+</Key>

        <Key className="zero" onClick={() => inputNumber("0")}>0</Key>
        <Key onClick={() => inputNumber(".")}>.</Key>
        <Key className="operator" onClick={calculate}>=</Key>
      </Keypad>
    </Modal>
  );
}
