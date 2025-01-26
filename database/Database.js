import {
    openDatabaseAsync,
    deleteDatabaseAsync,
} from 'expo-sqlite';

/**
 * 데이터베이스 연결 초기화
 * @returns {Promise<SQLiteDatabase>}
 */
export const initializeDatabase = async () => {
    try {
        const db = await openDatabaseAsync('app.db', { createFromLocation: 1 });
        console.log('Database initialized successfully');
        return db;
    } catch (error) {
        console.error('Error initializing database:', error);
        throw error;
    }
};

/**
 * 데이터베이스 삭제
 * @returns {Promise<void>}
 */
export const deleteDatabase = async () => {
    try {
        await deleteDatabaseAsync('app.db');
        console.log('Database deleted successfully');
    } catch (error) {
        console.error('Error deleting database:', error);
        throw error;
    }
};

/**
 * SQL 쿼리 실행
 * @param {SQLiteDatabase} db - 데이터베이스 연결 객체
 * @param {string} query - 실행할 SQL 쿼리
 * @param {Array} params - 쿼리에 전달할 파라미터
 * @returns {Promise<any[]>} - 결과 데이터
 */
export const executeQuery = async (db, query, params = []) => {
    try {
        const result = await db.getAllAsync(query, params);
        return result;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

/**
 * 트랜잭션 내에서 SQL 실행
 * @param {SQLiteDatabase} db - 데이터베이스 연결 객체
 * @param {Function} task - 트랜잭션 내에서 실행할 함수
 * @returns {Promise<void>}
 */
export const withTransaction = async (db, task) => {
    try {
        await db.withTransactionAsync(task);
        console.log('Transaction executed successfully');
    } catch (error) {
        console.error('Error in transaction:', error);
        throw error;
    }
};
