import styled, {keyframes} from "styled-components";
import {COLORS} from "../../constants/colors";

const Rotate = keyframes`
  to {transform: rotate(360deg);}
`;

export const ImitationSyncAnim = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 50px;
  height: 50px;
  color: ${COLORS.FONT_ACTIVE};
  font-size: 40px;
  animation: ${Rotate} 2s linear infinite;
  @media (max-width: 920px){
    
  }
`;

export const ImitationSync = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 50px;
  height: 50px;
  color: ${COLORS.FONT_ACTIVE};
  font-size: 40px;
  @media (max-width: 920px){
    
  }
`;