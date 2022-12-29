import {
	useState,
	useEffect
} from "react"
import {
	useRouter
} from "next/router"
import {
	PostPage
} from "../../layouts"

//import Seo from "../../layouts/components/Seo"

function Post() {
	const router = useRouter()

	const [data,
		setData] = useState(null)
	const [isLoading,
		setLoading] = useState(false)

	useEffect(()=> {
		if (!router.isReady) return
		setLoading(true)
		fetch("/api/find-post?id=" + router.query.id, {
			method: "post"
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	},
	[router.isReady])

	if (isLoading) return <p style={ { "margin-bottom": "100vh" }}>
 Loading...
	</p>
	if (!data) return <p>
 No profile data
	</p>

	return (
		<>{/*
			<Seo
				title={"Undead Cat - " + (data.data.title)}
				description={data.data.desc}
				canonicalPath={"/post/" + (router.query.id)}
			/>*/}
			<PostPage data={data.data} /> < />
	)
}

export default Post