import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtonIcon from "../../atoms/ButtonIcon/ButtonIcon";
import bulbIcon from "../../../assets/icon/bulb.svg";
import logoutIcon from "../../../assets/icon/logout.svg";
import penIcon from "../../../assets/icon/pen.svg";
import twitterIcon from "../../../assets/icon/twitter.svg";
import logoIcon from "../../../assets/icon/logo.svg";

const StyledWraper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 150px;
  height: 100vh;
  background-color: ${({ theme }) => theme.note};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogoLink = styled(NavLink)`
  display: block;
  width: 67px;
  height: 67px;
  background-image: url(${logoIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const StyledLogoutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const StyledLinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => {
  return (
    <StyledWraper>
      <StyledLogoLink to="/" />
      <StyledLinksList>
        <li>
          <ButtonIcon as={NavLink} to="/" icon={penIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} />
        </li>
        <li>
          <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} />
        </li>
      </StyledLinksList>
      <StyledLogoutButton as={NavLink} to="/" icon={logoutIcon} />
    </StyledWraper>
  );
};

export default Sidebar;
