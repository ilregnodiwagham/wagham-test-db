mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=characters -u $DB_USER -p $DB_PWD -v --file=characters.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=items -u $DB_USER -p $DB_PWD -v --file=items.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=backgrounds -u $DB_USER -p $DB_PWD -v --file=backgrounds.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=feats -u $DB_USER -p $DB_PWD -v --file=feats.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=players -u $DB_USER -p $DB_PWD -v --file=players.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=classes -u $DB_USER -p $DB_PWD -v --file=classes.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=spells -u $DB_USER -p $DB_PWD -v --file=spells.json
mongoimport --host=$MONGO_HOST:$MONGO_PORT --db=testDB --collection=utils -u $DB_USER -p $DB_PWD -v --file=utils.json