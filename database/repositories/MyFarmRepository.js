import SQLiteDatabase, {convertToSQLiteParams} from "@/database/Database";

export const insertMyFarm = async (data) => {
    try {
        const SQLiteBindParams = convertToSQLiteParams(data);

        const result = await SQLiteDatabase.runAsync(`
            INSERT INTO TB_MY_FARM (MY_FARM_NAME, MY_FARM_AREA, MY_FARM_AREA_UNIT) 
            VALUES ($MY_FARM_NAME, $MY_FARM_AREA, $MY_FARM_AREA_UNIT)
            `, SQLiteBindParams
        );
        console.log("Database initialized successfully:", result);
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};