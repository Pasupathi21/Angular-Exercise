import { createReducer, on } from "@ngrx/store";
import { initialMessage, Message } from "./message.state";
import { senderAction, receiverOneAction, receiverTwoAction, chatHistory} from "./message.actions"

let backupMsg: Message[] = [initialMessage]

function historyBackup(args: Message){
    backupMsg = [...backupMsg, args];
}
function validateMessage(data: Message){
    const validateData = Object.assign({},data)
    validateData.message = validateData.message ? validateData.message : 'Empty Message'
    validateData.at = validateData.at ? validateData.at : new Date();
    return validateData
}

export const _messageReducers = createReducer(
    initialMessage,
    on(senderAction, (state, action) => {
        historyBackup(validateMessage(action))
        return {
            ...validateMessage(action),
        }
    }),
    on(receiverOneAction, (state, action) => {
        historyBackup(validateMessage(action))
        return {
            ...validateMessage(action),
        }
    }),
    on(receiverTwoAction, (state, action) => {
        historyBackup(validateMessage(action))
        return {
            ...validateMessage(action),
        }
    }),
    on(chatHistory, (state) => {
        return {
            ...state,
            chatLog: backupMsg 
        }
            
    })
);

export function passMessage(messageState: any, messageAction: any){
    return _messageReducers(messageState, messageAction)
}