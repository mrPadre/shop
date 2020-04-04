import styled from "styled-components";
import {COLORS} from "../../constants/colors";

interface StyleProps{
    select: boolean;
}

export const PaginatorBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PaginatorItem = styled.button<StyleProps>`
  display: flex;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 5px;
  background-color: ${COLORS.BG_PINK};
  color: ${props => props.select? COLORS.BG_LITE : COLORS.FONT_PRIMARY};
  outline: none;
  cursor: pointer;
  margin: 2px;
`;

export const PaginatorNavigation = styled.button`
  display: flex;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  background-color: ${COLORS.BG_PINK};
  outline: none;
  cursor: pointer;
  margin: 2px;
`;