import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import "./form-input.styles.scss";

interface FormInputProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => any;
  label?: string;
}

export const FormInput: FC<
  InputHTMLAttributes<HTMLInputElement> & FormInputProps
> = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value && "shrink"} form-input-label`}
          htmlFor={otherProps.id}
        >
          {label}
        </label>
      )}
    </div>
  );
};
