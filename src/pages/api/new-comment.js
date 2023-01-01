import {
	Post,
	connectDB
} from "../../../lib/mongodb"

async function handler(req, res) {

	try {

		if (req.method !== "POST") return res.status(405).json({
			status: "error", msg: "method not allowed"
		})

		let {
			name,
			text
		} = req.body
		const { id: postId } = req.query

		if (!postId) return res.status(400).json({
			status: "error", msg: "miss id parameters"
		})
		if (!text) return res.redirect(301, "/post/" + postId)

		let findPost = await Post.findOne({
			id: postId
		})

		if (findPost) {
			const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress
			const timestamp = new Date().getTime()
			const commentId = findPost.comments.length
			if (name && name.length > 15) name = name.slice(0, 15)
			if (text.length > 450) text = text.slice(0, 450) + " (texto muito longo...)"
			const comment = {
				id: commentId,
				ip,
				name: name.trim() || "Desconhecido",
				text,
				timestamp,
				replys: []
			}
			
			findPost.comments.push(comment)
			
			await Post.updateOne({
				id: postId
			}, findPost)
			
			return res.redirect(301, "/post/" + postId)
			
		} else {
			res.status(422).json({
				status: "error", msg: "post not found"
			})
		}

	} catch(e) {
		res.status(500).json({
			status: "error", msg: e.name
		})
	}

}
export default connectDB(handler)