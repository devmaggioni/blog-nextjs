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
	DateContainer,
	AuthorContainer
} from "./styles"

function PostPage( {
	data
}) {
	const router = useRouter()
	const isUpdate = !!data?.update_timestamp

	return (
		<>
			<Head>
				<title>{data.title}</title>
			</Head>
			<Background>
				<Container>
					<Title translate="no">{data.title}</Title>
					<Desc translate="no">{data.desc}</Desc>
					<TagsContainer>
						{
							data.tags.map(tag =>
								<Tag
									translate="no"
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
						<p translate="no">
							<i className="fa-regular fa-pen-to-square" />{"por: " + data.author}
						</p>
					</AuthorContainer>
					<DateContainer>
						{
							isUpdate ?
								<>
									<p>
										<i className="fa-regular fa-clock" />{"publicado em: " + new Date(data.timestamp).toLocaleString("pt-BR")}
									</p>
									<p>
										<i className="fa-regular fa-clock" />{"atualizado em: " + new Date(data.update_timestamp).toLocaleString("pt-BR")}
									</p> < /> : <p>{"publicado em: " + new Date(data.timestamp).toLocaleString("pt-BR")}</p >
						}
					</DateContainer>
					<Comments data={data} />
				</Container>
			</Background> < />
	)
}

PostPage.propTypes = {
	data: PropTypes.any,
}

export default PostPage