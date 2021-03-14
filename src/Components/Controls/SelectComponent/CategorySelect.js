import React from "react";
import Select from "react-select";

const options = [
  {value: "maleSmallTalk", label: "Obywatel"},
  {value: "femaleSmalltalk", label: "Obywatelka"},
  {value: "vatrasSpeech", label: "Przemówienie Vatrasa"},
  {value: "xardasIntro", label: "Xardas Intro"},
  {value: "howManyGold", label: "ZŁOTO"},
  {value: "fight", label: "Ah walka!"},
  {value: "others", label: "Różne"},
];

const CategorySelect = (props) => {

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

export default CategorySelect;
