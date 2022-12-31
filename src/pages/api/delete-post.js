import { Post, connectDB } from "../../../lib/mongodb"

async function handler(req, res) {
	
	// crie uma variável de ambiente para criar/deletar posts
	if (!process.env.ENABLE_POSTS) return res.status(500).json({ status: "error", msg: "acess denied" })
	
	if (req.method !== "DELETE") return res.status(405).json({ status: "error", msg: "method not allowed" })
	
	let postId = req.query.id
	if (!postId) return res.status(400).json({ status: "error", msg: "miss query id" })
	
	try {
	
	  if (postId.includes("http")) postId = postId.split('post/')[1]
		const findPost = await Post.findOne({ id: postId })
	
		if (!findPost) {
			res.status(422).json({ status: "error", msg: "post not found" })
		} else {
			await Post.deleteOne({ id: postId })
			res.status(200).json({ status: "ok", msg: "post deleted" })
		}
	
	} catch(e) {
		res.status(500).json({ status: "error", msg: e.name })
	}
	
}

export default connectDB(handler)