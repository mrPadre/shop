import styled from "styled-components";
import {COLORS} from "../../constants/colors";

interface StyleProps{
    num: any;
    picture: string;
}

export const BasketItem = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 40px 10px;
  min-width: 20vw;
  height: 60vh;
  margin: 10px;
  background-color: ${props => props.num % 2 === 0? COLORS.BG_PINK : props.num % 3 === 0 ? COLORS.BG_ACTIVE : COLORS.BG_BLUE};
  background-image: url(${props => props.picture || ''});
  background-repeat: no-repeat;
  background-position: bottom;
  background-blend-mode: soft-light;
  background-position-y: 150px;
  background-size: contain;
  transform: skew(-10deg);
  border: 2px solid ${COLORS.BORDER_DARK};
  color: ${COLORS.FONT_PRIMARY};
  :hover{
  background-blend-mode: normal;
  border: 2px solid ${COLORS.BORDER_DARK};
  }
`;

export const BasketContent = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  scrollbar-width: none;
`;

export const BasketButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin: 10px 0;
  height: 10%;
`;

export const BasketClose = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  cursor: pointer;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  font-size: 25px;
`;

export const BasketEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 35px;
`;