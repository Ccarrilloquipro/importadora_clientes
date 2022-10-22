import { END_POINT, HTTP } from "./http";

export const StateService = {

    getStates: () => {
        return HTTP.get<any, any>(`${END_POINT}/estados`);
    },
}