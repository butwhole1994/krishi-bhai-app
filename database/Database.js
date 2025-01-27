import * as SQLite from "expo-sqlite";

const SQLiteDatabase = SQLite.openDatabaseSync('krishi_bhai.db');

export const initializeDatabase = async () => {
    await SQLiteDatabase.execAsync(`
        CREATE TABLE IF NOT EXISTS TB_MY_CROP
        (
            id INTEGER PRIMARY KEY NOT NULL,
            value TEXT NOT NULL,
            intValue INTEGER
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FARM
        (
            id INTEGER PRIMARY KEY NOT NULL,
            value TEXT NOT NULL,
            intValue INTEGER
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FERTILIZER
        (
            id INTEGER PRIMARY KEY NOT NULL,
            value TEXT NOT NULL,
            intValue INTEGER
        );
    `)
    .then(result => {
        console.log("Database initialized successfully:", result);
    })
    .catch((err) => {
        console.error("Error initializing database:", err);
    });
};

export default SQLiteDatabase;