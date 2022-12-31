import toHtml from "html-react-parser"
import urlencode from "urlencode"
import {
	useRouter
} from "next/router"
import PropTypes from "prop-types"
import Head from "next/head"
import postStyles from "../../../styles/Post.module.css"

import Comments from "../Comments"
import {
	Background,
	Container,
	Article,
	Title,
	Desc,
	TagsContainer,
	Tag,
	Author,
	AuthorContainer
} from "./styles"

function PostPage({data}) {
	const router = useRouter()

	return (
		<>
	<Head>
	<title>{data.title}</title>
<link rel="canonical" href={"https://undeadcat.tech/post/" + data.id}/>
  </Head>
	<Background>
				<Container>
					<Title>{data.title}</Title>
					<Desc>{data.desc}</Desc>
					<TagsContainer>
						{
		data.tags.map(tag =>
			<Tag
				onClick={()=> {
					router.push("/categories/" + tag.toLowerCase().replace(/ /g, "-"))
				}}>
									<i className="fa-solid fa-tag" />
									{tag.toLowerCase()}
								</Tag>
		)}
					</TagsContainer>
					<Article className={postStyles.post}>
						{toHtml(urlencode.decode(data.html))}
					</Article>
					<hr />
					<AuthorContainer>
						<Author>
							<i className="fa-regular fa-pen-to-square" />
							{"por: " + data.author}
						</Author>
					</AuthorContainer>
					<Comments data={data} />
				</Container>
			</Background> < />
)
}

PostPage.propTypes = {
data: PropTypes.any,
}

export default PostPage