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

        this.LogLevel = this.Level["LevelInfo"];
        this.LogFormat = this.Format["FormatLong"];
        this.LogMode = this.Mode["ModeConsole"];
    }

    SetLevel(level)
    {
        var msg = "Log Level set to ";
        if      (level === "Error")
            this.LogLevel = this.Level["LevelError"];
        else if (level === "Warning")
            this.LogLevel = this.Level["LevelWarning"];
        else if (level === "Info")
            this.LogLevel = this.Level["LevelInfo"];
        
        else
        {
            console.log(level + " is not a valid level (Error/Warning/Info)");
            return;
        }

        console.log(msg + level);
    }
    
    SetFormat(format)
    {
        var msg = "Log Format set to ";        
        if      (format === "Compact")
            this.LogFormat = this.Format["FormatCompact"];
        else if (format === "Long")
            this.LogFormat = this.Format["FormatLong"];

        else
        {
            console.log(format + " is not a valid format (Compact/Long)");
            return;
        }

        console.log(msg + format);
    }

    SetMode(mode)
    {
        var msg = "Log Mode set to ";
        if      
        (
            mode === "Console" ||
            mode === "C"
        )
            this.LogMode = this.Mode["ModeConsole"];

        else if
        (
            mode === "File" ||
            mode === "F"
        )
            this.LogMode = this.Mode["ModeFile"];

        else if
        (
            mode === "Database" ||
            mode === "D"
        )
            this.LogMode = this.Mode["ModeDatabase"];

        else if 
        (
            mode === "ConsoleFile" ||
            mode === "CF"  || mode === "FC"
        )
            this.Logmode = this.Mode["ModeCF"];

        else if
        (
            mode === "ConsoleDatabase" ||
            mode === "CD"  || mode === "DC"
        )
            this.LogMode = this.Mode["ModeCD"];

        else if
        (
            mode === "FileDatabase" ||
            mode === "FD"  || mode === "DF"
        )
            this.LogMode = this.Mode["ModeFD"];        
        else if
        (
            mode === "ConsoleFileDatabase"   ||
            mode === "CFD" || mode === "CDF" ||
            mode === "FCD" || mode === "FDC" ||
            mode === "DCF" || mode === "DFC"  
        )
            this.LogMode = this.Mode["ModeCFD"];        

        else
        {
            console.log(mode + " is not a valid mode (Console/File/Database/C(onsole)F(ile)/C(onsole)D(atabase)/F(ile)D(atabase)/C(onsole)F(ile)D(atabase))");
            return;
        }

        console.log(msg + mode);
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