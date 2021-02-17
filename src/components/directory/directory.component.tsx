import React from "react";
import { useSelector } from "react-redux";
import { MenuItem } from "..";
import { selectDirectories } from "../../store/directory/directorySlice";
import "./directory.styles.scss";

export const Directory = () => {
  const sections = useSelector(selectDirectories);

  return (
    <div className="directory-menu">
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          size={section.size}
          linkUrl={section.linkUrl}
        />
      ))}
    </div>
  );
};
