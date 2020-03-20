import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const ShowFrame = styled.div`
  width: 80%;
  height: calc(100% - 15px);
  margin: 5px;
  background-color: ${COLORS.BG_PINK};
  border: 3px solid ${COLORS.BG_BLUE};
  border-radius: 10px;
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