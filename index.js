import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8090;

//create mongoose connection

mongoose.Promise = global.Promise;
//this is the local url if you had an external one you would put it in that section
mongoose.connect ('mongodb://localhost/nodeApi', {
  useMongoClient: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.send(`Node and Express Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
