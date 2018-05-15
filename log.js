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

        this.LogLevel = this.Level["LevelWarning"];
    }


    HelloWorld()
    {
        console.log("Hello World");
    }

    SetLevel(level)
    {
        if  //  level given is valid
        (
            level === this.Level["LevelError"] ||
            level === this.Level["LevelWarning"] ||
            level === this.Level["LevelInfo"]
        )
        {
            this.LogLevel = level;
        }
    }
}


module.exports = Log;