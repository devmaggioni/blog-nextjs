import styled from "styled-components";
import theme from "../../styles/theme";

export const FlexContainer = styled.div`
  @media (min-width: 450px) {
    padding-top: 10rem;
    padding-bottom: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  min-height: 80vh;
  padding-top: 5rem;
  padding-bottom: 10rem;

  h1 {
    font-size: 2rem;
    margin-left: 1.5rem;
    margin-bottom: 3rem;
    text-align: center;
  }
`;

export const PostContainer = styled.div`
  @media (min-width: 450px) {
    margin-inline: 3rem;
    display: inline-block;
  }
  :hover {
    border: 2px solid #f00000;
    transition: 0.2s;
    box-shadow: 2px 2px 15px #4e4376;
    img {
      width: 105%;
      transition: 0.5s;
    }
  }
  position: relative;
  margin-inline: auto;
  background-color: ${theme.colors.card};
  width: 90vw;
  max-width: 450px;
  overflow: hidden;
  text-align: left;
  margin-bottom: 5rem;
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 2rem;
  box-shadow: 1px 1px 5px #4e4376;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16rem;
  overflow: hidden;
  border-bottom: 2px solid black;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-inline: 1.5rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Desc = styled.p`
  :first-letter {
    text-transform: uppercase;
  }
  display: inline-block;
  text-align: left;
  font-size: 1.4rem;
  margin-inline: 1.5rem;
  margin-bottom: 1rem;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const TagContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 15.5rem;
  left: 0.5rem;
`;

export const Tag = styled.p`
  float: left;
  display: inline-block;
  background-color: grey;
  padding: 5px;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0.5px solid black;
  border-radius: 5px;
`;

export const _Date = styled.p`
  display: inline-block;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const Author = styled.p`
  display: inline-block;
  margin-right: 1rem;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const DateAndAuthorContainer = styled.div`
  margin-top: 1rem;
  position: absolute;
  bottom: 0.5rem;
  left: 1.5rem;
`;
