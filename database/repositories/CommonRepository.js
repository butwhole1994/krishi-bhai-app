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

export const selectCodeByCodeGroupId  = async (code_group_id) => {
    try {
        const allRows = await SQLiteDatabase.getAllAsync(
            'SELECT * FROM TS_CODE WHERE code_group_id = $code_group_id;'
            , {$code_group_id: code_group_id}
        );
        console.log("selectAppInfo success");
        return allRows;
    } catch (err) {
        console.log("selectAppInfo error", err);
        return []; // 에러가 발생한 경우 빈 배열 반환
    }
};