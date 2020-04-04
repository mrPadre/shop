import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const BasketBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 920px){
    position: fixed;
    background-color: ${COLORS.FONT_LITE};
    top: 0;
    left: 0;
    z-index: 100;
  }
`;

export const BasketImage = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: row;
  font-size: 40px;
  position: relative;
  @media (max-width: 920px){
   display: none; 
  }
`;

export const BasketText = styled.div`
  font-size: 25px;
  margin: 10px;
  @media (max-width: 920px){
    
  }
`;

export const BasketNumber = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid ${COLORS.BORDER_DARK};
  width: 20px;
  height: 20px;
  color: ${COLORS.FONT_PRIMARY};
`;