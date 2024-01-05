import React from "react";
import { CHECKED_SHIP, CHECKED_WATER, SHIP, WATER } from "../state/cellState";

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};

const cellStateMap = {
  [WATER]: "",
  [SHIP]: "",
  [CHECKED_WATER]: "🌊",
  [CHECKED_SHIP]: "💣",
};

const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button className="cell" onClick={() => handleClick(y, x)}>
      {cellStateMap[value]}
    </button>
  );
};

type BatteleFildProps = {
  matrix: number[][];
  onFire: (y: number, x: number) => void;
};

export const BatteleFild = ({ matrix, onFire }: BatteleFildProps) => {
  return (
    <div>
      {matrix.map((line, lineNumber) => (
        <div className="line" key={lineNumber}>
          {line.map((v, i) => (
            <Cell
              handleClick={onFire}
              key={`${lineNumber}${i}`}
              value={v}
              y={lineNumber}
              x={i}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
