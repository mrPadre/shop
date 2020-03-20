import styled from "styled-components";
import {COLORS} from "../../constants/colors";

export const Search = styled.div`
  display: flex;
  flex-direction: row;
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