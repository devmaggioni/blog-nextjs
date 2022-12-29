import {
	NextSeo
} from "next-seo"

function Seo(){
	return(
		<NextSeo
			title="Undead Cat Blog"
			description="Meu blog pessoal."
			canonical="https://blog-undeadcat.vercel.app"
			robotsProps={ {
				notranslate: true,
			}}
			additionalLinkTags={[{
				rel: "shortcut icon",
				href: "cat.ico",
				type: "image/x-icon"
			}]}
			openGraph={ {
		  	type: "website",
				url: "https://blog-undeadcat.vercel.app",
				title: "Undead Cat Blog",
				description: "Meu blog pessoal.",
				locale: "pt_BR",
				images: [{
					url: "https://blog-undeadcat.vercel.app/images/UndeadCat.png",
					width: 3464,
					height: 1546,
					alt: "Undead Cat Blog",
					type: "image/png",
				},
				],
				siteName: "Undead Cat"
			}}
		/>
	)
}

export default Seo

/*<Head>
		<html lang='pt-BR' />
			<title>Blog Undead Cat</title>
     	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
     	<meta name="keywords" content="dev" />
			<meta name="title" content="Blog Undead Cat" />
			<meta name="description" content="Meu Blog" />
			<meta property="og:title" content="Undead Cat Blog" />
			<meta name="og:type" content="website" />
			<meta property="og:image" content="https://blog-undeadcat.vercel.app/images/UndeadCat.png" />
			<meta property="og:image:alt" content="blog-undeadcat.vercel.app - Meu blog NextJs" />
			<meta property="og:image:width" content="3464" />
			<meta property="og:image:height" content="1546" />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:url" content="https://blog-undeadcat.vercel.app" />
			<link rel="canonical" href="https://blog-undeadcat.vercel.app" />
			<link rel="shortcut icon" href="cat.ico" type="image/x-icon" />
		</Head>*/