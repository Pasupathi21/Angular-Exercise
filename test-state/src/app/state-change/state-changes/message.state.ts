export interface Message {
 message:string;
 from: string;
 at?: Date | string ; 
}

export interface MessageHistory {
    chatLog: Message[]
}

export const initialMessage: Message = {
    message: 'Hello World',
    from : 'Sender',
    at: new Date()
}