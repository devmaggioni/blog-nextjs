import { useRouter } from "next/router"

import {
	PostContainer,
	FlexContainer,
	ImageContainer,
	Image,
	Title,
	Desc,
	DateAndAuthorContainer,
	TagContainer,
	Tag,
	_Date,
	Author,
} from "./styles"

function Layout({data}){
	const router = useRouter()
	
	return(
		<FlexContainer>
		
			{
				data.map((post) => 
					<PostContainer onClick={
						() => {
							router.push(`/post/${post.id}`)
						}
					}>
						<ImageContainer>
							<Image alt={post.title} src={post.thumb}/>
						</ImageContainer>
					
						<Title>{post.title}</Title>
						{/*<TagContainer>
							{post.tags.map(tag => <Tag >{tag}</Tag>)}
						 </TagContainer>*/}
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
	)
}

export default Layout