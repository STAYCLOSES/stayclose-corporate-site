@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo.
echo STAYCLOSE プレビューサーバーを起動します...
echo.
echo ブラウザで次のURLを開いてください:
echo   http://127.0.0.1:5500
echo.
echo 終了するには Ctrl+C を押してください。
echo.

python -m http.server 5500
