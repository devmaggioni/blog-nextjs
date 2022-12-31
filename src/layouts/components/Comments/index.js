import {
	Container,
	CommentContainer,
	Comment,
	Title,
	WritingComment,
	Hr
} from "./styles"

function Layout( {
	data
}) {
	return (
		<>
		<Container>
				<Hr />
				<Title>Comentários</Title>
				<button onClick={
			()=> {
				(document.getElementById("newComment").style.display === "block") ? document.getElementById("newComment").style.display = "none": document.getElementById("newComment").style.display = "block" }
			}>
	novo comentário
				</button>
				<WritingComment id="newComment">
					<form action={`/api/new-comment?id=${data.id}`} method="post">
						<div>
							<label htmlFor="nome">Nome:</label>
							<input type="text" id="nome" name="name" />
			</div>
						<div>
							<label htmlFor="msg">Mensagem:</label>
							<textarea id="msg" name="text"></textarea>
			</div>

						<div className="button">
							<button type="submit">Enviar sua mensagem</button>
			</div>
		</form>
				</WritingComment>
				{
		data.comments.map((comment)=>
			<CommentContainer>
							<Comment>
								<h3>
									{comment.name}#{comment.id}
								</h3>
								<p id="date">
									{new Date(comment.timestamp).toLocaleString()}
			</p>
								<hr />
								<p id="text">
									{comment.text}
			</p>
								<hr />
							</Comment>
						</CommentContainer>
)
}
				<Hr />
			</Container> < />
)
}

export default Layout