import index from "./routes/index";
import users from "./routes/users";
import getItemsRouter from "./routes/getItemsRouter";

export default function (app) {
    //app.use("/", index);
    app.use("/", users);
    app.use("/", getItemsRouter);
}