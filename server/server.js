const app = require('./src/app')
const expose = '0.0.0.0:'
const port = process.env.PORT || 4000;
const exposedPort=expose+port


app.listen(port, ()=>{
    console.log(`Server is running on port ${exposedPort}`)
})