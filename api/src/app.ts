import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import { join } from "path";

import dbConnect from "./db/dbConnect";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

const corsConfig = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(join("public")));

app.use(
  mongoSanitize({ 
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`This request[${key}] has been sanitized`, req);
    },
  }),
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

dbConnect();

export default app;
