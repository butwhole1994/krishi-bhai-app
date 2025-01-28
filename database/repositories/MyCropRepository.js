import SQLiteDatabase from "@/database/Database";

export const insertMyCrop  = async (params) => {
    try {
        const result = await SQLiteDatabase.runAsync(`
        //INSERT INTO TB_MY_CROP ()
    `, params);
        console.log("Database initialized successfully:", result);
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};