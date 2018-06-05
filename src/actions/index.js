import axios from "axios";

export const SHOW_MESSAGE = "show_message";
export const HIDE_MESSAGE = "hide_message";



export function showMessage(message) {
  

  return {
    type: SHOW_MESSAGE,
    payload: message
  };
}

export function hideMessage() {
  return {
    type: HIDE_MESSAGE,
  };
}