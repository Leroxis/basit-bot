@echo off
title Discord Bot Modül Yükleyici
color 0a
echo.
echo #############################################
echo #   Discord Bot Gereksinimleri Yükleniyor   #
echo #############################################
echo.

cd /d %~dp0

node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo HATA: Node.js yüklü değil!
    echo Lütfen önce Node.js yükleyin: https://nodejs.org/
    pause
    exit /b
)

npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo HATA: npm çalışmıyor!
    echo Node.js kurulumunuzu kontrol edin.
    pause
    exit /b
)

echo Gerekli modüller yükleniyor...
echo.
npm install discord.js dotenv
echo.

echo #############################################
echo #           Başarıyla Yüklendi!            #
echo #############################################
echo.
echo Yükleme tamamlandı. Artık botunuzu çalıştırabilirsiniz.
echo Çalıştırmak için: node index.js
echo.
pause