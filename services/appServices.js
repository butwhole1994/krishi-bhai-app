import { initializeDatabase } from "@/database/Database";

export async function initApp() {
    await initializeDatabase();
    // 추후 기타 초기화 추가
}