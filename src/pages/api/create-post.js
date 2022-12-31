import {
	Post,
	connectDB
} from "../../../lib/mongodb"

function capitalize(e) {
	e = e.split(" "); let t = []; return e.forEach(e=>t.push(e[0].toUpperCase()+e.slice(1, e.length))),
	t.join(" ")}

async function handler(req, res) {
	
	// crie uma variável de ambiente para criar/deletar posts
	if (!process.env.ENABLE_POSTS) return res.status(500).json({ status: "error", msg: "acess denied" })

	if (req.method !== "POST") return res.status(405).json({
		status: "error", msg: "method not allowed"
	})

	let {
		title,
		desc,
		author,
		tags,
		thumb,
		html
	} = req.query

	const timestamp = new Date().getTime()
	const postId = `${timestamp}|${title.toLowerCase().replace(/[ ,:@#$_&+()*"'!?;:{}%]/g, "")}`

	if (!title || !desc || !author || !html || !thumb) return res.status(400).json({
		status: "error", msg: "some parameters were not inserted in the query"
	})

	try {

		let newHtml = html
			.replaceAll("<img", `<img alt="${desc}"`)
			.replaceAll("<iframe", "<div class=\"iframeContainer\"><iframe")
			.replaceAll("</iframe>", "</iframe></div>")
			.replaceAll("\"code\"", "\"code\"  contenteditable=true")

    // primeira letra maiúscula 
		desc = desc[0].toUpperCase() + desc.slice(1, desc.length)
		
		// capitalizar nome
		author = capitalize(author)
		
		const post = new Post({
			id: postId,
			title,
			desc,
			timestamp,
			author,
			tags: tags ? JSON.parse(tags): ["sem categoria"],
			thumb,
			html: newHtml
		})

		await post.save()

		res.status(201).json({
			status: "ok", msg: "Post inserido com sucesso!"
		})
	} catch (e) {
		res.status(500).json({
			status: "error", msg: e.name
		})
	}

}

export default connectDB(handler)