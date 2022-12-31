import {
	Post,
	connectDB
} from "../../../lib/mongodb"

async function handler(req, res) {

	try {
		
	if (!process.env.ENABLE_POSTS) return res.status(500).json({ status: "error", msg: "acess denied" })

		if (req.method !== "DELETE") return res.status(405).json({
			status: "error", msg: "method not allowed"
		})

		let {
			postId,
			commentId
		} = req.query

		if (!postId || !commentId) return res.status(400).json({
			status: "error", msg: "miss postId or commentId parameters"
		})
		if (postId.includes("http")) postId = postId.split("post/")[1]

		let findPost = await Post.findOne({
			id: postId
		})

		if (!findPost) return res.status(422).json({status: "error", msg: "post not found"})
			
			findPost.comments.map((comment, i)=>{
				if (comment.id == commentId) findPost.comments.splice(i, 1)
			})
			
			await Post.updateOne({ id: postId }, findPost)
			res.status(200).json({ status: "ok", msg: "comment as be deleted" })

	} catch(e) {
		res.status(500).json({
			status: "error", msg: e.name
		})
	}

}
export default connectDB(handler)