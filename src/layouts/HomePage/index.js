import { useRouter } from "next/router";
import Image from "next/image";
import PropTypes from "prop-types";
import Seo from "../../components/Seo";
import {
  PostContainer,
  FlexContainer,
  ImageContainer,
  Title,
  Desc,
  DateAndAuthorContainer,
  _Date,
  Author,
} from "./styles";

function Layout({ data }) {
  const router = useRouter();

  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Seo fontawesome />
      <FlexContainer>
        <h1>Últimos Posts</h1>
        {data.map((post) => (
          <PostContainer
            onClick={() =>
              setTimeout(function () {
                router.push("/post/" + post.id);
              }, 500)
            }
          >
            <ImageContainer>
              <Image
                src={post.thumb}
                alt={post.desc}
                layout="fill"
                objectFit="cover"
                quality={30}
                placeholder="blurDataURL"
              />
            </ImageContainer>
            <Title>{post.title}</Title>
            <Desc id="desc">
              {post.desc.length < 100
                ? post.desc
                : post.desc.slice(0, 100) + "..."}
            </Desc>
            <DateAndAuthorContainer>
              <Author translate="no">
                <i className="fa-regular fa-pen-to-square" />
                {post.author}
              </Author>
              <_Date>
                <i className="fa-regular fa-clock" />
                {new Date(post.timestamp).toLocaleString("pt-BR")}
              </_Date>
            </DateAndAuthorContainer>
          </PostContainer>
        ))}
      </FlexContainer>{" "}
    </>
  );
}

Layout.propTypes = {
  data: PropTypes.any,
};

export default Layout;
