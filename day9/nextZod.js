import express from 'express'
import { z } from 'zod'

const app = express();
const port = 3000;

app.use(express.json());

const userDetails = [];

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8)
});

app.post("/", (req, res) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            message: "Invalid input",
            errors: result.error.errors
        });
    }

    userDetails.push(result.data);

    res.status(201).json({
        message: "User details added successfully",
        user: result.data
    });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
