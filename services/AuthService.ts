import { END_POINT, HTTP } from "./http";

export const AuthService = {

    login: (data: any) => {
        return HTTP.post<any, any>(`${END_POINT}/login`, data);
    },
}