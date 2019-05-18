import React, { useState } from "react";

export const ExpansionPanelsLogic = (props) => {
  const [openedPanels, setOpenedPanels] = useState([]);

  const showHidePanel = selectedPanel => {
    setOpenedPanels(
      openedPanels.includes(selectedPanel)
        ? openedPanels.filter(panel => panel !== selectedPanel)
        : [...openedPanels, selectedPanel]
    )
  };

  return (
    <React.Fragment>
      {props.render(openedPanels, showHidePanel)}
    </React.Fragment>
  );
};
