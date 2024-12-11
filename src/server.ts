import app from "./index"
import {secretes} from "./secretes"

const Port  = secretes.Port || 3000
async function createServer(){
    app.listen(Port, () => {
        console.log(`Server is running on port ${Port}`)
    })
}

createServer().then(()=>{
    console.log("server has started")
})