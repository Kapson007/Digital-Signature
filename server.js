const express = require("express")
const { verifySignature } = require("./verifySignature")
const app = express()
const {getSignature} = require('./getSignature')
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    
    res.status(200)
    res.render('index')
})

let message = ""

app.post('/generateKey', (req, res)=>{
    
    message = req.body.message
    // res.render('generateKey', {key: message})

    try {
        if(message == "" || message == null){
            throw Error("Wrong message")
        }
        const signature = getSignature(message)
        // const verification = verifySignature(signature)
        // console.log(verification);
        setTimeout(()=>{
            res.render('generateKey', {key: signature.PUBLIC_KEY})
        }, 1000)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Twoja wiadomość jest niepoprawna. Popraw ją.")
    }
});

app.post('/verifySignature', (req, res)=>{
    // const message = req.body.message
    
    try {
        if(message == "" || message == null){
            throw Error("Wrong message")
        }
        
        const signature = getSignature(message)
        if(req.body.capture != undefined){
            console.log("Typ: ",req.body.capture);
            signature.message += "lorem"
        }
        const verification = verifySignature(signature)
        console.log(verification);
        setTimeout(()=>{
            res.render('checkSignature', {check: verification})
        }, 1000)
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Twoja wiadomość jest niepoprawna. Popraw ją.")
    }
});

app.listen(port)