import Head from "next/head"

function Seo({title, description, url, image}){
return <Head>
  <title>{title || "Blog Undead Cat"}</title>
  
  <meta name="description" content={description || "Blog sobre tecnologia, games e tutoriais"}/>
  
  <meta property="og:url" content={url || "https://undeadcat.tech"}/>
  
  <meta property="og:type" content="website"/>
  
  <meta property="og:title" content={title || "Blog Undead Cat"}/>
  
  <meta property="og:description" content={description || "Blog sobre tecnologia, games e tutoriais"}/>
  
  <meta property="og:image" content={image || "https://undeadcat.tech/images/logo_low.png"}/>
  
<link rel="canonical" href={url || "https://undeadcat.tech"}/>
  
		</Head>
}
export default Seo



/*import {
	NextSeo
} from "next-seo"

function Seo(){
	return(
		<NextSeo
			title="Blog Undead Cat"
			description="Blog sobre tecnologia, games e tutoriais"
			canonical="https://undeadcat.tech"
			robotsProps={ {
				notranslate: true,
			}}
			additionalLinkTags={[{
				rel: "shortcut icon",
				href: "cat.ico",
				type: "image/x-icon"
			},
			{ // font awesome
				rel: "stylesheet",
				href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
			},
			]}
			openGraph={ {
		  	type: "website",
				url: "https://undeadcat.tech",
				title: "Blog Undead Cat",
				description: "Blog sobre tecnologia, games e tutoriais",
				locale: "pt_BR",
				images: [{
					url: "https://undeadcat.tech/images/logo_low.png",
					width: 1732,
					height: 773,
					alt: "Blog Undead Cat",
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
		
			<meta property="og:image" content="https://undeadcat.tech/images/UndeadCat.png" />
			
			<meta property="og:image:alt" content="undeadcat.tech - Meu blog NextJs" />
			
			<meta property="og:image:width" content="3464" />
			
			<meta property="og:image:height" content="1546" />
			
			<meta property="og:locale" content="pt_BR" />
			
			<meta property="og:url" content="https://undeadcat.tech" />
			
			<link rel="canonical" href={`https://undeadcat.tech${canonicalPath || ""}`}/>
			
			<link rel="shortcut icon" href="cat.ico" type="image/x-icon" />
			
		</Head>
	)
}

export default Seo*/
/*import {
	NextSeo
} from "next-seo"

function Seo({pathname}){
	return(
		<NextSeo
			title="Undead Cat Blog"
			description="Meu blog pessoal."
			canonical={`https://undeadcat.tech${pathname || ""}`}
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
				url: "https://undeadcat.tech",
				title: "Undead Cat Blog",
				description: "Meu blog pessoal.",
				locale: "pt_BR",
				images: [{
					url: "https://undeadcat.tech/images/UndeadCat.png",
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