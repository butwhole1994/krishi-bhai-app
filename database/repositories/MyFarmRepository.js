import SQLiteDatabase, {convertToSQLiteParams} from "@/database/Database";

export const insertMyFarm = async (data) => {
    try {

        const SQLiteBindParams = convertToSQLiteParams(data);
        console.log(SQLiteBindParams);
        const result = await SQLiteDatabase.runAsync(`
            INSERT INTO TB_MY_FARM (my_farm_name, my_farm_area, my_farm_area_unit, create_dt, update_dt)
            VALUES ($my_farm_name, $my_farm_area, $my_farm_area_unit, datetime('now'), datetime('now'))
            `, SQLiteBindParams
        );
        console.log("Database initialized successfully:", result);
    } catch (error) {
        console.error("Error initializing database:", error);
    }
};