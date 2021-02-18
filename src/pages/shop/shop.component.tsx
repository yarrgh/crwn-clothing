import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { CollectionsOverview } from "../../components/collections-overview/collections-overview.component";
import { fetchCollections, selectIsFetching } from "../../store/shop/shopSlice";
import { CollectionPage } from "../collection/collection.component";
import { Spinner } from "../../components/spinner/spinner.component";

export const ShopPage = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const isFetching = useSelector(selectIsFetching);

  useEffect(() => {
    dispatch(fetchCollections());
  }, []);

  return (
    <div className="shop-page">
      <Spinner isLoading={isFetching}>
        <Switch>
          <Route exact path={match.path} component={CollectionsOverview} />
          <Route
            path={`${match.path}/:collectionId`}
            component={CollectionPage}
          />
        </Switch>
      </Spinner>
    </div>
  );
};
