import styled from "styled-components";
import {COLORS} from "../../constants/colors";


export const CatalogBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  overflow-y: scroll;
  ::-webkit-scrollbar {width: 0};
  scrollbar-width: none;
`;

export const CatalogPaginator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px;
`;

export const CatalogPrice = styled.p`
  text-align: center;
  margin: 5px;
`;
export const CatalogText = styled.p`
  text-align: center;
  margin: 5px;
`;

export const CatalogImage = styled.img`
  width: 150px;
  margin: 0 10px;
`;

export const CatalogItem = styled.div`
  width: 200px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  margin: 5px 10px;
  transform: skew(-10deg);
  border: 2px solid ${COLORS.BORDER_DARK};
  background-color: ${COLORS.BG_LITE};
  @media (max-width: 920px) {
    transform: none;
  }
  
`;

export const CatalogContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;
  background-color: ${COLORS.BG_LITE};
  @media (max-width: 920px) {
    align-items: center;
    justify-content: center;
  }
 `