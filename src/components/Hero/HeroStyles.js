import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 60%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 60%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 60%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const RightSection = styled.div`
  width: 40%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 40%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 40%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const StyledImage = styled.img`
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;