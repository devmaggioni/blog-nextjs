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
			text,
			name
		} = req.query

		if (!postId || !commentId || !text) return res.status(400).json({
			status: "error", msg: "miss some parameters"
		})

		// encontrar o post atual
		let findPost = await Post.findOne({
			id: postId
		})

		if (findPost) {
			
			// reply comment 
			if (name && name.length > 15) name = name.slice(0, 15)
			if (text.length > 450) text = text.slice(0, 450) + " (texto muito longo...)"
			const timestamp = new Date().getTime()
			const ip = IP.address()
			const reply = {
				ip,
				name: name || "Desconhecido",
				text,
				timestamp
			}
			
			// adicionar a resposta ao comentário certo
			findPost.comments.map((a, b)=>{
				if (a.id == commentId) findPost.comments[b].replys.push(reply)
			})
			
			// atualizar post com o novo reply
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
			status: "error", msg: e.name
		})
	}

}
export default connectDB(handler)