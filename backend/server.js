"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var gzip = require("compression");
var restful_express_sequelize_1 = require("restful-express-sequelize");
var dbContext = require("./models");
var port = process.env.PORT || 52192;
var host = process.env.HOST || "localhost";
var server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(gzip({ filter: function (req, res) {
        return !req.headers["x-no-gzip"];
    } }));
var models = [];
for (var property in dbContext) {
    // removed sequelize and Sequelie type def from db so we are ok to put everything or we can change too  
    models.push({ model: dbContext[property] });
}
restful_express_sequelize_1.Resource.register(server, models, "/v1/endpoint", port);
server.listen(port, host, function () {
    console.log("Server Running...");
});