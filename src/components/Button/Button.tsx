import { Container } from "./Button.styles";

interface Props {
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  size?: "small" | "medium" | "large";
  id?: string;
  dataTestId?: string;
  disabled: boolean;
  text: string;
  textColor: string;
  hoverTextColor: string;
  type: "primary" | "secondary";
  onClick: () => void;
}

const Button = ({
  backgroundColor = "#5C52CC",
  hoverBackgroundColor = "#8880EA",
  textColor = "#ffffff",
  hoverTextColor = "#ffffff",
  size = "medium",
  id,
  dataTestId,
  disabled = false,
  text = "Button",
  type = "primary",
  onClick,
}: Props) => {
  return (
    <Container
      id={id}
      bg={backgroundColor}
      size={size}
      data-testid={dataTestId}
      disabled={disabled}
      hbg={hoverBackgroundColor}
      tc={textColor}
      htc={hoverTextColor}
      type={type}
      onClick={onClick}
    >
      {text}
    </Container>
  );
};

export default Button;
