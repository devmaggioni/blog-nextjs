import { Container } from "./styles"
import Image from "next/image"

function Header(){
	return (
		<>
			<Container>
				<Image
					id="nextImage"
					src='/images/logo_low.png'
					alt="logo do blog - Undead Cat"
					width={250}
					height={125}
					quality={30}
				/>
			</Container>
		</>
	)
}

export default Header