var Log = require("./log.js");

var myLog = new Log();

myLog.SetLevel("Error");    // Error, Warning, Info

myLog.Error("hello");
myLog.Warn("hello");
myLog.Info("hello");