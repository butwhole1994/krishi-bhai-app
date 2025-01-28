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
            IS_FIRST_LAUNCH INTEGER,
            LANGUAGE VARCHAR,
            IS_DARK_MODE INTEGER,
            IS_USE_PUSH INTEGER,
            CURRENT_VERSION VARCHAR
        );
        CREATE TABLE IF NOT EXISTS TS_CODE_GROUP
        (
            CODE_GROUP_ID INTEGER PRIMARY KEY NOT NULL,
            CODE_GROUP_NAME VARCHAR NOT NULL,
            CODE_GROUP_DESC VARCHAR,
            CREATE_DT TIMESTAMP NOT NULL,
            UPDATE_DT TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TS_CODE
        (
            CODE_ID INTEGER PRIMARY KEY NOT NULL,
            CODE_GROUP_ID INTEGER NOT NULL,
            CODE_NAME VARCHAR NOT NULL,
            CODE_DESC VARCHAR,
            CREATE_DT TIMESTAMP NOT NULL,
            UPDATE_DT TIMESTAMP NOT NULL,
            FOREIGN KEY (CODE_GROUP_ID) REFERENCES TS_CODE_GROUP(CODE_GROUP_ID)
        );
        CREATE TABLE IF NOT EXISTS TB_MY_CROP
        (
            MY_CROP_ID INTEGER PRIMARY KEY NOT NULL,
            MY_CROP_NAME VARCHAR NOT NULL,
            MY_CROP_CODE VARCHAR NOT NULL,
            MY_CROP_STAT_CODE VARCHAR,
            MY_CROP_SEASON_CODE VARCHAR,
            MY_CROP_N INTEGER,
            MY_CROP_P INTEGER,
            MY_CROP_K INTEGER,
            CREATE_DT TIMESTAMP NOT NULL,
            UPDATE_DT TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FARM
        (
            MY_FARM_ID INTEGER PRIMARY KEY NOT NULL,
            MY_FARM_NAME VARCHAR NOT NULL,
            MY_FARM_AREA INTEGER NOT NULL,
            MY_FARM_AREA_UNIT VARCHAR,
            CREATE_DT TIMESTAMP NOT NULL,
            UPDATE_DT TIMESTAMP NOT NULL
        );
        CREATE TABLE IF NOT EXISTS TB_MY_FERTILIZER
        (
            MY_FERTILIZER_ID INTEGER PRIMARY KEY NOT NULL,
            MY_FERTILIZER_NAME VARCHAR NOT NULL,
            MY_FERTILIZER_N INTEGER,
            MY_FERTILIZER_P INTEGER,
            MY_FERTILIZER_K INTEGER,
            CREATE_DT TIMESTAMP NOT NULL,
            UPDATE_DT TIMESTAMP NOT NULL
        );
        INSERT INTO TS_APP_INFO
        (
            LANGUAGE,
            IS_DARK_MODE,
            IS_USE_PUSH,
            CURRENT_VERSION
        )
        SELECT
            '${language}',
            '${is_dark_mode}',
            '${is_use_push}',
            '${current_version}'
        WHERE NOT EXISTS (SELECT * FROM TS_APP_INFO);
    `)
    .then(result => {
        console.log('Database initializing success:', result);
    })
    .catch((err) => {
        console.error('Database initializing fail:', err);
    });
};

export default SQLiteDatabase;