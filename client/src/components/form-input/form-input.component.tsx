import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import { Group, Input, Label } from "./form-input.styles";

interface FormInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => any;
  label?: string;
}

export const FormInput: FC<
  InputHTMLAttributes<HTMLInputElement> & FormInputProps
> = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <Input className="form-input" onChange={handleChange} {...otherProps} />
      {label && <Label htmlFor={otherProps.id}>{label}</Label>}
    </Group>
  );
};
