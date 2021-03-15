import React from "react";
import { useSelector } from "react-redux";
import { Spinner } from "../../components/spinner/spinner.component";
import { selectIsFetching } from "../../store/shop/shopSlice";
import { CollectionPage } from "./collection.component";

const CollectionContainer = () => {
  const isFetching = useSelector(selectIsFetching);

  return (
    <Spinner isLoading={isFetching}>
      <CollectionPage />
    </Spinner>
  );
};

export default CollectionContainer;
