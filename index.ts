import express,{Application} from "express"
import cors from "cors"

const port:number = 2030
const app:Application = express()
app.use(express.json())
app.use(cors())

const server = app.listen(port, () => {
   console.log("")
   console.log("server is connected🍡🍡🍡🍡")
  });

process.on("uncaughtException", (error)=>{
    console.log("due to uncaughtException", error)
    process.exit(1)
})

process.on("unhandledRejection",(err:Error) => {
    console.log("due to unhandledRejection", err)
    server.close(() => {
        process.exit(1)
    })
})