import React from "react";
import { Directory } from "../../components/directory/directory.component";
import { HomePageContainer } from "./home.styles";

export const Home = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};
