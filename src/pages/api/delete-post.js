import { Post, connectDB } from "../../../lib/mongodb"

async function handler(req, res) {
	
	if (req.method !== "DELETE") return res.status(405).json({ status: "error", msg: "method not allowed" })
	
	const id = req.query.id
	if (!id) return res.status(400).json({ status: "error", msg: "miss query id" })
	
	try {
	
		const findPost = await Post.findOne({ id })
	
		if (!findPost) {
			res.status(422).json({ status: "error", msg: "post not found" })
		} else {
			await Post.deleteOne({ id })
			res.status(200).json({ status: "ok", msg: "post deleted" })
		}
	
	} catch(e) {
		res.status(500).json({ status: "error", msg: e.name })
	}
	
}

export default connectDB(handler)