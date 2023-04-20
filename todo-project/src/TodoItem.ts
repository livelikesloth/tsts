class TodoItem {
  constructor(
    public id: number,
    public task: string,
    public complete: boolean = false
  ) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }

  printDetails(): void {
    //return이 존재하지 않을때는 void로 지정해줌
    console.log(
      `${this.id}\t${this.task}\t${this.complete ? "\t(complete)" : ""}`
    );
  }
}

export default TodoItem;
