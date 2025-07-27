import { config } from "dotenv";
import express from "express";
import emailSender from "./routes/email.sender.routes.js"
import errorMiddleware from "./middleware/error.middleware.js";

config({
    path: "./data/config.env"
});

const app = express();
app.use(express.json());

app.use("/emalify/api/v1", emailSender);

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: "Emalify Server",
        port: process.env.PORT || 5000,
        author: "Arbaz Hasan",
        contact: "arbaazhasan.ah@gmail.com"
    })
});

app.listen(process.env.PORT || 5000, (req, res) => {
    console.log(`Server running on PORT : ${process.env.PORT || 5000}`)
});


app.use(errorMiddleware);