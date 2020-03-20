import styled from "styled-components";
import { COLORS } from "../../constants/colors";

interface StyleButton{
    size?: string;
    color?: "lite" | "dark" | "blue" | "red";

}

export const ButtonBody = styled.button<StyleButton>`
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  width: ${props => props.size || '100px'};
  margin: 0 20px;
  border: ${props => props.color === "lite" || props.color === "red"? COLORS.BORDER_DARK : COLORS.BORDER_LITE};
  border-radius: 10px;
  background-color: ${props => props.color === "lite"? COLORS.BG_ACTIVE : props.color === "dark"? COLORS.BG_DARK : props.color === "red"? COLORS.BG_CANCEL : props.color === "blue"? COLORS.BG_BLUE : 'none'};
  color: ${props => props.color === "lite" || props.color === "red"? COLORS.BORDER_DARK : COLORS.BORDER_LITE};
`;

export const ButtonIcon = styled.div`
  margin-right: 10px;
  width: 30px;
`;