import express from "express";
import mongoose from "mongoose";
import productRouter from "./productRouter";
const app = express();
const PORT = 5000;

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

const appRouter = express.Router();

appRouter.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("ok");
});

// appRouter.get("*", (req: express.Request, res: express.Response) => {
//   res.status(404).send("Not found");
// });


app.use(appRouter);
app.use("/api", productRouter)