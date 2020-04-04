import styled from "styled-components";
import {COLORS} from "../../../constants/colors";

export const ModalBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: relative;
  width: 70%;
  height: 80vh;
  background-color: ${COLORS.BG_LITE};
  padding: 20px;
  border-radius: 10px;
  border: 4px solid ${COLORS.BORDER_DARK};
  z-index: 200;
  color: ${COLORS.FONT_PRIMARY};
  @media (min-width: 1700px) {
    width: 60%;
    height: 70vh;
  }
  
  @media(max-width: 920px){
    background-image: none;
    width: 80%;
    height: 70vh;
  }
`;

export const ModalTitle = styled.h1`
   width: 100%;
   text-align: center;
   font-size: 40px;
   @media(max-width: 920px){
    font-size: 30px;
    }
`;

export const ModalContent = styled.div`
   width: 80%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 30px;
   @media(max-width: 920px){
    align-self: center;
    width: 100%;
    font-size: 20px;
  }
`;

export const ModalButton = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   align-items: center;
   justify-content: center;
`;

export const CloseBtn = styled.button`
   border: none;
   background: none;
   position: absolute;
   top: 10px;
   right: 10px;
   font-size: 20px;
   cursor: pointer;
`;
export const ModalImg = styled.img`
   width: 30%;
   position: relative;
   bottom: -20px;
   @media(max-width: 920px){
    display: none;
   }
`;

export const ModalInfo = styled.div`
   width: 70%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   @media(max-width: 920px){
    width: 100%;
   }
`;

export const ModalPrice = styled.div`
   font-size: 30px;
   margin: 10px;
   color: ${COLORS.FONT_PRIMARY};
   @media(max-width: 920px){
    font-size: 24px;
   }
`;