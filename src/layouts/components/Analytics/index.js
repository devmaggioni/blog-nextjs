import React from "react"

const Analytics = () => (
	<>
		<script
			async
			src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS}`}
		/>
		<script
			dangerouslySetInnerHTML={{
				__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `
			}}
		/>
	</>
)

export default Analytics