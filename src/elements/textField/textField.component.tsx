import {FC, InputHTMLAttributes} from "react";

const TextFieldComponent: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return (
    <input type='text' {...props} />
  )
}
export default TextFieldComponent