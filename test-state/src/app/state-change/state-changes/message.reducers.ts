import { createReducer, on } from "@ngrx/store";
import { initialMessage, Message } from "./message.state";
import { senderAction, receiverOneAction, receiverTwoAction} from "./message.actions"

export const _messageReducers = createReducer(
    initialMessage,
    on(senderAction, (state, action) => {
        console.log("Action", action)
        const validateData = {...action}
        validateData.message = action.message ? action.message : 'Empty Message'
        validateData.at = action.at ? action.at : new Date();
        return {
            ...validateData,
        }
    }),
    on(receiverOneAction, (action) => {
        action.message = action.message ? action.message : 'Empty Message'
        action.at = action.at ? action.at : new Date();
        return {
            ...initialMessage,
            messageInfo: action
        }
    }),
    on(receiverTwoAction, (action) => {
        action.message = action.message ? action.message : 'Empty Message'
        action.at = action.at ? action.at : new Date();
        return {
            ...initialMessage,
            messageInfo: action
        }
    })
);

export function passMessage(messageState: any, messageAction: any): Message {
    return _messageReducers(messageState, messageAction)
}