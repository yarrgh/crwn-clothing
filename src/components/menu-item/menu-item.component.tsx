import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import "./menu-item.styles.scss";

interface MenuItemProps {
  title: string;
  imageUrl: string;
  routeName: string;
  size?: "small" | "large";
}

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  imageUrl,
  linkUrl,
  size,
}) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div
      className={`menu-item ${size || ""}`}
      onClick={() => history.push(`${match.url}${linkUrl}`, {})}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
