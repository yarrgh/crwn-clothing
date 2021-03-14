import React from "react";
import { useSelector } from "react-redux";
import { selectIsFetching } from "../../store/shop/shopSlice";
import { Spinner } from "../spinner/spinner.component";
import { CollectionsOverview } from "./collections-overview.component";

const CollectionsOverViewContainer = () => {
  const isFetching = useSelector(selectIsFetching);

  return (
    <Spinner isLoading={isFetching}>
      <CollectionsOverview />
    </Spinner>
  );
};

export default CollectionsOverViewContainer;
