import {
	Post,
	connectDB
} from "../../../lib/mongodb"
import IP from "ip"

async function handler(req, res) {

	try {

		if (req.method !== "POST") return res.status(405).json({
			status: "error", msg: "method not allowed"
		})

		const {
			name,
			text
		} = req.body
		const { id } = req.query

		if (!id) return res.status(400).json({
			status: "error", msg: "miss id parameters"
		})
		if (!text) res.redirect(307, "/post/" + id)

		let findPost = await Post.findOne({
			id
		})

		if (findPost) {
			const timestamp = new Date().getTime()
			const commentId = findPost.comments.length
			const ip = IP.address().toString().replace(/[-.]/g, '')
			const comment = {
				id: commentId,
				ip,
				name: name || "Unknow",
				text,
				timestamp,
				answers: []
			}
			
			findPost.comments.push(comment)
			
			await Post.updateOne({
				id
			}, findPost)
			
			res.redirect(307, "/post/" + id)
			
		} else {
			res.status(422).json({
				status: "error", msg: "post not found"
			})
		}

	} catch(e) {
		res.status(500).json({
			status: "error", msg: e.stack
		})
	}

}
export default connectDB(handler)