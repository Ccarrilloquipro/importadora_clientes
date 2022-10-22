import { END_POINT, HTTP } from "./http";

export const ImportsService = {

    getList: (data: any) => {
        return HTTP.post<any, any>(`${END_POINT}/listaImportaciones`, data);
    },
}