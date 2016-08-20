export class Video{
    id:number;
    title:string;
    key:string;

    constructor(id:number, title:string, key:string){
        this.id = id;
        this.key = key;
        this.title = title;
    }
}
