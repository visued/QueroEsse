'use strict';
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config    = require('../config/config.json')[env];
// placeholder for all
var dbContext = {};
// connect
var sequelize = new Sequelize(config.database, config.username, config.password, config.options);
// imports everything in this directory into entities and register relations later.
fs.readdirSync(__dirname)
  .filter(function(f) {
    return (f.indexOf('.') !== 0) && (f !== basename) && (f.slice(-3) === '.js');
  })
  .forEach(function(f) {
    var model = sequelize.import(path.join(__dirname, f));
    dbContext[model.name] = model;  
  });
// invoke associate methods on models
Object.keys(dbContext)
  .forEach(function(key) {
    if(dbContext[key].associate) {
      // this will invoke our relationships
      dbContext[key].associate(dbContext);
    }
  });
// sync context once
sequelize.sync();
// exports
module.exports = dbContext;