import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [{
    path: LOGIN_ROUTE,
    Conponent: login
}]

export const privateRoutes = [{
    path: CHAT_ROUTE,
    Conponent: chat
}]