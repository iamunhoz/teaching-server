import { host } from "./consts"
import { getScriptTextStream } from "./scripts"
import cors from "cors"
import express, { RequestHandler } from "express"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
	res.sendStatus(403)
})

const sendScript: RequestHandler = (req, res) => {
	const fileBlob = getScriptTextStream()

	res.attachment("script.js")
	res.type("text/javascript")
	res.send(fileBlob)
}

app.get("/iamunhoz-scripts", sendScript)

app.listen(host.port, host.ip, () => {
	console.log(`Server listening on port ${host.port}`)
})
