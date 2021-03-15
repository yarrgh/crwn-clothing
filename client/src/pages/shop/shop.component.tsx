import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { shopActions } from "../../store/shop/shopSlice";
import CollectionsOverViewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionContainer from "../collection/collection.container";

export const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(shopActions.fetchCollections());
  }, []);

  return (
    <div className="shop-page">
      <Switch>
        <Route
          exact
          path={match.path}
          component={CollectionsOverViewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Switch>
    </div>
  );
};
