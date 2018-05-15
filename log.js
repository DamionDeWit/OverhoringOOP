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
        var d = new Date();
        if(this.LogLevel >= this.Level["LevelError"])
            console.log(
                "[" + 
                d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
                d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +
                "]" 
                + "[ERROR]: " + message);
    }

    Warn(message)
    {
        var d = new Date();        
        if(this.LogLevel >= this.Level["LevelWarning"])
        console.log(
            "[" + 
            d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +
            "]" 
            + "[WARNING]: " + message);
    }

    Info(message)
    {
        var d = new Date();        
        if(this.LogLevel >= this.Level["LevelInfo"])
        console.log(
            "[" + 
            d.getFullYear() + "-"  + d.getMonth() + "-" + d.getDay() + " " +
            d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() +
            "]" 
            + "[INFO]: " + message);
    }

}


module.exports = Log;