import { styled } from "styled-components";

type ContainerProps = {
  bg: string;
  hbg: string;
  tc: string;
  htc: string;
  size: "small" | "medium" | "large";
  type: "primary" | "secondary";
};

export const Container = styled.button<ContainerProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: ${(props) =>
    props.type === "primary" ? "none" : `1px solid ${props.bg}`};
  border-radius: 60px;
  background-color: ${(props) =>
    props.type === "primary" ? props.bg : "transparent"};
  min-width: 5.438rem;
  padding: 0 1rem;
  height: ${(props) => {
    switch (props.size) {
      case "small":
      case "medium":
        return "1.5rem";
      case "large":
        return "2.125rem";
    }
  }};
  color: ${(props) => (props.type === "primary" ? props.tc : props.bg)};
  transition: all 0.25s ease-in-out;

  &:disabled {
    border: 1px solid rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:hover {
    background-color: ${(props) => props.hbg};
    color: ${(props) => props.htc};
  }
`;
