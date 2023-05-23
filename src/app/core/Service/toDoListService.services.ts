import { Injectable } from "@angular/core";
import { ToDoList } from "../model/liste.model";

@Injectable({
    providedIn : 'root'
})

export class toDoListService{
    toDoLists! : ToDoList[]; 

    getAllLists():ToDoList[]{
        return this.toDoLists;
    }

    getListById(listId : number): ToDoList{
        const list = this.toDoLists.find(onelist => onelist.id === listId);
        if (!list){
            throw new Error('liste introuveble');
        }else{
            return list;
        }
    }
}
