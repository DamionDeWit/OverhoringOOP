class Log
{
    constructor()
    {
        this.Level =
        {
            LevelError: 0,
            LevelWarning: 1,
            LevelInfo: 2
        }

        this.Format = 
        {
            FormatCompact: 0,
            FormatLong: 1
        }

        this.LogLevel = this.Level["LevelInfo"];
        this.LogFormat = this.Format["FormatLong"];
    }

    SetLevel(level)
    {
        if      (level === "Error")
            this.LogLevel = this.Level["LevelError"];
        else if (level === "Warning")
            this.LogLevel = this.Level["LevelWarning"];
        else if (level === "Info")
            this.LogLevel = this.Level["LevelInfo"];
        
        else
            console.log(level + " is not a valid level (Error/Warning/Info)");
    }

    SetFormat(format)
    {
        if      (format === "Compact")
            this.LogFormat = this.Format["FormatCompact"];
        else if (format === "Long")
            this.LogFormat = this.Format["FormatLong"];

        else
            console.log(format + " Is not a valid format (Compact/Long)");
    }

    Error(message)
    {
        var d = new Date();
        var timestamp = "";
        if(this.LogFormat === this.Format["FormatLong"])
        {
            timestamp +=
            "[" + d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";
        }

        if(this.LogLevel >= this.Level["LevelError"])
            console.log( timestamp + "[ERROR]: " + message);
            
    }

    Warn(message)
    {
        var d = new Date();
        var timestamp = "";
        if(this.LogFormat === this.Format["FormatLong"])
        {
            timestamp +=
            "[" + d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";
        }

        if(this.LogLevel >= this.Level["LevelWarning"])
            console.log( timestamp + "[WARNING]: " + message);
    }

    Info(message)
    {
        var d = new Date();
        var timestamp = "";
        if(this.LogFormat === this.Format["FormatLong"])
        {
            timestamp +=
            "[" + d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "]";
        }

        if(this.LogLevel >= this.Level["LevelInfo"])
            console.log( timestamp + "[INFO]: " + message);
    }

}


module.exports = Log;