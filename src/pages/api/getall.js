import { Post, connectDB } from "../../../lib/mongodb"

async function handler(req, res) {
	
	if (req.method !== "POST") return res.status(405).json({ status: "error", msg: "method not allowed" })
	
	try {
	
		let findPost = await Post.find({})
	
		if (findPost) {
			findPost = findPost.reverse()
			res.status(200).json({ status: "ok", data: findPost })
		} else {
			res.status(422).json({ status: "error", msg: "post not found" })
		}
	
	} catch(e) {
		res.status(500).json({ status: "error", msg: e.name })
	}
	
}

export default connectDB(handler)