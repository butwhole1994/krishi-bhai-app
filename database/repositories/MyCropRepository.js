import SQLiteDatabase from "@/database/Database";

export const insertMyCrop  = async () => {
    try {
        const result = await SQLiteDatabase.runAsync(`
        //INSERT INTO TB_MY_CROP ()
    `);
        console.log("Database initialized successfully:", result);
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};