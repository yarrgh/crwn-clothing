import React from "react";
import { DirectoryMenu, MenuItem, StyledHome } from "./Home.styles";

export const Home = () => {
  return (
    <StyledHome>
      <DirectoryMenu>
        <MenuItem>
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="content">
            <h1 className="title">JACKETS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </MenuItem>
        <MenuItem>
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </MenuItem>
      </DirectoryMenu>
    </StyledHome>
  );
};
