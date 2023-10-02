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
  margin-top: 3rem;
  font-size: 4rem;
  font-weight: 200;
  color: #ffd600;
  padding-left: 8px;
  `;

  // background-color: #FFD600;

const TitleDiv = styled.div`
  font-family: "Space Mono", monospace;
  font-size: 1.18rem;
  font-weight: 700;
  color: #ffd600;
  margin-bottom: 16px;
`;

const DetailsDiv = styled.div`

`;