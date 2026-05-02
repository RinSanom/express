import app from "./app.ts";


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`App is Running on http://localhost:${PORT}`)
})
