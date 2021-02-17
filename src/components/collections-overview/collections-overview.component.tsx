import React from "react";
import { useSelector } from "react-redux";
import { CollectionPreview } from "..";
import { selectCollectionsForPreview } from "../../store/shop/shopSlice";
import "./collections-overview.styles.scss";

export const CollectionsOverview = () => {
  const collections = useSelector(selectCollectionsForPreview);

  return (
    <div className="collections-overview">
      {collections.map((collection) => (
        <CollectionPreview
          key={collection.id}
          title={collection.title}
          items={collection.items!}
        />
      ))}
    </div>
  );
};
