Set WshShell = WScript.CreateObject("WScript.Shell")
Return = WshShell.Run("cmd.exe /C pm2 start bin/www", 0, true)
