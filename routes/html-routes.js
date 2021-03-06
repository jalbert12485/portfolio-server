const path = require("path");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER_NAME,
    pass: process.env.USER_PASSWORD
  }
});



// Routes
// =============================================================
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,'../public/html/index.html'));
    });


    app.get("/:file", (req, res) => {
        let file=req.params.file;
        res.sendFile(path.join(__dirname,`../public/html/${file}.html`));
    });

    app.post("/emailme", (req,res) =>{

      var mailOptions = req.body;
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.end();


    });


};
