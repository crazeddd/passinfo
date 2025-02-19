import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";

import dbConnect from "./db/dbConnect";

import indexRouter from "./routes/index";
import usersRouter from "./routes/users";

var app = express();

const corsConfig = {
  origin: ["http://localhost:3000", "https://literate-succotash-46xwrx49j6r2j4j9-3000.app.github.dev"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};

app.use(cors(corsConfig));
app.options("*", cors(corsConfig));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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
