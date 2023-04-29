const script = [
	'var imprimir = function (text, elementId = "answer") {',
	"	const answerBoard = document.getElementById(elementId)",
	"	if (answerBoard) {",
	"		answerBoard.innerHTML = JSON.stringify(text)",
	"	} else {",
	'		const body = document.getElementsByTagName("body")[0]',
	'		const el = document.createElement("h1")',
	"		el.innerText = JSON.stringify(text)",
	"		body.replaceChildren(el)",
	"	}",
	"}",
	"",
	"window.imprimir = imprimir",
]

export const getScriptTextStream = () => {
	return script.join("\n")
}
