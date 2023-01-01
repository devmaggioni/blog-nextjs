import {
	Post,
	connectDB
} from "../../../lib/mongodb"
import urlencode from "urlencode"

function capitalize(e) {
	e = e.split(" "); let t = []; return e.forEach(e=>t.push(e[0].toUpperCase()+e.slice(1, e.length))),
	t.join(" ")}

async function handler(req, res) {
	
	// admin
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
	if (!process.env?.BLOG_ADMIN || JSON.stringify(process.env?.BLOG_ADMIN).replace(/[.-:]/g, '').includes(JSON.stringify(ip).replace(/[.-:]/g, ''))) return res.status(500).json({ status: "error", msg: "acess denied " + ip + process.env.BLOG_ADMIN })

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
	} = req.body

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
		desc = desc.trim()
		desc = desc[0].toUpperCase() + desc.slice(1, desc.length)
		if (tags) {
		tags = tags.split(",")
		tags = tags.map(tag => tag.toLowerCase().trim())
		}
		
		// capitalizar nome
		author = capitalize(author.trim())
		
		const post = new Post({
			id: postId,
			title: title.trim(),
			desc: desc.trim(),
			timestamp,
			author,
			tags: tags ? tags : ["sem categoria"],
			thumb: urlencode(thumb.toLowerCase().trim()),
			html: urlencode(newHtml)
		})

		await post.save()

		res.status(201).json({
			status: "ok", msg: "Post inserido com sucesso!"
		})
	} catch (e) {
		res.status(500).json({
			status: "error", msg: e.stack
		})
	}

}

export default connectDB(handler)