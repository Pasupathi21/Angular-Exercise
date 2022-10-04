import { createSelector, createFeatureSelector } from "@ngrx/store";
import { Message, MessageHistory} from "./message.state";

const messageState = createFeatureSelector<MessageHistory>('messageInfo');

export const messageHistory = createSelector(messageState, (state) => {
    return state.chatLog
})