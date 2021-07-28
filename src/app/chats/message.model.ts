export default class Message {
    sender: string;
    content: string;

    constructor(content: string, sender: string){
        this.sender = sender;
        this.content = content;
    }
}
