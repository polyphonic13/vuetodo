
export default class RecordMeta<T> {
    isEditing: boolen = false; 
    isNew: boolean = false; 

    constructor(public item T) {}
}