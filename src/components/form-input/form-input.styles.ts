import styled, { css } from "styled-components";

const subColor = "rgb(128, 128, 128)";
const mainColor = "rgb(0, 0, 0)";

const shrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`;

export const Group = styled.div`
  position: relative;
  margin: 35px 0;
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${shrinkLabel}
  }

  & ~ ${Label} {
    ${({ value }) => value && shrinkLabel}
  }

  &[type="password"] {
    letter-spacing: 0.3em;
  }
`;
