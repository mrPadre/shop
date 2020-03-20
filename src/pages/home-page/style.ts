import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const HomeBox = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: calc(100% - 10px);
  margin: 0 5px;
  overflow: hidden;
  background-color: ${COLORS.BG_BLUE};
  @media(max-width: 920px){
    width: 100%;
    margin: 2px 5px;
  }
`;

export const MainImage = styled.img`
  @media(max-width: 920px){
    display: none;
  }
`;