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
		id: postId,
		title,
		desc,
		author,
		tags,
		thumb,
		html
	} = req.query

	const timestamp = new Date().getTime()
	
	if (!postId) return res.status(400).json({
		status: "error", msg: "miss query id"
	})
	
	if (postId.includes("http")) postId = postId.split("post/")[1]

	try {

		let newHtml = undefined
		if (html) newHtml = html.replaceAll("<img", `<img alt="${desc}" class="post"`).replaceAll("<iframe", "<div class=\"iframeContainer\"><iframe").replaceAll("</iframe>", "</iframe></div>").replaceAll("\"code\"", "\"code\"  contenteditable=true")

		desc = desc ? desc[0].toUpperCase() + desc.slice(1, desc.length) : undefined
		author = author ? capitalize(author) : undefined
		const newPostId = title ? `${timestamp}|${title.toLowerCase().replace(/[ ,:@#$_&+()*"'!?;:{}%]/g, "")}` : undefined

		const findPost = await Post.findOne({ id: postId })
		if (!findPost) return res.status(400).json({ status: "error", msg: "id not found in database" })
    
		const updatedPost = {
			id: newPostId || postId,
			title: title || findPost.title,
			desc: desc || findPost.desc,
			timestamp: findPost.timestamp,
			update_timestamp: timestamp,
			author: author || findPost.author,
			tags: tags ? JSON.parse(tags) : findPost.tags,
			thumb: thumb || findPost.thumb,
			html: newHtml || findPost.html,
			comments: findPost.comments
		}
    
		await Post.updateOne({ id: postId }, updatedPost)

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