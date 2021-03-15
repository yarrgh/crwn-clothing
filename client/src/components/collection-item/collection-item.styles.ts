import styled from "styled-components";
import { CustomButton } from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;

export const AddToCartButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  ${CollectionItemContainer}:hover & {
    opacity: 0.85;
    display: flex;
  }
`;

interface CollectionItemImageProps {
  imageUrl: string;
}

export const CollectionItemImage = styled.div<CollectionItemImageProps>`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: url("${({ imageUrl }) => imageUrl}");

  ${CollectionItemContainer}:hover & {
    opacity: 0.8;
  }
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const CollectionName = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const CollectionPrice = styled.span``;
