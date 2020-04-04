import styled, {keyframes} from "styled-components";
import {COLORS} from "../../../constants/colors";


export const SellModalBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  @media(max-width: 1200px){
    align-self: flex-end;
    width: 80%;
    height: 75vh;
    margin: 10px 0;
    overflow-y: auto;
    ::-webkit-scrollbar {width: 0};
    scrollbar-width: none;
  }
  @media (max-width: 620px){
    flex-direction: column;
    display: block;
  }
`;

export const SellPayContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  overflow-y: auto;
  @media (max-width: 620px){
    width: 100%;
  }
`;

export const SellReceipt = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 95%;
  width: 40%;
  border: 2px solid ${COLORS.BORDER_DARK} ;
  border-radius: 3px;
  overflow-y: auto;
  flex-direction: column;
  padding: 10px;
  align-self: flex-start;
  margin-right: 20px;
  ::-webkit-scrollbar {width: 0};
  scrollbar-width: none;
  @media (max-width: 620px){
    margin: 0;
    width: 90%;
    height: auto;
    align-self: center;
  }
`;



export const SellCloseBtn = styled.button`
   border: none;
   background: none;
   position: absolute;
   top: 10px;
   right: 10px;
   font-size: 20px;
   cursor: pointer;
`;

export const SellItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 920px){
    flex-direction: column;
    justify-content: unset;
  }
`;

export const SellItemText = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2px;
  @media (max-width: 920px){
    align-self: flex-start;
  }
`;

export const SellNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  @media (max-width: 920px){
  }
`;

export const SellNumberText = styled.span`
  text-align: center;
  @media (max-width: 920px){
  }
`;

export const SellNumberBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  @media (max-width: 920px){
  }
`;

export const SellItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
  @media (max-width: 920px){
    align-self: flex-end;
  }
`;

export const SellTotalPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  margin: 10px;
`;

export const SellShopAddress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: 0 10px;
  border: 2px dashed ${COLORS.BORDER_DARK}; 
`;

export const SellAddressP = styled.p`
  padding: 0;
  margin: 2px;
`;

export const SellReceiptTitle = styled.h2`
  text-align: center;
  font-size: 26px;
  margin: 20px 0;
`;



export const SellPayTitle = styled.h2`
  width: 100%;
  font-size: 35px;
  text-align: center;
  @media (max-width: 620px) {
    font-size: 25px;
  }
`;

export const SellPayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
`;

export const SellPayImg = styled.img`
  width: 60%;
  margin: 10px;
  
`;

export const SellPayCardBrands = styled.div`
  width: 100%;
  height: 80px;
  color: ${COLORS.BG_PINK};
  font-size: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: flex-start;
  align-items: center;
`;

export const SellThanksBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  font-size: 12px;
  border: 2px dashed ${COLORS.BORDER_DARK};
  @media (max-width: 920px){
  }
`;

export const SellThanksText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  @media (max-width: 920px){
  }
`;


export const SellPaySum = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  height: 70px;
  background: ${COLORS.BG_BLUE};
  position: relative;
  
  margin: 20px 0;
  @media (max-width: 620px){
    font-size: 20px;
  }
`;