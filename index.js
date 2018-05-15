var Log = require("./log.js");

var myLog = new Log();

myLog.SetLevel("Info");     // Error, Warning, Info
myLog.SetFormat("Long");    // Long, Compact
myLog.SetMode("Console");   // W.I.P. Console, File, Database

myLog.Error("hello");
myLog.Warn("hello");
myLog.Info("hello");