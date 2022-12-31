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
			postId,
			commentId,
			text
		} = req.query

		if (!postId || !commentId || !text) return res.status(400).json({
			status: "error", msg: "miss some parameters"
		})

		// encontrar o post atual
		let findPost = await Post.findOne({
			id: postId
		})

		if (findPost) {
			
			// objeto de resposta
			const timestamp = new Date().getTime()
			const ip = IP.address()
			const comment = {
				ip,
				name: "Unknow",
				text,
				timestamp,
				answers: []
			}
			
			// adicionar a resposta ao comentário certo
			findPost.comments.map((a, b)=>{
				if (a.id == commentId) findPost.comments[b].answers.push(comment)
			})
			
			// atualizar post no banco de dados
			await Post.updateOne({
				id: postId
			}, findPost)
			
			res.status(200).json({
				status: "ok", msg: "sucess"
			})
			
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