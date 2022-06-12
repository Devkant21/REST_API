import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "Devkant",
        lastName: "Swargiary",
        age: "32" 
    },
    {
        firstName: "Dev",
        lastName: "Swargiary",
        age: "32" 
    },
]

// All routes in here starts from /users

router.get('/', (req, res) => {
    console.log(users);
    res.send(users);
});

router.post('/', (req,res) => {
    
});
export default router;