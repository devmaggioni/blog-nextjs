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
							<Desc id="desc">{post.desc}</Desc>
							<DateAndAuthorContainer>
								<Author>
									<i className="fa-regular fa-pen-to-square"/>
									{post.author}
								</Author>
								<_Date>
									<i className="fa-regular fa-clock"/>
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