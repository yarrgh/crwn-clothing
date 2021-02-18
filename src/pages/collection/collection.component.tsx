import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { selectCollection } from "../../store/shop/shopSlice";
import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
  StyledItem,
} from "./collection.styles";

interface MatchParams {
  collectionId: string;
}

export const CollectionPage = () => {
  const match = useRouteMatch<MatchParams>();
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection!;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <CollectionItemsContainer>
        {items?.map((item: any) => (
          <StyledItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};
