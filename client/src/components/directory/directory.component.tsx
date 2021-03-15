import React from "react";
import { useSelector } from "react-redux";
import { selectDirectories } from "../../store/directory/directorySlice";
import { MenuItem } from "../menu-item/menu-item.component";
import { DirectoryContainer } from "./directory.styles";

export const Directory = () => {
  const sections = useSelector(selectDirectories);

  return (
    <DirectoryContainer>
      {sections.map((section) => (
        <MenuItem
          key={section.id}
          title={section.title}
          imageUrl={section.imageUrl}
          large={section.size == "large"}
          linkUrl={section.linkUrl}
        />
      ))}
    </DirectoryContainer>
  );
};
