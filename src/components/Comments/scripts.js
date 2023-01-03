export const showContainerNewComment = () =>
  document.getElementById("newComment").style.display === "block"
    ? (document.getElementById("newComment").style.display = "none")
    : (document.getElementById("newComment").style.display = "block");

export const showReplyContainer = (commentIndex) =>
  document.getElementById("replyContainer" + commentIndex).style.display ===
  "block"
    ? (document.getElementById("replyContainer" + commentIndex).style.display =
        "none")
    : (document.getElementById("replyContainer" + commentIndex).style.display =
        "block");

export const showContainerNewReply = (commentIndex) =>
  document.getElementById("newReply" + commentIndex).style.display === "block"
    ? (document.getElementById("newReply" + commentIndex).style.display =
        "none")
    : (document.getElementById("newReply" + commentIndex).style.display =
        "block");

export const newDate = (timestamp) =>
  new Date(timestamp).toLocaleString("pt-BR");
