import  express  from "express";
const app = express();
import userRoutes from "./routes/users.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";
import commentsRoutes from "./routes/comments.js";
import authRoutes from "./routes/auth.js";
import relationshipsRoutes from "./routes/relationships.js";
import storiesRoutes from "./routes/stories.js";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";

//middlewares
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
   destination: function(req, file, cb){
    cb(null, "../SocialMediaReactApp/public/upload");
   },
   filename: function(req, file, cb){
    cb(null, Date.now() + file.originalname);
   }
});

const upload = multer({storage: storage});

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postsRoutes);
app.use("/comments", commentsRoutes);
app.use("/likes", likesRoutes);
app.use("/stories", storiesRoutes);
app.use("/relationships", relationshipsRoutes);

app.listen(8000, () => {
  console.log("API working!");
});