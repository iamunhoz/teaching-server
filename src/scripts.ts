const script = [
	"var imprimir = function (value) {",
	'	const body = document.getElementsByTagName("body")[0]',

	'	const el = document.createElement("h1")',
	"	el.innerText = JSON.stringify(value)",

	"	body.replaceChildren(el)",
	"}",

	"window.imprimir = imprimir",
]

export const getScriptTextStream = () => {
	return script.join("\n")
}
