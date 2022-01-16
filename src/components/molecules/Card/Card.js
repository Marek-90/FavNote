import PropType from "prop-types";
import styled, { css } from "styled-components";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Heading from "../../atoms/Paragraph/Paragraph";
import Button from "../../atoms/Button/Button";

const CARD_TYPE = {
  note: "NOTE",
  twitter: "TWITTER",
  article: "ARTICLE",
};

const StyledWraper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const StyleHeadingWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ theme }) => theme.primary};
`;

const InnerWrapper = styled.div`
  padding: 17px 30px 10px;
  background-color: ${({ activeColour, theme }) =>
    activeColour ? theme[activeColour] : "white"};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyleHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Card = ({ cardType }) => (
  <StyledWraper>
    <InnerWrapper activeColor={cardType}>
      <StyleHeading>Hellow</StyleHeading>
      <DateInfo>3 days</DateInfo>
    </InnerWrapper>
    <InnerWrapper flex>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nemo
        ducimus fuga repellendus illum
      </Paragraph>
    </InnerWrapper>
    <Button secondary>REMOVE</Button>
  </StyledWraper>
);

Card.propTypes = {
  cardType: PropType.oneOf(["note", "twitter", "article"]),
};

Card.defaultProps = {
  cardType: CARD_TYPE.note,
};

export default Card;
