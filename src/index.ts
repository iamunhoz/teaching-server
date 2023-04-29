import { host } from "./consts"
import {} from "./scripts"
import cors from "cors"
import express from "express"
import path from "path"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
	res.sendStatus(403)
})

app.get("/iamunhoz-scripts", sendScript)

app.listen(host.port, host.ip, () => {
	console.log(`Server listening on port ${host.port}`)
})

function sendScript(req, res) {
	const options = {
		root: path.join(__dirname),
	}

	const fileName = "scripts.js"
	res.sendFile(fileName, options, function (err) {
		if (err) {
			console.error(err)
		} else {
			console.log("Sent:", fileName)
		}
	})
}
