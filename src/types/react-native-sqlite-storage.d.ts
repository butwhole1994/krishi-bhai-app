declare module 'react-native-sqlite-storage' {
    interface SQLiteDatabase {
        transaction(
            callback: (tx: SQLiteTransaction) => void,
            errorCallback?: (error: any) => void,
            successCallback?: () => void
        ): void;

        executeSql(
            sqlStatement: string,
            args?: any[],
            successCallback?: (tx: SQLiteTransaction, result: SQLiteResultSet) => void,
            errorCallback?: (error: any) => void
        ): void;

        close(callback?: () => void, errorCallback?: (error: any) => void): void;
    }

    interface SQLiteTransaction {
        executeSql(
            sqlStatement: string,
            args?: any[],
            successCallback?: (tx: SQLiteTransaction, result: SQLiteResultSet) => void,
            errorCallback?: (error: any) => void
        ): void;
    }

    interface SQLiteResultSet {
        rows: {
            length: number;
            item(index: number): any;
        };
        rowsAffected: number;
        insertId?: number;
    }

    function openDatabase(
        params: {
            name: string;
            location: string;
            [key: string]: any;
        },
        successCallback?: () => void,
        errorCallback?: (error: any) => void
    ): SQLiteDatabase;

    export { openDatabase };
}
