# Wagham Test DB
Docker to initialize a test db for all the projects

## Startup commands
docker compose rm -f -s mongodb
export MONGODB_ADMIN_USR=YOUR_ADMIN_USERNAME
export MONGODB_ADMIN_PWD=YOUR_ADMIN_PASSWORD
export MONGO_INITDB_USR=YOUR_DB_USER
export MONGO_INITDB_PWD=YOUR_DBPWD
export MONGODB_PORT=YOUR_MONGO_PORT
docker-compose up --build -d mongodb
