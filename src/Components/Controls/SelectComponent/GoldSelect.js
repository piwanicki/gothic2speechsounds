import React from "react";
import Select from "react-select";

const options = [
  {value: 0, label: 10},
  {value: 1, label: 20},
  {value: 2, label: 30},
  {value: 3, label: 40},
  {value: 4, label: 50},
  {value: 5, label: 60},
  {value: 6, label: 70},
  {value: 7, label: 80},
  {value: 8, label: 90},
  {value: 9, label: 100},
  {value: 10, label: 150},
  {value: 11, label: 200},
  {value: 12, label: 250},
  {value: 13, label: 300},
  {value: 14, label: 350},
  {value: 15, label: 400},
  {value: 16, label: 450},
  {value: 17, label: 500},
  {value: 18, label: 550},
  {value: 19, label: 600},
  {value: 20, label: 650},
  {value: 21, label: 700},
  {value: 22, label: 750},
  {value: 23, label: 800},
  {value: 24, label: 850},
  {value: 25, label: 900},
  {value: 26, label: 950},
  {value: 27, label: 1000},
];

const GoldSelect = (props) => {

  const selectedValue = options.find(o => o.value === props.value);
  return (
    <Select
      options={options}
      onChange={props.onChangeHandler}
      value={selectedValue}
      placeholder="Wybierz"
    />
  );
};

export default GoldSelect;
