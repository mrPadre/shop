import styled from "styled-components";
import {COLORS} from "../../constants/colors";

interface ModalStyle{
    show: boolean;
}

export const MainModal = styled.div<ModalStyle>`
  display: ${props => props.show? 'flex': 'none'};
  width: 100%;
  height: 100%;
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 20;
`;