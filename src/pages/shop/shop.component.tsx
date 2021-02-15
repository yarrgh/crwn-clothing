import React, { useState } from "react";
import { sectionsData } from "../../common/data";
import { CollectionPreview } from "../../components";

export const Shop = () => {
  const [collections, setCollections] = useState(sectionsData);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};
