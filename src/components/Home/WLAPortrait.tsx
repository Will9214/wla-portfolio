import styled from "styled-components";
import portrait from '../../selfportrait.png';

const WLAPortrait = () => {
  
  
  return (
    <DisplayElement>

      <img src={portrait} alt="William" height={300} />
      
    </DisplayElement>
  )
};

export default WLAPortrait;

const DisplayElement = styled.div`
  margin-top: 4rem;
`;