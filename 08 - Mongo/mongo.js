// Mongo - database

// SQL - pre-define a schema of tables before we insert anything.
// MySQL; Postgres; SQLite; Oracle; Microsoft SQL Server

//NO-SQL DATABASES - don't use schema, use many types of no-sql databases, 
// including document, key-value, and graph stores.
// MongoDB; Couch DB; Neo4j; Cassandra; Redis

// Run Mongo in terminal: just type mongo

// db => in terminal is a data base using for default

// show all data bases
// show databases or show dbs // obs: only shows if inside of database has anything

// create:
// use nomeDataBase


// MongoDB CRUD

//Insert
//db.collection.insertOne() - Inserts a single document into a collection.
//db.collection.insertMany() - db.collection.insertMany() inserts multiple documents into a collection.
//db.collection.insert() - db.collection.insert() inserts a single document or multiple documents into a collection.

//ex.: db.dogs.insertOne( {name: "Charlie", age: 3, breed: "corgi", carFriendely: true})
//db.dogs.find() //shows everyrhing is in there
// id is automatically create by Mongo

//db.dogs.insert([{ name:"Wyatt", breed "Golden", age: 14, carFriendely: false }, { name:"Tonya", breed "Chihuahua", age: 17, carFriendely: true }])


// Find

// db.collection.find() - pass a object inside

// ex: db.collection.find({breed: "corgi"})
