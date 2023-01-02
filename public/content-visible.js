
let observer = new IntersectionObserver(
	(entries, o) => {
		entries.forEach((entry) => {
			let el = entry.target;
			// Not currently in intersection area.
			if (entry.intersectionRatio == 0) {
				return;
			}
			// Trigger rendering for elements within
			// scroll area that haven't already been
			// marked.
			if (!el.markedVisible) {
				el.attributeStyleMap.set(
					"content-visibility",
					"visible"
				);
				el.markedVisible = true;
			}
		});
	},
	// Set a rendering "skirt" 50px above
	// and 100px below the main scroll area.
	{
		rootMargin: "100px 0px 100px 0px"
	}
);

let els =
document.querySelectorAll("*")
els.forEach((el) => {
	observer.observe(el);
})

/*
let observer = new IntersectionObserver(
    (entries, o) => {
      entries.forEach((entry) => {
        let el = entry.target;
        // Not currently in intersection area.
        if (entry.intersectionRatio == 0) {
          return;
        }
        // Trigger rendering for elements within
        // scroll area that haven't already been
        // marked.
        if (!el.markedVisible) {
          el.attributeStyleMap.set(
            "content-visibility",
            "visible"
          );
          el.markedVisible = true;
        }
      });
    },
    // Set a rendering "skirt" 50px above
    // and 100px below the main scroll area.
    { rootMargin: "50px 0px 100px 0px" }
  );

  let els =
    document.querySelectorAll("body > main > *+*");
  els.forEach((el) => { observer.observe(el); });

*/