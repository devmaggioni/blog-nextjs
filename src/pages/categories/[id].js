import {
	useState,
	useEffect
} from "react"
import { useRouter } from "next/router"
import { CategorieFilterPage } from "../../layouts"

export default function Home(){
	
	const router = useRouter()

	const [data,
		setData] = useState(null)
	const [isLoading,
		setLoading] = useState(false)
  
	useEffect(()=> {
		if(!router.isReady) return
		setLoading(true)
		fetch("/api/getall", {
    	method: "post"
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data)
				setLoading(false)
			})
	}, [router.isReady])
  
	if (isLoading) return <p style={{"margin-bottom": "100vh"}}> Loading... </p>
	if (!data) return <p style={{"margin-bottom": "100vh"}}> No profile data... </p>
  
	return (
		<CategorieFilterPage data={data.data}/>
	)
	
}