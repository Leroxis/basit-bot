@echo off
title Discord Bot Başlatıcı
color 0a
echo.
echo #############################################
echo #        Discord Bot Başlatılıyor...        #
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

if not exist ".env" (
    echo UYARI: .env dosyası bulunamadı!
    echo Lütfen .env dosyası oluşturun ve tokenınızı ekleyin.
    echo Örnek içerik:
    echo DISCORD_TOKEN=bot_tokeniniz_buraya
    echo PREFIX=!
    pause
)

echo Bot başlatılıyor...
echo.
node index.js

if %errorlevel% neq 0 (
    echo.
    echo HATA: Bot başlatılamadı!
    echo Hata detayları yukarıda görüntülenebilir.
)
echo.
pause