cd /opt/webserver
rm -rf /opt/webserver/runbnb-api

git clone git@github.com:micskeil/runbnb-server_side.git runbnb-api
cd /opt/webserver/runbnb-api
npm install
npm start