import styled from "styled-components";
import {COLORS} from "../../constants/colors";


interface StyleProps{
    select: boolean;
}

export const ContactAddress = styled.div`
  width: 20%;
  height: calc( 100% - 10px);
  margin: 5px 0;
  background-color: ${COLORS.BG_BLUE};
  @media (max-width: 920px){
    display: none;
  } 
`;

export const ContactMap = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  @media (max-width: 920px){
    width: 100%;
  } 
`;

export const ContactMapButton = styled.div`
  position: absolute;
  z-index: 10;
`;

export const AddressItem = styled.div<StyleProps>`
  width: calc(100% - 20px);
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 2px solid ${COLORS.BORDER_DARK};
  font-size: 20px;
  cursor: pointer;
  color: ${props => props.select? COLORS.FONT_LITE : COLORS.FONT_PRIMARY};
  :hover {
    border-bottom: 2px solid ${COLORS.BORDER_LITE};
  }
`;

export const AddressDescription = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  display: flex;
  align-self: flex-end;
`;

export const AddressPhone = styled.div`
  width: calc(100% - 20px);
  margin: 30px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  display: flex;
  color: ${COLORS.FONT_LITE};
`;

export const AddressIcon = styled.div`
  font-size: 20px;
  margin: 10px;
`;
