// rome-ignore lint/style/noVar: <explanation>
var imprimir = function (value) {
	const body = document.getElementsByTagName("body")[0]

	const el = document.createElement("h1")
	el.innerText = JSON.stringify(value)

	body.replaceChildren(el)
}

window.imprimir = imprimir

export {}
