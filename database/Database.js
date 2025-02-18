import * as SQLite from 'expo-sqlite';
import Constants from 'expo-constants';

const SQLiteDatabase = SQLite.openDatabaseSync('krishi_bhai.db');

const language = 'en';
const is_dark_mode = '0';
const is_use_push = '0';
const current_version = Constants.expoConfig?.version;

export const initializeDatabase = async () => {
    await SQLiteDatabase.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS TS_APP_INFO
        (
            is_first_launch INTEGER,
            language VARCHAR,
            is_dark_mode INTEGER,
            is_use_push INTEGER,
            current_version VARCHAR
        );
        CREATE TABLE IF NOT EXISTS TS_CODE_GROUP
        (
            code_group_id INTEGER PRIMARY KEY NOT NULL,
            code_group_name VARCHAR NOT NULL,
            code_group_desc VARCHAR,
            create_dt TIMESTAMP NOT NULL,
            update_dt TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TS_CODE
        (
            code_id INTEGER PRIMARY KEY NOT NULL,
            code_group_id INTEGER NOT NULL,
            code_name VARCHAR NOT NULL,
            code_desc VARCHAR,
            create_dt TIMESTAMP NOT NULL,
            update_dt TIMESTAMP NOT NULL,
            FOREIGN KEY (code_group_id) REFERENCES TS_CODE_GROUP(code_group_id)
        );
        CREATE TABLE IF NOT EXISTS TB_MY_CROP
        (
            my_crop_id INTEGER PRIMARY KEY NOT NULL,
            my_crop_name VARCHAR NOT NULL,
            my_crop_code VARCHAR NOT NULL,
            my_crop_stat_code VARCHAR,
            my_crop_season_code VARCHAR,
            my_crop_n INTEGER,
            my_crop_p INTEGER,
            my_crop_k INTEGER,
            create_dt TIMESTAMP NOT NULL,
            update_dt TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FARM
        (
            my_farm_id INTEGER PRIMARY KEY NOT NULL,
            my_farm_name VARCHAR NOT NULL,
            my_farm_area INTEGER NOT NULL,
            my_farm_area_unit VARCHAR,
            create_dt TIMESTAMP NOT NULL,
            update_dt TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FERTILIZER
        (
            my_fertilizer_id INTEGER PRIMARY KEY NOT NULL,
            my_fertilizer_name VARCHAR NOT NULL,
            my_fertilizer_n INTEGER,
            my_fertilizer_p INTEGER,
            my_fertilizer_k INTEGER,
            create_dt TIMESTAMP NOT NULL,
            update_dt TIMESTAMP NOT NULL
        );
        INSERT INTO TS_APP_INFO
        (
            language,
            is_dark_mode,
            is_use_push,
            current_version
        )
        SELECT
            '${language}',
            '${is_dark_mode}',
            '${is_use_push}',
            '${current_version}'
        WHERE NOT EXISTS (SELECT * FROM TS_APP_INFO);
        
        WITH new_data AS (
            SELECT 1 AS code_group_id, 
                   'crop_stat_code_group' AS code_group_name,
                   'crop growth status code group' AS code_group_desc,
                   datetime('now', '+5 hours', '30 minutes') AS create_dt,
                   datetime('now', '+5 hours', '30 minutes') AS update_dt
            UNION ALL
            SELECT 2, 'season_code_group', 'season weighted value code group', datetime('now', '+5 hours', '30 minutes'), datetime('now', '+5 hours', '30 minutes')
            UNION ALL
            SELECT 3, 'area_unit_code_group', 'area unit code group', datetime('now', '+5 hours', '30 minutes'), datetime('now', '+5 hours', '30 minutes')
        )
        INSERT INTO TS_CODE_GROUP (
            code_group_id,
            code_group_name,
            code_group_desc,
            create_dt,
            update_dt
        )
        SELECT * FROM new_data
        WHERE NOT EXISTS (SELECT 1 FROM TS_CODE_GROUP);

    `)
    .then(result => {
        console.log('Database initializing success:', result);
    })
    .catch((err) => {
        console.error('Database initializing fail:', err);
    });
};

/*
* SQL 실행을 위해 파라미터 KEY 앞에 $를 붙여주는 함수
* */
export const convertToSQLiteParams = (data) => {
    return Object.fromEntries(
        Object.entries(data).map(([key, value]) => {
            // SQLite에서 허용하는 타입만 반환
            if (typeof value === "string" || typeof value === "number" || typeof value === "boolean" || value instanceof Uint8Array || value === null) {
                return [`$${key}`, value];
            }
            // 허용되지 않는 값은 문자열로 변환 (또는 예외 처리)
            console.warn(`Warning: Invalid SQLite parameter type for key "${key}". Converting to string.`);
            return [`$${key}`, String(value)];
        })
    );
};




export default SQLiteDatabase;