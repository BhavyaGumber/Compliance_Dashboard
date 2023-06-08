const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors")
const Users = require('./models/Users.js');
const Data = require('./models/data.js');
const bodyParser = require('body-parser');
const AbsentUsers = require('./models/absentUsers.js');
const app = express();



mongoose.connect('mongodb://localhost:27017/Dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
})
  .then(() => {
    console.log('Connected to MongoDB successfully');
    
    
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });
  

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(express.json()); 
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))


  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/login', async (req, res) => {
  const { currentUser, currentPassword } = req.body;
  
  try {
    const user = await Users.findOne({ username: currentUser }).exec();
   
    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else if (user.password != currentPassword) {
      
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      Data.find({ _id: currentUser })
        .then((data) => {
          console.log(data);
          res.json({ data });
        })
        .catch((error) => {
          console.error('Error:', error);
          res.status(500).json({ error: 'Internal server error' });
        });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.get('/options', async (req, res) => {
  try {
   
    const options = await AbsentUsers.find().exec();

    // Send the options as the response
    res.json({ options });
  } catch (error) {
    console.error('Error fetching options:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/fetch-data', async (req, res) => {
  const { selectedValue } = req.body;
  console.log(selectedValue);
  

  try {
    // Fetch the data based on the selected option ID
    const data = await Data.findOne({ _id: selectedValue}).exec();

    // Send the data as the response
    console.log(data);
    res.json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  console.log(selectedValue)
});




app.listen(8080, () => {
  console.log('Server is running on port 8080');
});