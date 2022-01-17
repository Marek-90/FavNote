import UserPageTemplate from "../templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";

const Twitters = () => {
  return (
    <UserPageTemplate pageType="twitter">
      <Card cardType="twitter" />
      <Card cardType="twitter" />
      <Card cardType="twitter" />
      <Card cardType="twitter" />
      <Card cardType="twitter" />
      <Card cardType="twitter" />
    </UserPageTemplate>
  );
};
export default Twitters;
