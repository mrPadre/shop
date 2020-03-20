import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const TopMenuBody = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40vw;
  @media only screen and (max-width: 900px){
    position: fixed;
    width: 100vw;
    top: 10px;
    left: -100vw;
    height: 100vh;
    background-color: ${COLORS.BG_MAIN};
    flex-direction: column;
    border-right: 2px solid ${COLORS.FONT_PRIMARY};
    z-index: 11;
  }
`;

export const TopMenuLink = styled.div`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  margin: 10px auto;
  color: ${COLORS.FONT_PRIMARY};
`;

export const TopMenuIcon = styled.div`
  display: none;
  font-size: 35px;
  @media(max-width: 900px){
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -35px;
    top: 0;
  }
`;

export const TopMenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  margin: 0 5px;
  transform: skew(-15deg);
  background-color: ${COLORS.BG_BLUE};
`;