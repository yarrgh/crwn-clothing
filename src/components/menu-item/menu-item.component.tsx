import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  BackgroundImage,
  MenuItemContainer,
  MenuItemContent,
  Subtitle,
  Title,
} from "./menu-item.styles";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  linkUrl: string;
  large?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageUrl,
  linkUrl,
  large,
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      large={large}
      onClick={() => history.push(`${match.url}${linkUrl}`, {})}
    >
      <BackgroundImage imageUrl={imageUrl} />
      <MenuItemContent>
        <Title>{title.toUpperCase()}</Title>
        <Subtitle>SHOP NOW</Subtitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};
