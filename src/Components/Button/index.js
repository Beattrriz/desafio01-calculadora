import { ButtonContainerS } from "./styles";

const Button = ({label, onClick}) => {
    return (
      <ButtonContainerS onClick={onClick}>
        {label}
      </ButtonContainerS>
    );
  }
  
  export default Button;
  