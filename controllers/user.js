import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const getUser = (req,res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if(err) return res.status(500).json(err);
        const {password,...info} = data[0];
        return res.json(info);
    });
}

export const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("Not authentiated!")

    jwt.verify(token, "secretKey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token is not valid!");
        
        const q = "UPDATE users SET `email`=?,`name`=?,`city`=?,`website`=?,`profilePicture`=?,`coverPicture`=? WHERE id=? ";

        db.query(q, 
            [
            req.body.email,
            req.body.name,
            req.body.city,
            req.body.website,
            req.body.coverPicture,
            req.body.profilePicture,
            userInfo.id
        ], (err, data) =>{
            if(err) return res.status(500).json(err);
            if(data.affectedRows > 0) return res.json(`Updated!`);
            return res.status(401).json(`You can update only your post`);
        });
    });
}