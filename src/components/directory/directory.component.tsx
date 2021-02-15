import React, { useState } from "react";
import { MenuItem } from "..";
import "./directory.styles.scss";

import { sectionsData } from "../../common/data";

export const Directory = () => {
  const [sections, setSections] = useState(sectionsData);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};
