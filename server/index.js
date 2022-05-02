import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import postsRoutes from './routes/posts.js'
import userRoutes from "./routes/users.js";
const PORT = process.env.PORT || 5000

const app = express();

dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postsRoutes);
app.use('/user', userRoutes);

app.get("*", function(_,res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function(err) {
            if(err) {
                res.status(500).send(err)
            }
        }
    )
})

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))


