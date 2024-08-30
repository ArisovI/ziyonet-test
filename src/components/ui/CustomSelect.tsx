import React from "react";
import { TSelectValues } from "../../types";

type ICustomSelect = {
  options: TSelectValues[];
  handleSelected: (value: string, label: string) => void;
  selected: string;
};

const CustomSelect: React.FC<ICustomSelect> = ({
  options,
  handleSelected,
  selected,
}) => {
  return (
    <ul>
      {options.map((option: any) => (
        <li
          key={option.value}
          onClick={() => handleSelected(option.value, option.label)}
          style={{
            background: selected === option.label ? "#5a87d0" : "",
            color: selected === option.label ? "white" : "",
          }}
        >
          {option.label}
        </li>
      ))}
    </ul>
  );
};

export default CustomSelect;
