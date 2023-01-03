import styled from "styled-components";

export const Background = styled.div`
  min-height: 80vh;
  width: 100%;
  padding-top: 5rem;
  padding-bottom: 10rem;
`;

export const Container = styled.article`
  position: relative;
  text-align: center;
  padding-inline: 1.5rem;
  padding-top: 1rem;
  margin-inline: auto;
  width: 85%;
  max-width: 800px;
  min-height: 40rem;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  text-transform: capitalize;
  -webkit-text-stroke: 0.5px black;
`;
export const Desc = styled.p`
  :first-letter {
    text-transform: uppercase;
  }
  font-family: "Noto Sans Mono", Sans-Serif;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;

export const Article = styled.div`
  margin-bottom: 10rem;
`;

export const TagsContainer = styled.div`
  display: inline-block;
  margin-bottom: 3rem;
`;

export const Tag = styled.p`
  float: left;
  display: inline-block;
  padding: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0.5px solid white;
  border-radius: 5px;
  font-size: 0.8rem;
  i {
    font-size: 0.8rem;
  }
`;

export const AuthorContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  bottom: 0;
  p {
    font-size: 1.2rem;
    text-align: left;
  }
`;

export const DateContainer = styled.div`
  text-align: left;
`;
