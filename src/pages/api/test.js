import requestIp from 'request-ip'

export default function handler(req, res) {
const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress 
res.json({ip})
}