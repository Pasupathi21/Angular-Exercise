import { createReducer, on } from "@ngrx/store";
import { initialMessage, Message } from "./message.state";
import { senderAction, receiverOneAction, receiverTwoAction, historyActionFromSender} from "./message.actions"


export function validateData(data: Message){
    console.log("validateData: ", data);
    const validate = {...data};
    validate.message = data.message ? data.message : 'Empty Message'
    validate.at = data.at ? data.at : new Date();
    
    return validate
}

export const _messageReducers = createReducer(
    initialMessage,
    on(senderAction, (state, action) => {
        const data  = validateData(action);
        return {...data}
    }),
    on(receiverOneAction, (state, action) => {
        const data  = validateData(action);
        return {...data}
    }),
    on(receiverTwoAction, (state, action) => {
        const data  = validateData(action);
        return {...data}
    }),
    on(historyActionFromSender, (state, action) => {
        console.log("History data", action);
        return {
            ...action,
            ...state,
            
        }
    })
);

export function passMessage(messageState: any, messageAction: any): Message {
    return _messageReducers(messageState, messageAction)
}