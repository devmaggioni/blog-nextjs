import { Post, connectDB } from "../../../lib/mongodb"

async function handler(req, res) {
	
	if (req.method !== "POST") return res.status(405).json({ status: "error", msg: "method not allowed" })
	
	const {
		title,
		desc,
	  author,
	  tags,
	  thumb,
	  html
	} = req.query
	
	const timestamp = new Date().getTime()
	const id = `${timestamp}|${title.toLowerCase().replace(/[ ,:@#$_&+()*"'!?;:{}%]/g, "")}`
	
	if (!title || !desc || !author || !html || !thumb) return res.status(400).json({ status: "error", msg: "some parameters were not inserted in the query" })
	
	try {
  	
  	let newHtml = html
			.replaceAll("<h1", "<h1 class=\"post\"")
			.replaceAll("<h2", "<h2 class=\"post\"")
			.replaceAll("<h3", "<h3 class=\"post\"")
			.replaceAll("<p", "<p class=\"post\"")
			.replaceAll("<a", "<a class=\"post\"")
			.replaceAll("<img", "<img class=\"post\"")
			.replaceAll("<code", "<code class=\"post\"")
			.replaceAll("<ul", "<ul class=\"post\"")
			.replaceAll("<ol", "<ol class=\"post\"")
			.replaceAll("<iframe", "<div class=\"iframeContainer\"><iframe")
			.replaceAll("</iframe>", "</iframe></div>")
			.replaceAll("\"code\"", "\"code\" contenteditable=true")
  	
  	const post = new Post({
  	id,
			title,
			desc,
			timestamp,
			author,
			tags: tags ? JSON.parse(tags) : ["sem categoria"],
			thumb,
			html: newHtml
		})
	
		await post.save()
	
		res.status(201).json({ status: "ok", msg: "Post inserido com sucesso!" })
	} catch (e) {
		res.status(500).json({ status: "error", msg: e.name })
	}
  
}

export default connectDB(handler)