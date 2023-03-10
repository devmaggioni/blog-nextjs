import { Post, connectDB } from "../../../lib/mongodb";
import urlencode from "urlencode";

async function handler(req, res) {
  // validation: is admin
  {
    const currentIp =
      req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const adminIp = process.env?.BLOG_ADMIN.trim();

    if (!process.env?.BLOG_ADMIN) {
      return res
        .status(500)
        .json({ status: "error", msg: "post not habilited" });
    }
    if (adminIp !== currentIp) {
      return res.status(500).json({ status: "error", msg: "acess denied" });
    }
  }

  if (req.method !== "POST")
    return res.status(405).json({ status: "error", msg: "method not allowed" });

  let { postId } = req.body;
  if (!postId)
    return res.status(400).json({ status: "error", msg: "miss query id" });
  postId = urlencode.decode(postId.trim());

  try {
    if (postId.includes("http")) postId = postId.split("post/")[1];

    const findPost = await Post.findOne({ id: postId });

    if (!findPost) {
      res.status(422).json({ status: "error", msg: "post not found" });
    } else {
      await Post.deleteOne({ id: postId });
      res.status(200).json({ status: "ok", msg: "post deleted" });
    }
  } catch (e) {
    res.status(500).json({ status: "error", msg: e.stack });
  }
}

export default connectDB(handler);
