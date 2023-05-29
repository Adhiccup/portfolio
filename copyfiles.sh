pwd
# cd G:/
cd  G:/
mkdir public
cp G:/index.html G:/public/
cp G:/manifest.json G:/public/
cp G:/serviceWorker.js G:/public/
cp G:/404.html G:/public/
cd  G:/public/
mkdir assets
cp -r G:/assets/* G:/public/assets
# cp ../index.html ../public/