import React from "react";
import { Product } from "../../common/interfaces/product";
import { CollectionItem } from "../collection-item/collection-item.component";
import {
  CollectionPreviewContainer,
  Preview,
  Title,
} from "./collection-preview.styles";

interface CollectionPreviewProps {
  title: string;
  items: Product[];
}

export const CollectionPreview: React.FC<CollectionPreviewProps> = ({
  title,
  items,
}) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollectionPreviewContainer>
  );
};
