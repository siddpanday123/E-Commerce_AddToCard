import AppButton from "../../Atoms/AppButton/AppButton";
import SearchBar from "../../Atoms/SearchBar/SearchBar";

import { StyledAppBar, StyledToolbar, StyledTypography ,Logo} from "./AppHeaderStyle";
const AppHeader = () => {
  return (
    <div>
      <StyledAppBar>
        <StyledToolbar>
             <Logo src="../../Logo.png" radius="6px"></Logo> 
             <SearchBar></SearchBar>
          <AppButton />
          <Logo src="../../LoginLogo.png" radius="50%"></Logo> 
        </StyledToolbar>
      </StyledAppBar>
    </div>
  );
};

export default AppHeader;
