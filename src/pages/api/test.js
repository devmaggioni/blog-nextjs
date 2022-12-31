
function handler(req, res){
	res.status(200).json({req: req.body})
}

export default handler