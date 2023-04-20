import TodoCollection from "./TodoCollection";
import TodoItem from "./TodoItem";
import { data } from "./data";

const sampleTodos : TodoItem[] = data.map(
    (item) => new TodoItem(item.id, item.task, item.complete)
);

const myTodoCollection = new TodoCollection("My Todo List", sampleTodos);

myTodoCollection.addTodo("밥먹기")
myTodoCollection.addTodo("물마시기") 
myTodoCollection.addTodo("커피 마시기") 

myTodoCollection.markComplete(3, true);


console.log(`${myTodoCollection.userName}`);

// console.log("========완료=======");
// myTodoCollection.removeComplete();
console.log("========전체=======");
myTodoCollection.getTodoItems(true).forEach((item)=>item.printDetails());
console.log("========진행=======");
myTodoCollection.getTodoItems(false).forEach((item)=>item.printDetails());
