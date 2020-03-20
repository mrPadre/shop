import styled from "styled-components";
import {COLORS} from "../../constants/colors";

interface StyleProps{
    selected: boolean;
}

export const CarouselBody = styled.div`
  width: 110px;
  height: 100%;
  opacity: 0.9;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  ::-webkit-scrollbar {width: 0};
  scrollbar-width: none;
  :hover{
  opacity: 1;
  }
  @media(max-width: 920px){
    width: 100%;
    flex-direction: row;
    overflow-x: scroll;
  }
`;

export const CarouselItem = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  border-radius: 5px;
  background-color: ${props => props.selected? COLORS.BG_LITE : ''};
  border: ${props => props.selected? `2px solid ${COLORS.BORDER_DARK}` : ''};
  @media(max-width: 920px){
   margin: 5px 20px;
  }
`;

export const CarouselImg = styled.img`
  width: 100px;
  padding: 5px 0;
`;

export const CarouselTitle = styled.span`
  padding: 0;
  margin: 5px 0;
  text-align: center;
`;

export const CarouselPrice = styled.p`
  padding: 0;
  margin: 5px 0;
  text-align: center;
  color: ${COLORS.BG_CANCEL};
`;

export const CarouselLine = styled.div`
  margin: 5px 0;
  display: flex;
  width: 100%;
  height: 3px;
  background-color: ${COLORS.BG_LITE};
  @media(max-width: 920px){
    display: none;
  }
`;