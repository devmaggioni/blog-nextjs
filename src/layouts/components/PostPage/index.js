import toHtml from "html-react-parser"
import urlencode from "urlencode"
import {
	useRouter
} from "next/router"
import PropTypes from "prop-types"
import postStyles from "../../../styles/Post.module.css"
import Head from "next/head"

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
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta name="description" content={data.desc}/>
		<link rel="shortcut icon" href="cat.ico" />
		<meta property="og:url" content="https://undeadcat.tech"/>
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Blog Undead Cat"/>
		<meta property="og:description" content="Blog sobre tecnologia, games e tutoriais"/>
		<meta property="og:image" content="https://undeadcat.tech/images/logo_low.png" />
	 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
		<meta name="keywords" content="post"/>
		<meta name="theme-color" content="#141E30"/>
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