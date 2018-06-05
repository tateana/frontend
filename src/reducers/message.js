//import _ from "lodash";
import { SHOW_MESSAGE, HIDE_MESSAGE } from "../actions";

export default function(state = false, action) {
    switch (action.type) {
        case SHOW_MESSAGE:
            return action.payload;
        case HIDE_MESSAGE:
            return false;
        default:
            return state;
    }
}