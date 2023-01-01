import {
	Post,
	connectDB
} from "../../../lib/mongodb"
import logger from "../../../lib/logger"

async function handler(req, res) {

	try {

		if (req.method !== "POST") return res.status(405).json({
			status: "error", msg: "method not allowed"
		})

		let {
			postId,
			commentId,
		} = req.query
		let {
			text,
			name
		} = req.body

		if (!postId) return res.status(400).json({
			status: "error", msg: "miss postId"
		})
		if (!commentId) return res.status(400).json({
			status: "error", msg: "miss commentId"
		})
		if (postId.includes("http")) postId = postId.split("post/")[1]
		if (!text) return res.redirect(301, "/post/" + postId)
	
		// encontrar o post atual
		let findPost = await Post.findOne({
			id: postId
		})

		if (findPost) {

			// reply comment
			if (name && name.length > 15) name = name.slice(0, 15)
			if (text.length > 450) text = text.slice(0, 450) + " (texto muito longo...)"
			const timestamp = new Date().getTime()
			const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress

			// adicionar a resposta ao comentário certo
			findPost.comments.map((a, b)=> {
				if (!a.replys) {
					logger.error("o objeto comments não pussui um array chamado replys")
					res.redirect(301, "/post/" + postId)
				}
				if (a.id == commentId) {
					let reply = {
						id: a.replys.length,
						ip,
						name: name || "Desconhecido",
						text,
						timestamp
					}
					findPost.comments[b].replys.push(reply)
				}
			})

			// atualizar post com o novo reply
			await Post.updateOne({
				id: postId
			},
			findPost)

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