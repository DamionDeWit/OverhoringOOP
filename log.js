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

        this.LogLevel = this.Level["LevelInfo"];
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
            console.log(level + " is not a valid level");
    }

    Error(message)
    {
        if(this.LogLevel >= this.Level["LevelError"])
            console.log("[ERROR]: " + message);
    }

    Warn(message)
    {
        if(this.LogLevel >= this.Level["LevelWarning"])
            console.log("[WARNING]: " + message);
    }

    Info(message)
    {
        if(this.LogLevel >= this.Level["LevelInfo"])
            console.log("[INFO]: " + message);
    }
}


module.exports = Log;