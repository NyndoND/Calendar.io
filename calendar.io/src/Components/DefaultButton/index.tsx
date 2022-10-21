import { Link } from 'react-router-dom';
import {
  ButtonContainer,
  ButtonCard,
  CustomLink
} from './styles';

interface IDefaultButton {
  textButton: string;
  onClick: () => void;
  navigationTo?: string;
  minWidth?: string;
  minHeight?: string;
  fontSize?: string;
  backgrounColor?: string;
  hoverBackgrounColor?: string;

}
export function DefaultButton({
  textButton,
  onClick,
  navigationTo,
  minHeight,
  minWidth,
  fontSize,
  backgrounColor,
  hoverBackgrounColor }: IDefaultButton) {

  function handleClick() {

  }
  return (
    <ButtonContainer
      onClick={onClick}
      minHeight={minHeight}
      minWidth={minWidth}
      backgrounColor={backgrounColor}
      hoverBackgrounColor={hoverBackgrounColor}
    >
      {navigationTo ?
        <CustomLink to={navigationTo} >
          <ButtonCard fontSize={fontSize}>
            {textButton}
          </ButtonCard>
        </CustomLink>
        : <ButtonCard fontSize={fontSize}>
          {textButton}
        </ButtonCard>
      }
    </ButtonContainer>

  )
}