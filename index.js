var Log = require("./log.js");

var myLog = new Log();

myLog.SetLevel("I");     // (E)rror, (W)arning, (I)nfo
myLog.SetFormat("Compact");       // (L)ong, (C)ompact
myLog.SetMode("FCD");         // W.I.P. (C)onsole, (F)ile, (D)atabase

myLog.Error("This");
myLog.Warn("Should");
myLog.Info("Be working");