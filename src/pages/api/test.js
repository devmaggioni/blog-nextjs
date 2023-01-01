
export default function handler(req, res){
	const {
		html
	} = req.body
	res.status(200).json({ html })
}