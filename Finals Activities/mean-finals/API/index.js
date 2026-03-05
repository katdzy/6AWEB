// This file is saved inside the 'api' folder.

const express = require("express");
const { MongoClient } = require("mongodb");
const dns = require("dns");
const cors = require("cors");
const multer = require("multer");

const app = express();
app.use(cors());

const CONNECTION_STRING ="mongodb://localhost:27017";

const DATABASENAME = "MyDb";
let database;

// Middleware instantiation
app.use((req, res, next) => {
  if (!database) {
    return res.status(503).json({ error: "Database not connected yet." });
  }
  next();
});

console.log("Starting API...");
console.log("Connecting to MongoDB...");

async function start() {
  try {
    // Create client with timeouts so you see errors quickly
    const client = new MongoClient(CONNECTION_STRING, {
      serverSelectionTimeoutMS: 10000, // 10s
      connectTimeoutMS: 10000,
    });

    await client.connect();

    database = client.db(DATABASENAME);
    console.log("Yay! Now connected to Cluster");

    app.listen(5038, () => {
      console.log("Server running on http://localhost:5038");
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
}

start();

// ... (Your existing imports and connection logic remain the same)

// Get all songs
app.get("/api/songs/GetSongs", async (req, res) => {
  const result = await database.collection("Songs").find({}).toArray();
  res.send(result);
});

// Add a song
app.post("/api/songs/AddSong", multer().none(), async (req, res) => {
  const numOfDocs = await database.collection("Songs").countDocuments();
  await database.collection("Songs").insertOne({
    id: String(numOfDocs + 1),
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year
  });
  res.json("Added Successfully");
});

// Update a song
app.put("/api/songs/UpdateSong", multer().none(), async (req, res) => {
  try {
    await database.collection("Songs").updateOne(
      { id: req.body.id },
      { 
        $set: { 
          title: req.body.title, 
          artist: req.body.artist, 
          year: req.body.year 
        } 
      }
    );
    res.json("Updated Successfully");
  } catch (error) {
    res.status(500).json("Update failed");
  }
});

// Delete song
app.delete("/api/songs/DeleteSong", async (req, res) => {
  await database.collection("Songs").deleteOne({ id: req.query.id });
  res.json("Deleted successfully!");
});