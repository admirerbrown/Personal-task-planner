const express = require('express');
const cors = require('cors');
const connectDb = require('./Config/db');
const dotenv = require('dotenv');

//load config
dotenv.config({ path: './Config/config.env' });

const taskGroupRoute = require('./Routes/taskCategoryRoute');
const goalsRoute = require('./Routes/goalsRoutes');
const tasksRoute = require('./Routes/tasksRoutes');



connectDb();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


//routes
app.use("/", taskGroupRoute);
app.use("/", goalsRoute);
app.use("/", tasksRoute);





app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`)
})