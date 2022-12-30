
let author = "gabriel maggioni"

function capitalize(text){
	text = text.split(' ')
	let a = []
	text.forEach((letra)=> a.push(letra[0].toUpperCase() + letra.slice(1, letra.length)))
	return a.join(" ")
}
console.log(capitalize("gabriel maggionikkk kk kkk k"))