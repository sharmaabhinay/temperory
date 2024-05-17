let express = require('express');
let app = express();
app.use(express.json());

app.get('/',(req,res)=> {
    res.send('hello world')
    // console.log(req.query.age)
})
const middle = (req,res,next)=>{
    if(req.query.name == 'hello'){
        // res.send('accessed')
        next()
    }else if(!req.query.length){
        res.send('empty string')
    }
    else{
        res.send('not valid')
    }
    console.log(req.query.name.length)
}
app.get('/profile',middle,(req,res)=> {
    res.send('profile picture accessed')
    console.log('profile agree')
})
app.get('/helloworld',(req,res)=> {
    res.send('hello world route accessed')
})

app.listen(2500)