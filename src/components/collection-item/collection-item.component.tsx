import React, { FC } from "react";
import "./collection-item.styles.scss";

interface CollectionItemProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export const CollectionItem: FC<CollectionItemProps> = ({
  id,
  name,
  price,
  imageUrl,
}) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};
