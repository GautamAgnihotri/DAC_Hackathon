const express = require("express");
const userRouter = require("./routes/user");
const blogRouter = require("./routes/blog");
const categoryRouter = require("./routes/category");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/category', categoryRouter);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});