import { createReducer, on } from "@ngrx/store";
import { initialMessage, Message } from "./message.state";
import { senderAction, receiverOneAction, receiverTwoAction, chatHistory} from "./message.actions"

const backupMsg: Message[] = [initialMessage]

function historyBackup(args: Message){
    backupMsg.push(args)
}
export const _messageReducers = createReducer(
    initialMessage,
    on(senderAction, (state, action) => {
        console.log("Action data: ", action)
        console.log("State data: ", state)
        const validateData = Object.assign({},action)
        validateData.message = action.message ? action.message : 'Empty Message'
        validateData.at = action.at ? action.at : new Date();
        historyBackup(validateData)
        return {
            ...validateData,
        }
    }),
    on(receiverOneAction, (action) => {
        action.message = action.message ? action.message : 'Empty Message'
        action.at = action.at ? action.at : new Date();
        historyBackup(action)
        return {
            ...initialMessage,
            messageInfo: action
        }
    }),
    on(receiverTwoAction, (action) => {
        action.message = action.message ? action.message : 'Empty Message'
        action.at = action.at ? action.at : new Date();
        historyBackup(action)
        return {
            ...initialMessage,
            messageInfo: action
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