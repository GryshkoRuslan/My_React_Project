import React, { useContext } from "react";
import { StyledTabContent } from "styles/styledTabsParts";
import {
  ChangeThemeButtonWrapper,
  ChangeThemeButton
} from "styles/styledChangeThemeButtons";
import { themes } from "constants/themeConstants";
import { ThemeContext } from "contexts/themeContext";

export const TabContent2 = () => {
  const [currentTheme, changeTheme] = useContext(ThemeContext);
  return (
    <StyledTabContent currentTheme={currentTheme}>
      <ChangeThemeButtonWrapper>
        {Object.keys(themes).map(theme => (
          <ChangeThemeButton
            onClick={() => (changeTheme(themes[theme]))}
            key={themes[theme]}
          >
            {`${theme} theme`}
          </ChangeThemeButton>
        ))}
      </ChangeThemeButtonWrapper>
    </StyledTabContent>
  );
};
