import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #f71b85;
  padding: 0.4rem;
  text-align: center;
  box-sizing: border-box;

  > p {
    font-size: 14px;
    color: #fff;
    margin: 0;
  }

  > a {
    text-decoration: none;
    font-weight: 700;
    color: #0b3685;
  }
`;

export default props => {
  return (
    <StyledFooter
      aria-labelledby="footer-message"
      role="contentinfo"
      {...props}
    >
      <p id="footer-message">
        Created with &lt;3 by{" "}
        <a
          href="https://www.google.com.br/search?q=@kidchenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          @kidchenko
        </a>{" "}
        - 2017
      </p>
      <p>I have learned a lot building this app</p>
    </StyledFooter>
  );
};
