Set WshShell = WScript.CreateObject("WScript.Shell")
Return = WshShell.Run("cmd.exe /C pm2 stop bin/www", 0, true)
