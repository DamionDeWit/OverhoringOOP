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
        var FORMAT = String(format).toUpperCase();
        var msg = "Log Format set to ";
        if
        (
            FORMAT === "COMPACT" ||
            FORMAT === "C"
        )
            this.LogFormat = this.Format["FormatCompact"];
        
        else if
        (
            FORMAT === "LONG" ||
            FORMAT === "L"
        )
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
        var MODE = String(mode).toUpperCase();
        var msg = "Log Mode set to ";
        if      
        (
            MODE === "CONSOLE" ||
            MODE === "C"
        )
            this.LogMode = this.Mode["ModeConsole"];

        else if
        (
            MODE === "FILE" ||
            MODE === "F"
        )
            this.LogMode = this.Mode["ModeFile"];

        else if
        (
            MODE === "DATABASE" ||
            MODE === "D"
        )
            this.LogMode = this.Mode["ModeDatabase"];

        else if 
        (
            MODE === "CONSOLEFILE" ||
            MODE === "CF"  || MODE === "FC"
        )
            this.LogMode = this.Mode["ModeCF"];

        else if
        (
            MODE === "CONSOLEDATABASE" ||
            MODE === "CD"  || MODE === "DC"
        )
            this.LogMode = this.Mode["ModeCD"];

        else if
        (
            MODE === "FILEDATABASE" ||
            MODE === "FD"  || MODE === "DF"
        )
            this.LogMode = this.Mode["ModeFD"];        
        else if
        (
            MODE === "CONSOLEFILEDATABASE"   ||
            MODE === "CFD" || MODE === "CDF" ||
            MODE === "FCD" || MODE === "FDC" ||
            MODE === "DCF" || MODE === "DFC"  
        )
            this.LogMode = this.Mode["ModeCFD"];        

        else
        {
            console.log(mode + " is not a valid mode ((C)onsole/(F)ile/(D)atabase or combination)");
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

        var log = timestamp + "[INFO]: " + message;

        if(this.LogLevel >= this.Level["LevelError"])
        {
            if  //  Log to the console
            (
                this.LogMode === this.Mode["ModeConsole"]   ||
                this.LogMode === this.Mode["ModeCF"]        ||
                this.LogMode === this.Mode["ModeCD"]        ||
                this.LogMode === this.Mode["ModeCFD"]
            )
                console.log( log );
        }
            
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

        var log = timestamp + "[INFO]: " + message;

        if(this.LogLevel >= this.Level["LevelWarning"])
        {
            if  //  Log to the console
            (
                this.LogMode === this.Mode["ModeConsole"]   ||
                this.LogMode === this.Mode["ModeCF"]        ||
                this.LogMode === this.Mode["ModeCD"]        ||
                this.LogMode === this.Mode["ModeCFD"]
            )
                console.log( log );
        }    
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

        var log = timestamp + "[INFO]: " + message;

        if(this.LogLevel >= this.Level["LevelInfo"])
        {
            if  // Log to the console
            (
                this.LogMode === this.Mode["ModeConsole"]   ||
                this.LogMode === this.Mode["ModeCF"]        ||
                this.LogMode === this.Mode["ModeCD"]        ||
                this.LogMode === this.Mode["ModeCFD"]
            )
                console.log( log );

        }
    }

}

module.exports = Log;