import { END_POINT, HTTP } from "./http";

export const DashboardService = {

    getTotalUsers: () => {
        return HTTP.get<any, any>(`${END_POINT}/miembrosDashboard`);
    },
    getTotalImports: () => {
        return HTTP.get<any, any>(`${END_POINT}/importacionesDashboard`);
    },
}