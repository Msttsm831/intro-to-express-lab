const express = require('express')
const morgan = require('morgan');

const app = express()

app.use(morgan('dev'));

app.listen(5000, () => {
    console.log('Listening on port 5000')
  })

app.get('/greetings/:username', (req, res) =>{
    const username = req.params.username;
    res.send(`Hello  there ${username} !`);
})


    
    app.get('/roll/:number', (req, res) => {
        const number = req.params.number;
    
        
        if (number != +number) {
            res.send("You must specify a number.");
        } 
        
        else {
            res.send(`You rolled ${Math.floor(Math.random() * (+number + 1))}`);
        }
        
    });
        


const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

  app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index; 

    if (index >= 0 && index < collectibles.length) {
        const item = collectibles[index];  
     res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
    } 
    else {
        res.send("This item is not yet in stock. Check back soon!");
    }
});


