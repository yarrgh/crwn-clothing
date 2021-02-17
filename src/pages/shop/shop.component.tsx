import React from "react";
import { useSelector } from "react-redux";
import { CollectionPreview } from "../../components";
import { selectCollections } from "../../store/shop/shopSlice";

export const Shop = () => {
  const collections = useSelector(selectCollections);

  return (
    <div className="shop-page">
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
