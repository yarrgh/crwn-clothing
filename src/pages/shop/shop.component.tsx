import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";
import { CollectionPage } from "../collection/collection.component";

export const ShopPage = () => {
  const match = useRouteMatch();

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
