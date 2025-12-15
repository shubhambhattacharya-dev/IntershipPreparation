import express from 'express'
import {z} from 'zod'

const app = express();
const schema = z.array(z.number());
const port = 3000;

app.use(express.json());

app.post("/", (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(400).json({
            msg:"input invalid",
            error:response.error.errors
        })

        }else{
            res.json({
        response
    })
    }
    
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})