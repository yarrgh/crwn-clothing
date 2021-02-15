import React from "react";
import { Product } from "../../common/interfaces/product";
import { CollectionItem } from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

interface CollectionPreviewProps {
  title: string;
  items: Product[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherProps }) => (
            <CollectionItem key={id} id={id} {...otherProps} />
          ))}
      </div>
    </div>
  );
};
