import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const ShowFrame = styled.div`
  width: 80%;
  height: calc(100% - 15px);
  margin: 5px;
  background-color: ${COLORS.BG_PINK};
  border: 2px solid ${COLORS.BG_DARK};
  border-radius: 2px;
  scrollbar-width: none;
  color: ${COLORS.FONT_LITE};
  @media(max-width: 920px){
    width:calc(100% - 15px);
  }
`;

export const ShowTitle = styled.h2`
  color: ${COLORS.BG_LITE};
  text-align: center;
  font-size: 28px;
`;

export const ShowText = styled.p`
  color: ${COLORS.BG_LITE};
  margin: 10px;
  font-size: 22px;
`;

export const ShowBtns = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  margin-top: 20px;
`;

export const ShowBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  scrollbar-width: none;
`;


