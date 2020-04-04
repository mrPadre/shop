import styled from "styled-components";
import {COLORS} from "../../constants/colors";

interface StyleProps{
    isSearch: boolean;
}

export const Search = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const SearchInput = styled.input`
  line-height: 30px;
  border: 1px solid ${COLORS.BORDER_DARK};
  border-radius: 10px;
  background-color: ${COLORS.BG_LITE};
  width: 200px;
  padding: 0 10px;
`;

export const SearchBtn = styled.div`
  @media (max-width: 1300px){
    display: none;
  }
`;

export const SearchResult = styled.div<StyleProps>`
  display: ${props => props.isSearch? 'flex': 'none'};
  position: absolute;
  bottom: -50px;
  width: 250px;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  @media (max-width: 920px){
    bottom: -20px;
  }
`;