import {
	useState,
	useEffect
} from "react"
import { useRouter } from "next/router"
import { PostPage } from "../../layouts"

function Post(){
	const router = useRouter()

	const [data,
		setData] = useState(null)
	const [isLoading,
		setLoading] = useState(false)
  
	useEffect(()=> {
		if(!router.isReady) return
		setLoading(true)
		fetch("/api/find-post?id=" + router.query.id, {
    	method: "post"
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [router.isReady])
  
	if (isLoading) return <p style={{"margin-bottom": "100vh"}}> Loading... </p>
	if (!data) return <p> No profile data </p>
  
	return (
		<>
		<PostPage data={data.data}/>
		</>
	)
}

export default Post