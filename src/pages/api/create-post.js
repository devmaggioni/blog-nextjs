import urlencode from "urlencode";

import { Post, connectDB } from "../../../lib/mongodb";

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

  if (req.method !== "POST") {
    return res.status(405).json({
      status: "error",
      msg: "method not allowed",
    });
  }

  let { title, desc, author, tags, thumb, html } = req.body;

  const timestamp = new Date().getTime();
  const postId = `${timestamp}|${title
    .toLowerCase()
    .replace(/[ ,:@#$_&+()*"'!?;:{}%]/g, "")}`;

  if (!title || !desc || !author || !html || !thumb)
    return res.status(400).json({
      status: "error",
      msg: "some parameters were not inserted in the query",
    });

  try {
    // treat/reformat the values
    {
      // change the html for easy styling
      let newHtml = html
        .replaceAll("<img", `<img alt="${desc}"`)
        .replaceAll(
          "<iframe",
          '<div class="iframeContainer"><iframe fetchpriority="low"'
        )
        .replaceAll("</iframe>", "</iframe></div>")
        .replaceAll('"code"', '"code"  contenteditable=true');

      desc = desc.trim();
      desc = desc[0].toUpperCase() + desc.slice(1, desc.length);
      if (tags) {
        tags = tags.split(",");
        tags = tags.map((tag) => tag.toLowerCase().trim());
      }

      author = capitalize(author.trim());
      title = title.trim();
      desc = desc.trim();
      thumb = thumb.trim();
      html = urlencode(newHtml);
    }

    const post = new Post({
      id: postId,
      title,
      desc,
      timestamp,
      author,
      tags: tags ? tags : ["sem categoria"],
      thumb,
      html,
    });

    await post.save();

    res.status(201).json({
      status: "ok",
      msg: "Post inserido com sucesso!",
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      msg: e.name,
    });
  }
}

export default connectDB(handler);
