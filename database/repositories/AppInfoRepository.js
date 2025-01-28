import SQLiteDatabase from "@/database/Database";

export const selectAppInfo  = async () => {
    try {
        const allRows = await SQLiteDatabase.getAllAsync('SELECT * FROM TS_APP_INFO');
        console.log("selectAppInfo success");
        return allRows;
    } catch (err) {
        console.log("selectAppInfo error", err);
        return []; // 에러가 발생한 경우 빈 배열 반환
    }
};