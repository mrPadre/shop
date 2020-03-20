import styled from 'styled-components';
import {Colors, COLORS} from "../../constants/colors";

interface StyledProps {
    size?: string;
    color?: Colors;
    image?: string;
}

export const BlockContainer = styled.div<StyledProps>`
  display: flex;
  
  background-color: ${props => props.color || ''};
  background-image: url(${props => props.image || ''});
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  height: ${props => props.size || "auto"};
  width: 100%;
  @media (max-width: 920px) {
    flex-wrap: wrap;
    height: auto;
  }
`;
