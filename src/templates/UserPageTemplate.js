import { PROPERTY_TYPES } from "@babel/types";
import PropTypes from "prop-types";
import Sidebar from "../components/organisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
