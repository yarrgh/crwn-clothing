import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { CollectionItem } from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../store/shop/shopSlice";
import "./collection.styles.scss";

interface MatchParams {
  collectionId: string;
}

export const CollectionPage = () => {
  const match = useRouteMatch<MatchParams>();
  const collection = useSelector(selectCollection(match.params.collectionId));
  const { title, items } = collection!;

  return (
    <div className="collection-page">
      <h2 className="title">{title.toUpperCase()}</h2>
      <div className="items">
        {items?.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
