import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    

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

export const MaskedImage = styled.img`
  /* Apply the mask image */
  -webkit-mask-image: url(${props => props.mask});
  -webkit-mask-size: cover;
  mask-image: url(${props => props.mask});
  mask-size: cover;

  /* Additional styling */
  width: 200px;
  height: 200px;
`;

export const StyledImage = styled.img`
  position: relative;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  // width: ${props => props.width || 'auto'};
  // height: ${props => props.height || 'auto'};
  border-radius: 50%;
  width: 290px;
  height: 290px;
  object-fit: cover;
`;

export const StyledImage2 = styled.img`
  position: absolute;
  mask-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8c3ZnIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGZpbGw9IiNBN0YwQkEiIGQ9Ik00Ny40LC03Mi40QzYyLjYsLTY0LjEsNzYuNywtNTIuOCw3OS43LC0zOC42QzgyLjYsLTI0LjUsNzQuMywtNy41LDY4LjQsNy40QzYyLjUsMjIuMyw1OSwzNS4yLDUxLjcsNDYuNEM0NC41LDU3LjYsMzMuNSw2Ny4yLDIwLjcsNzEuNEM3LjksNzUuNywtNi44LDc0LjUsLTE4LjksNjguOUMtMzAuOSw2My4yLC00MC4zLDUzLjEsLTQ4LjcsNDIuNkMtNTcuMSwzMi4xLC02NC42LDIxLjIsLTY2LjgsOS4zQy02OSwtMi43LC02NS45LC0xNS43LC02MC4xLC0yNy4xQy01NC4zLC0zOC41LC00NS44LC00OC4zLC0zNS4zLC01OC43Qy0yNC45LC02OS4xLC0xMi40LC04MC4yLDEuOSwtODMuMUMxNi4xLC04NiwzMi4zLC04MC43LDQ3LjQsLTcyLjRaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDAgMTAwKSIgLz4KPC9zdmc+Cg==)
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
`;