import React from "react";
import { Content } from "./Content";
import { InputNumber } from "./InputNumber";
import { Result } from "./Result";

export const Calc = () => {
  return (
    <div>
      <InputNumber></InputNumber>
      <Content></Content>
      <Result></Result>
    </div>
  );
};
