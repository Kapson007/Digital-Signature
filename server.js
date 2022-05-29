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

app.post('/signMessage', (req, res)=>{
    
    const message = req.body.message
    try {
        if(message == "" || message == null){
            throw Error("Wrong message")
        }
        const signature = getSignature(message)
        const verification = verifySignature(signature)
        console.log(verification);
        res.render('checkSignature', {check: verification})
        
    } catch (error) {
        console.error(error.message)
        res.status(400).send("Your message is incorrect. Please fix your message")
    }
});

app.listen(port)