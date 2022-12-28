import { useRouter } from "next/router"

import HomePage from "../HomePage"

function CategorieFilter({data}){
	const router = useRouter()

	let filter = []
	data.map(post => {
		if (JSON.stringify(post.tags).toLowerCase().replace(/ /g, "-").includes(router.query.id)) filter.push(post)
	})

	return (
		<>
			<HomePage data={filter}/>
		</>
	)
}

export default CategorieFilter