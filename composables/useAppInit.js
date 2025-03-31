import { useEffect, useState } from "react";
import { initApp } from "@/services/appServices";
import { selectAppInfo } from "@/database/repositories/CommonRepository";

export function useAppInit() {
    const [isLoading, setIsLoading] = useState(true);
    const [isFirstLaunch, setIsFirstLaunch] = useState(false);

    useEffect(() => {
        let mounted = true;

        const run = async () => {
            try {
                await initApp();

                const appInfo = await selectAppInfo();
                const firstLaunchValue = appInfo[0]?.is_first_launch;

                if (mounted) {
                    setIsFirstLaunch(firstLaunchValue === 1);
                }
            } catch (e) {
                console.error("❌ 앱 초기화 실패:", e);
            } finally {
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };

        run();
        return () => {
            mounted = false;
        };
    }, []);

    return { isLoading, isFirstLaunch };
}
