import styled from "styled-components";

export const Loading = styled.div`
  margin: 50px auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #555;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
