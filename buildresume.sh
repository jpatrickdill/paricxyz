cd ./resume-react || exit
npm run build

cd ..
cp ./resume-react/build/index.html ./templates/resumereact.html
cp -R ./resume-react/build/static ./static