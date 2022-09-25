db.createUser({
    user: process.env.MONGO_INITDB_ACCESS_USR,
    pwd: process.env.MONGO_INITDB_ACCESS_PWD,
    roles: [
        {
            role: 'readWrite',
            db: 'testDB'
        },
        {
          role: 'dbAdmin',
          db: 'admConfig'
	}
    ],
});

confDb = new Mongo().getDB("admConfig");

confDb.createCollection("credentials", { capped: false });

confDb.credentials.insert([
  {
    "_id": "248803b5-5880-4e76-b805-4437adbee208",
    "username": process.env.MONGO_INITDB_ACCESS_USR,
    "password": process.env.MONGO_INITDB_ACCESS_PWD,
    "database": "testDB",
    "ip": process.env.MONGODB_IP,
    "port": NumberInt(process.env.MONGODB_PORT)
  }
])

db = new Mongo().getDB("testDB");

db.createCollection('characters', { capped: false });
db.createCollection('items', { capped: false });

db.characters.insert([
    {
        "_id": "Wilhelm Thormar",
        "player": "617",
        "race": "Human",
        "territory": "Gran Ducato di Vatakia",
        "class": "Paladin",
        "age": 45,
        "status": "active",
        "masterMS": 3,
        "sessionMS": 52.8,
        "PBCMS": 2,
        "errataMS": 0,
        "errata": [],
        "created": new Date("2022-05-31T00:00:00.000+00:00"),
        "lastPlayed": new Date("2022-09-11T00:00:00.000+00:00"),
        "lastMastered": new Date("2022-09-06T00:00:00.000+00:00"),
        "reputation": {
            "Amueron": 0,
            "Califfato di Sratjiss": 0,
            "Città-Stato di Ornwelun": -1,
            "Dumalia": -4,
            "Fanendeluial": 1,
            "Fo'Khar": 0,
            "Gnomerion": 0,
            "Gran Ducato di Vatakia": 4,
            "Impero di Arcotia": 0,
            "Japachi": 0,
            "Krezanith": -3,
            "Kusia": -1,
            "La Fortezza": -2,
            "Oligarchia di Intibhir": -2,
            "Protettorato di Inveriw": 0,
            "Rukûdan": -2,
            "Tribù dei Verdi Pascoli": -2,
            "Sorellanza delle Amazzoni": -2,
            "Bolgar's Marsh": -1,
            "Sanguine's Slough": -2,
            "Montagne di Smeg": -1,
            "Savana di Heba": -3,
            "Terre di Drelluma": -2,
            "Tiefling del Corno del Demone": 2,
            "Tiefling della Lingua del Demone": -4,
            "Vapua, Kiunur e Hirmaa": -1,
            "Lingwenor": -2
        },
        "inventory": {
            "Quarterstaff": 1,
            "Backpack": 1,
            "Candle": 10,
            "Clothes - common": 1,
            "Ration": 2,
            "Holy Symbol": 1,
            "Mess Kit": 1,
            "Lantern": 1,
            "Oil (flask)": 2,
            "Rope (50 feet)": 1,
            "Gauntlets of Ogre Power": 1,
            "Plate of Gleaming (Metal)": 1,
            "1DayT2Badge": 788,
            "Cloak of Protection": 1,
            "Scale Mail": 1,
            "Goggles of Night": 1,
            "Shield +1 (Wood)": 1
        },
        "money": 645,
        "proficiencies": [
        "Carpenter's tools",
        "Leatherworker's tools",
        "Tinker's tools"
        ],
        "languages": [
        "Abyssal",
        "Common"
        ],
        "buildings": {
        "Officina T2": [
            {
            "name": "Scuola di Pulizia",
            "description": "Venite a imparare le migliori tecniche di pulizia Vatakiane per liberarvi dallo sporco e dal malocchio",
            "zone": "Wagham - Zona Borghese",
            "status": "active"
            }
        ]
        }
    }
]);

db.characters.insert([
  {
      "_id": "Retired",
      "player": "test_retired",
      "race": "Human",
      "territory": "Gran Ducato di Vatakia",
      "class": "Paladin",
      "age": 45,
      "status": "retired",
      "masterMS": 3,
      "sessionMS": 52.8,
      "PBCMS": 2,
      "errataMS": 0,
      "errata": [],
      "created": new Date("2022-05-31T00:00:00.000+00:00"),
      "lastPlayed": new Date("2022-09-11T00:00:00.000+00:00"),
      "lastMastered": new Date("2022-09-06T00:00:00.000+00:00"),
      "reputation": {},
      "inventory": {},
      "money": 645,
      "proficiencies": [],
      "languages": [],
      "buildings": {}
  }
]);

db.characters.insert([
  {
      "_id": "Dead",
      "player": "test_dead",
      "race": "Human",
      "territory": "Gran Ducato di Vatakia",
      "class": "Paladin",
      "age": 45,
      "status": "dead",
      "masterMS": 3,
      "sessionMS": 52.8,
      "PBCMS": 2,
      "errataMS": 0,
      "errata": [],
      "created": new Date("2022-05-31T00:00:00.000+00:00"),
      "lastPlayed": new Date("2022-09-11T00:00:00.000+00:00"),
      "lastMastered": new Date("2022-09-06T00:00:00.000+00:00"),
      "reputation": {},
      "inventory": {},
      "money": 645,
      "proficiencies": [],
      "languages": [],
      "buildings": {}
  }
]);

