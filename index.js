const express = require("express")
const app = express();
const port = 3000;

app.listen(port, () => { console.log(`Server is listening on port ${port}`)})

// Middleware 

const logReq = function (req, res, next) {
    console.log("Request Recieved");
    next();
}


app.use(logReq)

// End of Middleware

app.get("/", (req, res) => {
    console.log("Here");
    res.send("Naviagte to /user")
})

// creates localhost:3000/express with the output 
app.get("/express",(req, res) => {
    res.send("Creating routes on Express")
})

// creates GET req for localhost:3000/user
app.get("/user", (req, res) => {
    res.send("Receive a GET request for a user! try Nagivating to /user/somevalue/profile/somevalue")
})

app.get ("/user/:userID", (req, res) => {
    res.send(`Navigated to the user page for: ${req.params.userID} `)
})

app.get ("/user/:userID/profile", (req, res) => {
    res.send(`Navigated to the user profile for: ${req.params.userID} `)
})

app.get ("/user/:userID/profile/:data", (req, res) => {
    res.send(`Navigated to the user profile for: ${req.params.userID}, with the data: ${req.params.data}`)
})

// creates POST req for localhost:3000/user
app.post("/user", (req, res) => {
    res.send("Received a POST request for a user!")
})

// Chainable Routes
app.route("/learner")
    .get((req, res) => {
        res.send("Get a random leaner");
    })
    .post((req, res) => {
        res.send("Add a leaner");
    })
    .put((req, res) => {
        res.send("Update leaners information")
    })

// // Middleware Cookie Validation 

// const cookieParser = require("cookie-parser");

// async function validateCookies(req, res, next){
//     await cookieValidator(req.cookies)
//     next()
// } 

// async function cookieValidator (cookies){
//     console.log(cookies);
//     // we dont have cookies to validate so we'll just return true for now
//     return true;
// }

// app.use(cookieParser())
// app.use(validateCookies);

// //error handler 
// app.use((err,req, res, next) => {
//     res.status(400).send(err.message)
// })

// app.get("/cookies", (req, res) => {
//     res.send("Keeping it simple");
// })






///// NOTES

// ? 
//  app.post("/ab?cd", (req, res) => {
//     res.send("ab?cd")
// }) 
// Matches routes /acd and /abcd 

// + 
//  app.post("/ab+cd", (req, res) => {
//     res.send("ab+cd")
// }) 
// Matches routes /abcd, / abbcd, /abbbcd, etc

// *
//  app.post("/ab*cd", (req, res) => {
//     res.send("ab*cd")
// }) 
// Matches routes /abcd, /abxcd, /abSOMETHINGcd, /ab42cd, etc 

// () 
//  app.post("/ab(cd)?e", (req, res) => {
//     res.send("ab(cd)?e")
// }) 
// Matches routes /abe and /abcde

//  /
//  app.post("/a/", (req, res) => {
//     res.send("/a/")
// }) 
// Matches routes with "a" in it