import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;
import productRouter from "./router";

const MONGO_URI =
  "mongodb+srv://user:user@cluster0.p1fsqgv.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

const startApp = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(MONGO_URI);
    console.log("Successefully connected to db");
    app.listen(PORT, () => {
      console.log(`Server started on PORT: ${PORT}`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

startApp();

const router = express.Router();

router.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("ok");
});

app.use(router);
app.use("/api", productRouter)