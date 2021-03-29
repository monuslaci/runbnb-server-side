cd /opt/webserver
rm -rf /opt/webserver/runbnb-api

git clone git@github.com:micskeil/runbnb-server_side.git runbnb-api

cp /opt/webserver/runbnb-env/.env /opt/webserver/runbnb-api/.env

cd /opt/webserver/runbnb-api
npm install
npm start
