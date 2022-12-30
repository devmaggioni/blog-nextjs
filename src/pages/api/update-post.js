import {
	Post,
	connectDB
} from "../../../lib/mongodb"

function capitalize(e) {
	e = e.split(" "); let t = []; return e.forEach(e=>t.push(e[0].toUpperCase()+e.slice(1, e.length))),
	t.join(" ")}

async function handler(req, res) {
	
	if (!process.env.ENABLE_POSTS) return res.status(500).json({ status: "error", msg: "acess denied" })

	if (req.method !== "POST") return res.status(405).json({
		status: "error", msg: "method not allowed"
	})

	let {
		id,
		title,
		desc,
		author,
		tags,
		thumb,
		html
	} = req.query

	const timestamp = new Date().getTime()
	
	if (!title || !desc || !author || !html || !thumb || !id) return res.status(400).json({
		status: "error", msg: "some parameters were not inserted in the query"
	})

	try {

		let newHtml = html
			.replaceAll("<img", `<img alt="${desc}" class="post"`)
			.replaceAll("<iframe", "<div class=\"iframeContainer\"><iframe")
			.replaceAll("</iframe>", "</iframe></div>")
			.replaceAll("\"code\"", "\"code\"  contenteditable=true")

		desc = desc[0].toUpperCase() + desc.slice(1, desc.length)
		author = capitalize(author)
		
		const post = {
			id,
			title,
			desc,
			timestamp,
			author,
			tags: tags ? JSON.parse(tags): ["sem categoria"],
			thumb,
			html: newHtml
		}

    const findPost = await Post.findOne({ id })
    if (!findPost) return res.status(400).json({ status: "error", msg: "id not found in database" })
    
		await Post.updateOne({ id }, post)

		res.status(201).json({
			status: "ok", msg: "post updated"
		})
		
	} catch (e) {
		res.status(500).json({
			status: "error", msg: e.name
		})
	}

}

export default connectDB(handler)