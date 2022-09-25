export interface Message {
 message:string | number;
 from: string;
 at?: Date | string ; 
}

export const initialMessage: Message = {
    message: 'Hello World',
    from : 'Sender',
    at: new Date()
}