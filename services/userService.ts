import { END_POINT, HTTP } from "./http";

export const UserService = {

    getList: () => {
        return HTTP.get<any, any>(`${END_POINT}/clientes/total/impor`);
    },
    getClient: (id: number) => {
        return HTTP.get<any, any>(`${END_POINT}/clienteImportaciones/${id}`);
    },
    register: (data: any) => {
        return HTTP.post<any, any>(`${END_POINT}/registrarse`, data);
    },
}