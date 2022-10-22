import { END_POINT, HTTP } from "./http";

export const UploadService = {

    upload: async(file: File) => {
        const form = new FormData();
        form.append('archivo', file);
        form.append('directorio', '/');

        const response = await HTTP.post<any, any>(`${END_POINT}/subirAchivo`, form);

        return `${response.directorio}${response.archivoGrabado}`;
    },
}