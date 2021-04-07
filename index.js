const expressApp = require('express');
const corsEnable = require('cors');
const bodyParser = require('body-parser');
const pathResolver = require('path');
const mongoose = require('mongoose');
const configuration = require('./config');


// Set PORT
const port          = configuration.PORT;

//Initialize App
const application   = expressApp();

// App meiddlelwires
application.use(corsEnable());
application.use(bodyParser.urlencoded({ extended: false }));
application.use(expressApp.json());
application.use(expressApp.static('ui/dist'));
application.get("/", (req, res) => {
    res.sendFile(pathResolver.resolve(__dirname, "ui", "dist", "index.html"));
  });

mongoose.connect(configuration.MONGO_URL, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Database connected at cloud"))
    .catch(err => console.log(err));


application.use('/chat', require('./router/chatRouter'));
application.use('/query', require('./router/queryRouter'))


application.listen(port, () => console.log(`Hello world app listening on port ${port}!`))