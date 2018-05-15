var Log = require("./log.js");

var myLog = new Log();

myLog.SetLevel("Error");     // (E)rror, (W)arning, (I)nfo
myLog.SetFormat("L");       // (L)ong, (C)ompact
myLog.SetMode("CD");         // W.I.P. (C)onsole, (F)ile, (D)atabase

myLog.Error("hello");
myLog.Warn("hello");
myLog.Info("hello");