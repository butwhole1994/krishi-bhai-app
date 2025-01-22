import SQLite from 'react-native-sqlite-storage';

class Database {
    static instance = null;

    constructor() {
        this.db = SQLite.openDatabase(
            { name: 'app.db', location: 'default' },
            () => console.log('Database opened successfully'),
            (error) => console.error('Database opening error:', error)
        );
    }

    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    executeSql(query, params = []) {
        return new Promise((resolve, reject) => {
            this.db.transaction((tx) => {
                tx.executeSql(
                    query,
                    params,
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                );
            });
        });
    }
}

export default Database.getInstance();
