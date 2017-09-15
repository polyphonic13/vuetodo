
export default class RecordMeta<T> {
    isEditing: boolean = false; 
    isNew: boolean = false; 

    constructor(public item: T) {}
}