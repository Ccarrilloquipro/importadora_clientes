
export const LocalStorageService = {

    clear: () => {
        localStorage.clear();
    },
    save: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key: string) => {
        const value = localStorage.getItem(key);

        if(!value) return null;

        try {
            return JSON.parse(value)
        } catch (error) {
            return null;
        }
    },
}