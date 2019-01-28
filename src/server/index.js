import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routeEntry from "./routeEntry";
import routeImagePost from "./routeImagePost";
import mongoose from "mongoose";
import homeRouter from "./routes/home";
import detailRouter from "./routes/detail";
import sourceMapSupport from "source-map-support";

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/test",
  { useNewUrlParser: true }
);

if (process.env.NODE_ENV === "development") {
  sourceMapSupport.install();
}

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/home", homeRouter);
app.use("/api/detail", detailRouter);

app.use(express.static("dist/public", { index: false })); //若沒設false，預設將傳送index.html至瀏覽器

app.use(routeImagePost);
app.use(routeEntry);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// module.exports = app;
export default app;
