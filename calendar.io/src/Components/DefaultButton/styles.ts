import { Link } from "react-router-dom";
import styled from "styled-components";
import {theme} from "../../theme";

interface IButtonContainer {
  minWidth?: string;
  minHeight?: string;
  backgrounColor?: string;
  hoverBackgrounColor?: string;
}

interface IButtonCard {
  fontSize?: string;
}

export const ButtonContainer = styled.div<IButtonContainer>`
display: flex;
width: 20%;
height: 10%;
min-width: ${({minWidth})=> minWidth};
min-height: ${({minHeight})=> minHeight};

margin: 10px;
align-items: center;
justify-content: center;

background-color: ${({backgrounColor})=> backgrounColor ? backgrounColor : theme.colors.fourth};
border-radius: 20px;
:hover{
    background-color: ${({hoverBackgrounColor})=> hoverBackgrounColor ? hoverBackgrounColor : theme.colors.first};
    cursor: pointer;
  }

`;

export const ButtonCard = styled.div<IButtonCard>`
  font-size: ${({fontSize})=> fontSize ? fontSize : "30px"};
  color: #000;
 
  text-decoration-line: none;
`;

export const CustomLink = styled(Link)`
 display: flex;
  width: 90%;
  height: 90%; 

  text-decoration: none;

  align-items: center;
  justify-content: center; 
`;