db.characters.insert([
  {
      "_id": "NPC",
      "player": "test_npc",
      "race": "Human",
      "territory": "Gran Ducato di Vatakia",
      "class": "Paladin",
      "age": 45,
      "status": "npc",
      "masterMS": 3,
      "sessionMS": 52.8,
      "PBCMS": 2,
      "errataMS": 0,
      "errata": [],
      "created": new Date("2022-05-31T00:00:00.000+00:00"),
      "lastPlayed": new Date("2022-09-11T00:00:00.000+00:00"),
      "lastMastered": new Date("2022-09-06T00:00:00.000+00:00"),
      "reputation": {},
      "inventory": {},
      "money": 645,
      "proficiencies": [],
      "languages": [],
      "buildings": {}
  }
]);

db.characters.insert([
  {
      "_id": "TRAITOR",
      "player": "test_traitor",
      "race": "Human",
      "territory": "Gran Ducato di Vatakia",
      "class": "Paladin",
      "age": 45,
      "status": "traitor",
      "masterMS": 3,
      "sessionMS": 52.8,
      "PBCMS": 2,
      "errataMS": 0,
      "errata": [],
      "created": new Date("2022-05-31T00:00:00.000+00:00"),
      "lastPlayed": new Date("2022-09-11T00:00:00.000+00:00"),
      "lastMastered": new Date("2022-09-06T00:00:00.000+00:00"),
      "reputation": {},
      "inventory": {},
      "money": 645,
      "proficiencies": [],
      "languages": [],
      "buildings": {}
  }
]);

db.items.insert([
    {
        "_id": "Leg of Kusia's Woods Antelope",
        "sell_price": 500,
        "sell_proficiencies": [],
        "buy_price": 0,
        "is_usable": true,
        "link": "https://ilregnodiwagham.it/it/carne-di-cervo-dei-boschi-di-kusia/ ",
        "category": "Food recipes",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 1,
        "craft": {
          "craft_mo_cost": 1000,
          "tier": "T3",
          "craft_tools": [
            "Cook's and Brewer's tools"
          ],
          "craft_tbadge": 93,
          "craft_time": 0,
          "craft_total_cost": 1558,
          "craft_min_qty": 1,
          "craft_max_qty": 100,
          "craft_ingredients": {}
        }
      },{
        "_id": "Gauntlets of Flaming Fury",
        "sell_price": 1500,
        "sell_proficiencies": [],
        "buy_price": 0,
        "is_usable": false,
        "link": "https://5e.tools/items.html#gauntlets%20of%20flaming%20fury_bgdia",
        "category": "Rare Magic Item (T3)",
        "manual": "BGDIA",
        "attunement": true,
        "give_ratio": 1,
        "craft": {
          "craft_mo_cost": 3000,
          "tier": "T3",
          "craft_tools": [
            "Leatherworker's tools"
          ],
          "craft_tbadge": 280,
          "craft_time": 0,
          "craft_total_cost": 4680,
          "craft_min_qty": 1,
          "craft_max_qty": 100,
          "craft_ingredients": {}
        }
      },{
        "_id": "Obsidian Flint Dragon Plate",
        "sell_price": 0,
        "sell_proficiencies": [],
        "buy_price": 0,
        "is_usable": false,
        "link": "https://5e.tools/items.html#obsidian%20flint%20dragon%20plate_bgdia",
        "category": "Legendary Magic Item (T5)",
        "manual": "BGDIA",
        "attunement": true,
        "give_ratio": -1,
        "craft": {}
      },{
        "_id": "1DayT1Badge",
        "sell_price": 0,
        "sell_proficiencies": [
          "ProficiencyMoneyBadge"
        ],
        "buy_price": 0,
        "is_usable": false,
        "link": "",
        "category": "TBadge",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 0.5,
        "craft": {}
      },{
        "_id": "1DayT2Badge",
        "sell_price": 4,
        "sell_proficiencies": [
          "ProficiencyMoneyBadge"
        ],
        "buy_price": 0,
        "is_usable": false,
        "link": "",
        "category": "TBadge",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 0.5,
        "craft": {}
      },{
        "_id": "1DayT3Badge",
        "sell_price": 6,
        "sell_proficiencies": [
          "ProficiencyMoneyBadge"
        ],
        "buy_price": 0,
        "is_usable": false,
        "link": "",
        "category": "TBadge",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 0.5,
        "craft": {}
      },{
        "_id": "1DayT4Badge",
        "sell_price": 8,
        "sell_proficiencies": [
          "ProficiencyMoneyBadge"
        ],
        "buy_price": 0,
        "is_usable": false,
        "link": "",
        "category": "TBadge",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 0.5,
        "craft": {}
      },{
        "_id": "1DayT5Badge",
        "sell_price": 10,
        "sell_proficiencies": [
          "ProficiencyMoneyBadge"
        ],
        "buy_price": 0,
        "is_usable": false,
        "link": "",
        "category": "TBadge",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 0.5,
        "craft": {}
      },{
        "_id": "Clone (Corpo consumabile)",
        "sell_price": 500,
        "sell_proficiencies": [],
        "buy_price": 1000,
        "is_usable": false,
        "link": "",
        "category": "Craft/Spell Comp.",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 1,
        "craft": {}
      },{
        "_id": "Clone (Sarcofago)",
        "sell_price": 1000,
        "sell_proficiencies": [],
        "buy_price": 2000,
        "is_usable": false,
        "link": "",
        "category": "Craft/Spell Comp.",
        "manual": "ByWagham",
        "attunement": false,
        "give_ratio": 1,
        "craft": {}
      }
]);
