import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import { CHAT_ROUTE, LOGIN_ROUTE } from "./utils/consts";

export const publicRoutes = [{
    path: LOGIN_ROUTE,
    Conponent: Login
}]

export const privateRoutes = [{
    path: CHAT_ROUTE,
    Conponent: Chat
}]