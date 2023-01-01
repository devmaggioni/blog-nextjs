import {
	Container,
	CommentContainer,
	Comment,
	ReplyContainer,
	Reply
} from "./styles"

import NewComment from "../NewComment"
import { showReplyContainer, showContainerNewComment, showContainerNewReply, newDate } from "./scripts"

function Layout({
	data
}) {
	
	return (
		<>
			<Container>
	
				<hr/>
				<h1 id="title">Comentários</h1>
				<button onClick={showContainerNewComment}>
	adicionar comentário
				</button>
	
				<NewComment
					id="newComment"
					pathname={"new-comment?id=" + data.id}
				/>
  
				{
  	// mapear comentários e exibi-los
					data.comments.map((comment, commentIndex)=>
						<CommentContainer>
    
							<Comment onClick={()=>{
								showReplyContainer(commentIndex)
							}}>
    
								{/* nome = nome.id.ip */}
								<h3>{comment.name.trim()}{comment?.ip ?"#" + comment.id + "." + comment.ip.toString().replace(/[ -.:]/g, "").slice(comment.ip.toString().replace(/[ -.:]/g, "").length - 2, comment.ip.toString().replace(/[ -.:]/g, "").length): "#" + comment.id + ".00"}</h3>
    
								<p id="date">{newDate(data.timestamp)}</p>
								<hr/>
								<p id='text'>{comment.text}</p>
								<hr/>
								<p><i className="fa-solid fa-reply"/>{comment?.replys?.length || 0}</p>
							</Comment>
    
							<ReplyContainer id={"replyContainer" + commentIndex}>
    
								<h2>Respostas</h2>
								<button onClick={()=>showContainerNewReply(commentIndex)}>
	responder este comentário
								</button>
    
								<NewComment
									id={"newReply" + comment.id}
									buttonText="responder"
									pathname={`new-reply?commentId=${comment.id}&postId=${data.id}`}
								/>

								{comment?.replys ? comment.replys.map(reply=>
									<Reply>
										<h3>{reply.name}{reply?.ip ?"#" + reply.id + "." + reply.ip.toString().replace(/[ -.:]/g, "").slice(reply.ip.toString().replace(/[ -.:]/g, "").length - 2, reply.ip.toString().replace(/[ -.:]/g, "").length): "#" + reply.id + ".00"}</h3>
										<p id="date">{newDate(reply.timestamp)}</p>
										<hr/>
										<p id="text">{reply.text}</p>
										<hr/>
									</Reply>
								) : ""
								}
							</ReplyContainer>
    
						</CommentContainer>
					)
				}
	
			</Container>
		</>
	)
}
export default Layout