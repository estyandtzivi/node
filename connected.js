
require('dotenv').config()
const cookie=require("cookie-parser")
const http=require("http")

const PORT=process.env.PORT||5000
const express = require("express");

const TripSiteRouter=require("./routes/TripSiteRouter")

const imagesRouter=require("./routes/imagesRouter")
const opionionRouter=require("./routes/opionionRouter")
const userRouter=require("./routes/userRouter")
const siteRouter=require("./routes/siteRouter")
const outhRouter=require("./routes/authRoutes")
const tripRouter=require("./routes/tripRouter")
 const app = express();
const cors=require('cors')
const corsOptions=require('./config/corsOptions')
// console.log(process.env.NODE_ENV)//משתנים שאצטרך שיהיו חשופים כזוןן משתמשי האתר
// app.use(cors(corsOptions))
const path = require('path')
// app.use('/', express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use("/api/auth",outhRouter );

app.use("/tripSite",TripSiteRouter)

app.use("/trip",tripRouter)

app.use("/images",imagesRouter)


app.use("/user",userRouter)

app.use("/site",siteRouter)

app.use("/opinion",opionionRouter)
app.use(cookie())

//app.use((req, res)=>{
    
//     res.send("404")
// })
// app.use("/",require('./routes/root'))
app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})
app.listen(PORT, () => {
    console.log("app ruuning",PORT);
});  
