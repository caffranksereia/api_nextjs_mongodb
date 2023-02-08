import { ButtonHTMLAttributes } from "react";
import * as Style from "./styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}
export default function Button({children, ...rest}: ButtonProps){
  return <Style.styledButton {...rest}>{children}</Style.styledButton>;
}
