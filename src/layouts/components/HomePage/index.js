import {
	useRouter
} from "next/router"
import Image from "next/image"
import PropTypes from "prop-types"
import Head from "next/head"
import {
	PostContainer,
	FlexContainer,
	ImageContainer,
	Title,
	Desc,
	DateAndAuthorContainer,
	_Date,
	Author,
} from "./styles"

function Layout( {
	data
}) {
	const router = useRouter()

	const imageLoader = ({
		src, width, quality
	}) => {
		return `${src}?w=${width}&q=${quality || 75}`
	}

	return(
		<>
			<Head>
		<title>Home - Undead Cat</title>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta name="description" content="Blog sobre tecnologia, games e tutoriais"/>
		<link rel="shortcut icon" href="cat.ico" />
		<meta property="og:url" content="https://undeadcat.tech"/>
		<meta property="og:type" content="website" />
		<meta property="og:title" content="Blog Undead Cat"/>
		<meta property="og:description" content="Blog sobre tecnologia, games e tutoriais"/>
		<meta property="og:image" content="https://undeadcat.tech/images/logo_low.png" />
	 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"/>
		<meta name="keywords" content="blog, undead cat, nodejs, javascript, tecnologia, portfólio, desenvolvedor, tutoriais, tutorial"/>
		<meta name="theme-color" content="#141E30"/>
			</Head>
			<FlexContainer>
				{
					data.map((post) =>
						<PostContainer onClick={()=> setTimeout(function() { router.push("/post/" + post.id)}, 500)}>
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
							<Desc id="desc">{post.desc.length < 100 ?post.desc: post.desc.slice(0, 100) + "..."}</Desc>
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
					)
				}
			</FlexContainer> < />
	)
}

Layout.propTypes = {
	data: PropTypes.any,
}

export default Layout