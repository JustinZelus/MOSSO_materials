import express from "express";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import Home from "../shared/components/Home";
import ImgaePost from "../shared/components/ImgaePost";
import React from "react";
import routes from "../shared/routes";
import App from "../shared/App";
import serialize from "serialize-javascript";
import path from "path";
import fs from "fs";
import { Promise } from "mongoose";
var router = express.Router();

router.get("*", (req, res, next) => {
  console.log("entry req.url");
  console.log(req.url);

  const currentRoute = routes.find(route => matchPath(req.url, route));

  if (currentRoute) {
    console.log(currentRoute);
  }

  const requestInitailData =
    currentRoute.component.requestInitailData &&
    currentRoute.component.requestInitailData();

  if (requestInitailData) console.log(requestInitailData);

  Promise.resolve(requestInitailData)

    .then(initialData => {
      var fileName = path.join(__dirname, "../../dist/public", "index.html");

      console.log("index.html file path");
      console.log(fileName);
      fs.readFile(fileName, "utf8", (err, file) => {
        if (err) {
          throw err;
        }

        const context = { initialData };
        const [head, tail] = file.split("{react-app}");
        const last = tail.split("{window}");

        res.write(head);
        const stream = renderToNodeStream(
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        );
        stream.pipe(
          res,
          { end: false }
        );
        stream.on("end", () => {
          res.write(last[0]);

          res.write(
            `<script>window.__initialData__=${serialize(initialData, {
              isJSON: true
            })}</script>`
          );

          res.write(last[1]);
          res.end();
        });
      });
    })
    .catch(next);
});

export default router;
