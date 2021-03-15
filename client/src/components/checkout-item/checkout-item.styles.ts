import styled, { css } from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const ItemDetailStyles = css`
  width: 23%;
`;

export const ItemDetail = styled.span`
  ${ItemDetailStyles}
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const ItemQuantity = styled.span`
  ${ItemDetailStyles}
  display: flex;
`;

export const ItemArrow = styled.span`
  cursor: pointer;
`;

export const ItemQuantityValue = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
