var fs = require('fs');
var MongoClient = require('mongodb').MongoClient;

class Log
{
    constructor()
    {
        this.Level =        //  Pseudo Enum
        {
            LevelError: 0,
            LevelWarning: 1,
            LevelInfo: 2
        }

        this.Format =       //  Pseudo Enum
        {
            FormatCompact: 0,
            FormatLong: 1
        }

        this.Mode =         //  Pseudo Enum
        {
            ModeConsole: 0,
            ModeFile: 1,
            ModeDatabase: 2,
            ModeCF: 3,
            ModeCD: 4,
            ModeFD: 5,
            ModeCFD: 6
        }

        //  Private member variables
        this.m_LogLevel = this.Level["LevelInfo"];
        this.m_LogFormat = this.Format["FormatLong"];
        this.m_LogMode = this.Mode["ModeConsole"];

        this.m_LogFile = "./log.txt"
    }

    SetLevel(level)
    {
        var LEVEL = String(level).toUpperCase();
        var msg = "Log Level set to ";
        if          //  Level = Error
        (
            LEVEL === "ERROR"   ||
            LEVEL === "E"
        )
            this.m_LogLevel = this.Level["LevelError"];

        else if     //  Level = Warning
        (
            LEVEL === "WARNING" ||
            LEVEL === "W"
        )
            this.m_LogLevel = this.Level["LevelWarning"];

        else if     //  Level = Info
        (
            LEVEL === "INFO"    ||
            LEVEL === "I"
        )
            this.m_LogLevel = this.Level["LevelInfo"];
        
        else
            return console.log(level + " is not a valid level ((E)rror/(W)arning/(I)nfo)");

        console.log(msg + level);
    }
    
    SetFormat(format)
    {
        var FORMAT = String(format).toUpperCase();
        var msg = "Log Format set to ";
        if
        (
            FORMAT === "COMPACT" ||
            FORMAT === "C"
        )
            this.m_LogFormat = this.Format["FormatCompact"];
        
        else if
        (
            FORMAT === "LONG" ||
            FORMAT === "L"
        )
            this.m_LogFormat = this.Format["FormatLong"];

        else
        {
            console.log(format + " is not a valid format (Compact/Long)");
            return;
        }

        console.log(msg + format);
    }

    SetMode(mode)
    {
        var MODE = String(mode).toUpperCase();
        var msg = "Log Mode set to ";
        if      
        (
            MODE === "CONSOLE" ||
            MODE === "C"
        )
            this.m_LogMode = this.Mode["ModeConsole"];

        else if
        (
            MODE === "FILE" ||
            MODE === "F"
        )
            this.m_LogMode = this.Mode["ModeFile"];

        else if
        (
            MODE === "DATABASE" ||
            MODE === "D"
        )
            this.m_LogMode = this.Mode["ModeDatabase"];

        else if 
        (
            MODE === "CONSOLEFILE" ||
            MODE === "CF"  || MODE === "FC"
        )
            this.m_LogMode = this.Mode["ModeCF"];

        else if
        (
            MODE === "CONSOLEDATABASE" ||
            MODE === "CD"  || MODE === "DC"
        )
            this.m_LogMode = this.Mode["ModeCD"];

        else if
        (
            MODE === "FILEDATABASE" ||
            MODE === "FD"  || MODE === "DF"
        )
            this.m_LogMode = this.Mode["ModeFD"];        
        else if
        (
            MODE === "CONSOLEFILEDATABASE"   ||
            MODE === "CFD" || MODE === "CDF" ||
            MODE === "FCD" || MODE === "FDC" ||
            MODE === "DCF" || MODE === "DFC"  
        )
            this.m_LogMode = this.Mode["ModeCFD"];        

        else
        {
            console.log(mode + " is not a valid mode ((C)onsole/(F)ile/(D)atabase or combination)");
            return;
        }

        console.log(msg + mode);
    }

    Error(message)
    {
        this._Log(message, this.Level["LevelError"]);
    }

    Warn(message)
    {
        this._Log(message, this.Level["LevelWarning"]);
    }

    Info(message)
    {
        this._Log(message, this.Level["LevelInfo"]);
    }

    //  Private
    _Log(message, messageLevel)
    {
        var d = new Date();
        
        var timestamp = "";
        if(this.m_LogFormat === this.Format["FormatLong"])
        {
            timestamp +=
            "[" + d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";
        }

        //  Get the right log
        if (messageLevel === this.Level["LevelError"])
            var log = timestamp + "[ERROR]: " + message;
        else if (messageLevel === this.Level["LevelWarning"])
            var log = timestamp + "[WARNING]: " + message;
        else if (messageLevel === this.Level["LevelInfo"])
            var log = timestamp + "[INFO]: " + message;        

        if(this.m_LogLevel >= messageLevel)
        {
            if  //  Log to console
            (
                this.m_LogMode === this.Mode["ModeConsole"] ||
                this.m_LogMode === this.Mode["ModeCF"]      ||
                this.m_LogMode === this.Mode["ModeCD"]      ||
                this.m_LogMode === this.Mode["ModeCFD"]
            )
            {
                console.log( log );
            }

            if  //  Log to file
            (
                this.m_LogMode === this.Mode["ModeFile"]    ||
                this.m_LogMode === this.Mode["ModeCF"]      ||
                this.m_LogMode === this.Mode["ModeFD"]      ||
                this.m_LogMode === this.Mode["ModeCFD"]                
            )
            {
                fs.appendFile(this.m_LogFile, log + '\n' , function(err){
                    if (err)
                        return console.log(err);
                });
            }

            if  //  Log to database
            (
                this.m_LogMode === this.Mode["ModeDatabase"]||
                this.m_LogMode === this.Mode["ModeCD"]      ||
                this.m_LogMode === this.Mode["ModeFD"]      ||
                this.m_LogMode === this.Mode["ModeCFD"]                
            )
            {
                var Level = this.Level

                MongoClient.connect("mongodb://localhost:27017/logs", function(err, db) {
                    if (err) throw err;
                    var dbo = db.db("logs");

                    if (messageLevel === Level["LevelError"])
                    {
                        dbo.createCollection("Errors", function(err, res) {
                            if (err) throw err;
                            var logObj = {Timestamp: timestamp, Message: message};
                            dbo.collection("Errors").insertOne(logObj, function(err, res) {
                                if (err) throw err;
                                console.log("Error inserted");
                                db.close();
                              });
                          });
                    }
                    
                    else if (messageLevel === Level["LevelWarning"])
                    {
                        dbo.createCollection("Warnings", function(err, res) {
                            if (err) throw err;
                            var logObj = {Timestamp: timestamp, Message: message};                            
                            dbo.collection("Warnings").insertOne(logObj, function(err, res) {
                                if (err) throw err;
                                console.log("Warning inserted");
                                db.close();
                              });
                        });
                    }
                    
                    else if (messageLevel === Level["LevelInfo"])
                    {
                        dbo.createCollection("Info", function(err, res) {
                            if (err) throw err;
                            var logObj = {Timestamp: timestamp, Message: message};
                            dbo.collection("Info").insertOne(logObj, function(err, res) {
                                if (err) throw err;
                                console.log("Info inserted");
                                db.close();
                              });                                   
                        });
                    }

                });

            }

        }   
    }

}

module.exports = Log;