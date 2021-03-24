const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();

app.use(cors());    //cors= express use er jnno server site e dekhanor shubidhar jnno middlewear hishebe

app.use(bodyParser.json());      //bodyParser = eta holo post method er jonno

// get request
app.get('/', (req, res)=> {     //req = request , res = response
    const fruit = {
        product :'ginger',
        price: 500
    }
//   res.send('I know how to open node. YAY Amio pariiiiiiiii');
res.send(fruit);    //eta localhost chalale dekha jai okhane json hishebe   ,  res.send e always ekta object dite hy
});


// // get request
// app.get('/fruit/banana', (req, res)=> {
//     const bananaFruit = {
//         fruit: 'banana',
//         quantity:1000,
//         price:10000
//     }
//     res.send(bananaFruit);    // localhost:3000/fruit/banana  te browser e jai taholei eta pabe  ,  res.send e always ekta object dite hy
// })


const users = ['sultana','Tasnim','jahan','idris','akter','sium','soaib','istiak','abrar'];
// get request
app.get('/users/:id', (req, res)=> {
    const userId = req.params.id;       // /users/:id te id er age : ache tai eta dynamic. dynamic deoa id ta k req.params die dhora hoieche
    console.log(req.query.sort);        //jodi ques sign die erpor kichu thake tar jjnno eta. ex: http://localhost:3000/users/1?sort=asc. erkom thakle req.query die dekha jai.. mane ans ta ekhane vs code er terminal e ashbe asc naki desc dichi sheta.r browser e ? sign die erpor kichu na thakle ekhane vs er trtminal e undefined dekhabe.
    const name = users[userId];
    res.send({userId,name});        // http://localhost:3000/users/1 te gele output ashbe   , res.send e always ekta object dite hy.
    console.log(req.params.id);
})



//post request
app.post('/addUser', (req, res) => {
    const user = req.body;
    user.id=19;
    // save to database
    res.send(user)
    console.log('data received', user);
    console.log('data received', req.body);
    console.log("post request sent");
})




app.listen(3000, ()=> console.log("Listening to port 3000"));