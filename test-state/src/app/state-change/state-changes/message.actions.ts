import { createAction, props } from "@ngrx/store";
import { Message } from "./message.state"

export const senderAction = createAction(`[Sender Component] actionFromSender`, props<Message>());
export const receiverOneAction = createAction(`[ReceiverOne Component] actionFromReceiverOne`, props<Message>());
export const receiverTwoAction = createAction(`[ReceiverTwo Component] actionFromReceiverTwo`, props<Message>());
export const historyActionFromSender = createAction(`[Sender Component(History)] actionHistoryFromSender`, props<Message | Message[]>());