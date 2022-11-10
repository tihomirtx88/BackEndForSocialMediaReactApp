import  Express  from "express";
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
const app = Express();

app.use("/users", userRoutes);
app.use("/posts", postsRoutes);
app.use("/likes", likesRoutes);
app.use("/comments", commentsRoutes);
app.use("/auth", authRoutes);

app.listen(8000, () => {
    console.log(`API is work!`);
});
