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
  const sampleData = [
    {
      _id: 909,
      items: [
        {
          id: 909,
          name: 'Ankit',
          team: 'Nishant',
          Strategy_Type: 'Discount',
          Abbr: 'DN/7/917',
          Inst_Name: 'Nifty',
          Quantity: '3600'
        },
        {
          id: 909,
          name: 'Ankit',
          team: 'Nishant',
          Strategy_Type: 'Straddle_Premium',
          Abbr: 'SPN/2/920',
          Inst_Name: 'Nifty',
          Quantity: '3600'
        },
        {
          id: 909,
          name: 'Ankit',
          team: 'Nishant',
          Strategy_Type: 'Simple',
          Abbr: 'SB/17/922',
          Inst_Name: 'Banknifty',
          Quantity: '2400'
        }
      ]
    },
    {
      _id: 912,
      items: [
        {
          id: 912,
          name: 'Hasan',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'DBC/3/916',
          Inst_Name: 'Banknifty',
          Quantity: '900'
        },
        {
          id: 912,
          name: 'Hasan',
          team: 'Manni',
          Strategy_Type: 'Straddle_Premium',
          Abbr: 'NSPC2/6',
          Inst_Name: 'Nifty',
          Quantity: '1800'
        },
        {
          id: 912,
          name: 'Hasan',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'SB/17/922',
          Inst_Name: 'Banknifty',
          Quantity: '2400'
        }
      ]
    },
    {
      _id: 916,
      items: [
        {
          id: 916,
          name: 'Mayank',
          team: 'Nishant',
          Strategy_Type: 'Discount',
          Abbr: 'DBC/3/916',
          Inst_Name: 'Banknifty',
          Quantity: '900'
        },
        {
          id: 916,
          name: 'Mayank',
          team: 'Nishant',
          Strategy_Type: 'Straddle_Premium',
          Abbr: 'NSPC2/6',
          Inst_Name: 'Nifty',
          Quantity: '1800'
        },
        {
          id: 916,
          name: 'Mayank',
          team: 'Nishant',
          Strategy_Type: 'Discount',
          Abbr: 'SB/17/922',
          Inst_Name: 'Banknifty',
          Quantity: '2400'
        }
      ]
    },
    {
      _id: 503,
      items: [
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'DBC/3/916',
          Inst_Name: 'Banknifty',
          Quantity: '900'
        },
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Straddle_Premium',
          Abbr: 'NSPC2/6',
          Inst_Name: 'Nifty',
          Quantity: '1800'
        },
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'SB/17/922',
          Inst_Name: 'Banknifty',
          Quantity: '2400'
        }
      ]
    },
    {
      _id: 503,
      items: [
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'DBC/3/916',
          Inst_Name: 'Banknifty',
          Quantity: '900'
        },
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Straddle_Premium',
          Abbr: 'NSPC2/6',
          Inst_Name: 'Nifty',
          Quantity: '1800'
        },
        {
          id: 503,
          name: 'Manni',
          team: 'Manni',
          Strategy_Type: 'Discount',
          Abbr: 'SB/17/922',
          Inst_Name: 'Banknifty',
          Quantity: '2400'
        }
      ]
    }
  ];
  
  
  
  // Data.insertMany(sampleData)
  // .then(() => {
  //   console.log('Data saved and replaced successfully');
  // })
  // .catch(error => {
  //   console.error('Error saving and replacing data:', error);
  // });
  //  const documents = [
  //   {
  //     name:"Jaswinder",
  //     username:415,
  //     password:415
  //   },
  //   {
  //     name:"Sachin",
  //     username:521,
  //     password:521
  //   },
  //   {
  //     name:"Ravleen",
  //     username:604,
  //     password:604
  //   },
  //   {
  //     name:"Piyush",
  //     username:421,
  //     password:421
  //   },
  //   {
  //     name:"Mudit",
  //     username:922,
  //     password:922
  //   },
  //   {
  //     name:"Tarun",
  //     username:504,
  //     password:504
  //   },
  //   {
  //     name:"Tanmay",
  //     username:510,
  //     password:510
  //   },
  //   {
  //     name:"Atul",
  //     username:414,
  //     password:414
  //   },
  //   {
  //     name:"Prashant",
  //     username:504,
  //     password:504
  //   },
  //   {
  //     name:"Shivam",
  //     username:520,
  //     password:520
  //   },
  //   {
  //     name:"Yashveer",
  //     username:517,
  //     password:517
  //   },
  //   {
  //     name:"Umesh",
  //     username:512,
  //     password:512
  //   },
  //   {
  //     name:"Pushpendra",
  //     username:919,
  //     password:919
  //   },
  //   {
  //     name:"Sumit",
  //     username:903,
  //     password:903
  //   },
  //   {
  //     name:"Saurabh",
  //     username:519,
  //     password:519
  //   },
  //   {
  //     name:"Sahil",
  //     username:906,
  //     password:906
  //   },
  //   {
  //     name:"Jatin",
  //     username:515,
  //     password:515
  //   },
  //   {
  //     name:"Deependra",
  //     username:501,
  //     password:501
  //   },
  //   {
  //     name:"Nishant",
  //     username:505,
  //     password:505
  //   },
  //   {
  //     name:"Mayank",
  //     username:916,
  //     password:916
  //   },
  //   {
  //     name:"Manni",
  //     username:503,
  //     password:503
  //   },
  //   {
  //     name:"Himanshu",
  //     username:901,
  //     password:901
  //   },
  //   {
  //     name:"Nishant",
  //     username:505,
  //     password:505
  //   },
  //   {
  //     name:"Hasan",
  //     username:912,
  //     password:912
  //   },
  //   {
  //     name:"Ankit",
  //     username:909,
  //     password:909
  //   }
  //  ]
  //  Users.insertMany(documents).then((result)=>{
  //   console.log(result);
  //  }).catch((err)=>console.log(err))

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
      res.json({user});
    }
  } catch (error) {
    console.error('Error finding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.post("/currentUser", async (req, res) => {
  const  {uId}  = req.body;
  console.log(uId);

  try {
    const userData = await Data.find({ _id: uId }).exec();
    console.log(userData)
    res.json({ userData });
  } catch (error) {
    console.error("Error finding Data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/options', async (req, res) => {
  try {
   
    const options = await AbsentUsers.find().exec();


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
 
    const data = await Data.findOne({ _id: selectedValue}).exec();

    
    // console.log(data);
    res.json({ data });
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
  // console.log(selectedValue)
});

app.post('/api/data/:uId', async (req, res) => {
  const { uId } = req.params;
  const { selectedRows } = req.body;
 const selectedValue =  selectedRows[0].id
 


  try {
    // Fetch the user's existing data from the database
    const dataDoc = await Data.findOne({ _id:uId });
   

    if (!dataDoc) {
      return res.status(404).json({ error: 'User not found' });
    }
    const loggedInUser = await Users.findOne({ username: uId });
    if (!loggedInUser) {
      return res.status(404).json({ error: 'Logged in user not found' });
    }
     
        const teamName= dataDoc.items[0].team
        const updatedItems = selectedRows.map(row => {
        return {
        Abbr: row.Abbr,
        Inst_Name: row.Inst_Name,
        Quantity: row.Quantity,
        Strategy_Type: row.Strategy_Type,
        id: uId,
        name: loggedInUser.name,
        team: teamName,
       
        
        
       
      };
    });

    dataDoc.items = [...dataDoc.items, ...updatedItems];
    await dataDoc.save();
    const selectedPerson = await Data.findOne({_id:selectedValue})
    console.log(selectedPerson)
    if (selectedPerson) {
      // Remove the selected rows from the person's data based on their _id values
      selectedRows.forEach(row => {
        selectedPerson.items = selectedPerson.items.filter(item => item._id.toString() !== row._id);
      });
      await selectedPerson.save();
    }

    await dataDoc.save();

     
   

    res.json({ message: 'Selected rows saved successfully' });
  } catch (error) {
    console.log('Error saving selected rows:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(8080, () => {
  console.log('Server is running on port 8080');
});