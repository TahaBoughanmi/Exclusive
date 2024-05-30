const express = require('express');
const cors = require('cors');
const PORT =  5000;
const app = express();
const db = require('./database/config')
const authRouter = require("./routes/authRoutes");
const routerPROD = require('./routes/prodsRoutes');


app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use('/api/prod',routerPROD)

app.get('/', (req, res) => {
  res.send('API is running...');
});




app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
