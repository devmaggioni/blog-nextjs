import { Container } from "./styles"
import Image from "next/image"

function Header(){
	return (
		<>
			<Container>
				<Image
					class="nextImage"
					src='/images/undead_cat_low.png'
					alt="logo do blog - Undead Cat"
					width={250}
					height={100}
					quality={100}
					placeholder="blurDataURL"
					priority
				/>
			</Container>
		</>
	)
}

export default Header