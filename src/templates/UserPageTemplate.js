import Sidebar from "../components/organisms/Sidebar/Sidebar";
import styled from "styled-components";
import Input from "../components/atoms/Input/Input";
import Heading from "../components/atoms/Heading/Heading";
import Paragraph from "../components/atoms/Paragraph/Paragraph";

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <Sidebar pageType={pageType} />
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Seatch" />
          <StyledHeading big as="h1">
            {pageType}s
          </StyledHeading>
          <StyledParagraph>6 {pageType}s</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
      </StyledWrapper>
    </>
  );
};

UserPageTemplate.defaultProps = {
  pageType: "note",
};

export default UserPageTemplate;
