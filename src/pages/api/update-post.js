import { Post, connectDB } from "../../../lib/mongodb";
import urlencode from "urlencode";

function capitalize(e) {
  e = e.split(" ");
  let t = [];
  return (
    e.forEach((e) => t.push(e[0].toUpperCase() + e.slice(1, e.length))),
    t.join(" ")
  );
}

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
    return res.status(405).json({
      status: "error",
      msg: "method not allowed",
    });

  let { postId, title, desc, author, tags, thumb, html } = req.body;

  const timestamp = new Date().getTime();

  if (!postId)
    return res.status(400).json({
      status: "error",
      msg: "miss query id",
    });

  if (postId.includes("http")) postId = postId.split("post/")[1];
  postId = urlencode.decode(postId);

  try {
    let newHtml = undefined;
    if (html)
      newHtml = html
        .replaceAll("<img", `<img alt="${desc}" class="post"`)
        .replaceAll("<iframe", '<div class="iframeContainer"><iframe')
        .replaceAll("</iframe>", "</iframe></div>")
        .replaceAll('"code"', '"code"  contenteditable=true');

    desc = desc
      ? desc[0].toUpperCase() + desc.slice(1, desc.length)
      : undefined;
    author = author ? capitalize(author.trim()) : undefined;
    const newPostId = title
      ? `${timestamp}|${title
          .toLowerCase()
          .replace(/[ ,:@#$_&+()*"'!?;:{}%]/g, "")}`
      : undefined;

    const findPost = await Post.findOne({ id: postId });
    if (!findPost)
      return res
        .status(400)
        .json({ status: "error", msg: "id not found in database" });

    const updatedPost = {
      id: newPostId || postId,
      title: title ? title.trim() : findPost.title,
      desc: desc ? desc.trim() : findPost.desc,
      timestamp: findPost.timestamp,
      update_timestamp: timestamp,
      author: author || findPost.author,
      tags: tags ? JSON.parse(tags) : findPost.tags,
      thumb: thumb ? thumb.trim() : findPost.thumb,
      html: newHtml || findPost.html,
      comments: findPost.comments,
    };

    await Post.updateOne({ id: postId }, updatedPost);

    res.status(201).json({
      status: "ok",
      msg: "post updated",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      msg: e.name,
    });
  }
}

export default connectDB(handler);
