import UserPageTemplate from "../templates/UserPageTemplate";
import Card from "../components/molecules/Card/Card";

const twitters = [
  {
    title: "Marek",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    twitterName: "",
  },
  {
    title: "Redux guy",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "1 day",
    twitterName: "dan_abramov",
  },
  {
    title: "React router stuff",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "5 days",
    twitterName:
      "mjackson?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    title: "Super animacje!",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi",
    created: "10 days",
    twitterName: "sarah_edo",
  },
];

const Twitters = () => {
  return (
    <UserPageTemplate pageType="twitter">
      {twitters.map((item, key) => (
        <Card
          cardType="twitter"
          title={item.title}
          content={item.content}
          twitterName={item.twitterName}
          created={item.created}
          key={key}
        />
      ))}
    </UserPageTemplate>
  );
};
export default Twitters;
