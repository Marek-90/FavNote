import UserPageTemplate from "../templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";

const Articles = () => {
  return (
    <UserPageTemplate pageType="article">
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
      <Card cardType="article" />
    </UserPageTemplate>
  );
};

export default Articles;
