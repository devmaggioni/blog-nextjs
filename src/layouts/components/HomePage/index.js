import {
	useRouter
} from "next/router"
import PropTypes from "prop-types"

import {
	PostContainer,
	FlexContainer,
	ImageContainer,
	Image,
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

	return(
		<>
			<FlexContainer>
				{
					data.map((post) =>
						<PostContainer onClick={()=> router.push("/post/" + post.id)}>
							<ImageContainer>
								<Image alt={post.title} src={post.thumb} />
							</ImageContainer>
							<Title>{post.title}</Title>
							<Desc>{post.desc}</Desc>
							<DateAndAuthorContainer>
								<Author>
									{post.author}
								</Author>
								<_Date>
									{new Date(post.timestamp).toLocaleString("pt-BR")}
								</_Date>
							</DateAndAuthorContainer>
						</PostContainer>
					)
				}
			</FlexContainer>
		</>
	)
}

Layout.propTypes = {
	data: PropTypes.any,
}

export default Layout