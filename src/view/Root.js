import Button from "../components/atoms/Button/Button";
import GlobalStyle from "../theme/GlobalStyle";

const Root = () => {
  return (
    <>
      <GlobalStyle />
      <h1>Hello Marek</h1>
      <Button>close / save</Button>
      <Button secondary>Remove</Button>
    </>
  );
};
export default Root;
