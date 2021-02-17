import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../store/shop/shopSlice";
import { CollectionPreview } from "../collection-preview/collection-preview.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <CollectionsOverviewContainer>
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items!}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};
