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
			},
			{
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
			},
			]}
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



/*import Head from "next/head"

function Seo({ canonicalPath, title, description }){
	return (
		<Head>
			<html lang='pt-BR' />
		
			<title>{title || "Blog Undead Cat"}</title>
			
     	<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
     	
     	<meta name="keywords" content="dev, blog, undead cat, nodejs, javascript, tecnologia, portfólio, desenvolvedor, programador, tutoriais"/>
     	
			<meta name="title" content="Blog Undead Cat"/>
			
			<meta name="description" content={description || "Meu blog pessoal"} />
			
			<meta property="og:title" content={title || "Blog Undead Cat"} />
			
			<meta name="og:type" content="website" />
		
			<meta property="og:image" content="https://blog-undeadcat.vercel.app/images/UndeadCat.png" />
			
			<meta property="og:image:alt" content="blog-undeadcat.vercel.app - Meu blog NextJs" />
			
			<meta property="og:image:width" content="3464" />
			
			<meta property="og:image:height" content="1546" />
			
			<meta property="og:locale" content="pt_BR" />
			
			<meta property="og:url" content="https://blog-undeadcat.vercel.app" />
			
			<link rel="canonical" href={`https://blog-undeadcat.vercel.app${canonicalPath || ""}`}/>
			
			<link rel="shortcut icon" href="cat.ico" type="image/x-icon" />
			
		</Head>
	)
}

export default Seo
*/
/*import {
	NextSeo
} from "next-seo"

function Seo({pathname}){
	return(
		<NextSeo
			title="Undead Cat Blog"
			description="Meu blog pessoal."
			canonical={`https://blog-undeadcat.vercel.app${pathname || ""}`}
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
}*/