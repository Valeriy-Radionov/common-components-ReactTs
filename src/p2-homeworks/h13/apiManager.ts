import axios from "axios";

export type PostType = {
    errorText: string;
    info: string;
    yourBody: YourBody;
    yourQuery: YourQuery;
}
export type YourBody = {
    success: boolean;
}
export type YourQuery = {}
export type GetType = {
    error: string;
    method: string;
    url: string;
}
export const apiManage = {
    getData() {
        return axios.get<GetType>("https://neko-cafe-back.herokuapp.com/auth/test")
    },
    addSuccess(success: boolean) {
        return axios.post<PostType>("https://neko-cafe-back.herokuapp.com/auth/test", {success})
    }
}