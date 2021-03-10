import React from "react";
import Select from "react-select";

const options = [
  {value: "maleSmallTalk", label: "Obywatel"},
  {value: "femaleSmalltalk", label: "Obywatelka"},
  {value: "vatrasSpeech", label: "Przemówienie Vatrasa"},
  {value: "xardasIntro", label: "Xardas Intro"},
  {value: "howManyGold", label: "ZŁOTO"},
  {value: "fight", label: "Ah walka!"},
];

const CategorySelect = (props) => {
  return (
    <Select
      options={options}
      onChange={props.onChangeHandler}
      defaultValue={props.value}
      placeholder="Wybierz"
    />
  );
};

export default CategorySelect;
