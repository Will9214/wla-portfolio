import styled from "styled-components";

const WLADetails = () => {

  return (
    <>
      <NameDiv>WILLIAM ASHLEY</NameDiv>
      <TitleDiv>| Software Developer | Chemist | Homebrewer | Drummer |</TitleDiv>
      <DetailsDiv></DetailsDiv>
    </>
  )
};

export default WLADetails;

const NameDiv = styled.div`
  font-family: "Space Mono", monospace;
  letter-spacing: 6px;
  font-size: 4rem;
  font-weight: 200;
  color: #ffd600;
  padding-left: 8px;


  @media(max-width: 1226px) {
    font-size: 3.5rem;
  }

  @media(max-width: 1095px) {
    font-size: 3rem;
  }

  @media(max-width: 980px) {
    font-size: 2.6rem;
  }

  @media(max-width: 860px) {
    font-size: 2rem;
  }

  @media(max-width: 700px) {
    letter-spacing: 1px;
    margin-top: 0;
    padding-left: 0;
  }
`;

  // background-color: #FFD600;

const TitleDiv = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 1.1rem;
  letter-spacing: 0px;
  color: #ffd600;
  margin-bottom: 16px;

  @media(max-width: 1095px) {
    font-size: 1rem;
  }

  @media(max-width: 980px) {
    font-size: 0.8rem;
  }

  @media(max-width: 860px) {
    font-size: 0.7rem;
  }

  @media(max-width: 700px) {
    font-size: 9px;
    margin-bottom: 8px;
  }

  @media(max-width: 600px) {
    font-size: 10px;
    margin-bottom: 8px;
  }

`;

const DetailsDiv = styled.div`

`;