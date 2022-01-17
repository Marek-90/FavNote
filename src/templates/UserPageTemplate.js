import Sidebar from "../components/organisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <Sidebar />
      {children}
    </>
  );
};

export default UserPageTemplate;
