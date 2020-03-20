import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export type AlignType = 'center' | 'flex-end' | 'flex-start';

interface StyledProps {
    width?: string;
    align?: AlignType;
}

export const Column = styled.div<StyledProps>`
  display: flex;
  height: 100%;
  width: ${props => props.width || '100%'};
  align-items: ${props => props.align || 'center'};
  justify-content: center;
  flex-direction: row;
  position: relative;
  @media(max-width: 920px){
    width: 100%;
    flex-direction: column;
  }
`;