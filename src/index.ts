import express from "express";
import cartsRouter from "./routes/carts.routes.ts";
import productsRouter from "./routes/products.routes.ts";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ver si es necesario enrealidad
app.use(morgan("dev"));

app.use("/api/carts", cartsRouter);
app.use("/api/products", productsRouter);

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});
