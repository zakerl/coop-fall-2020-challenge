    let initial_value = 0;
    let first_value =  initial_value;
    let numbers_array = [];
    let popped_array = [];
    let popped_number;
class EventSourcer {
  constructor() {
    this.value = 0;
  }

  add(num) {
    this.value += num;
    numbers_array.push(this.value);
    return this.value;
  }
  subtract(num) {
    this.value-=num;
    numbers_array.push(this.value)
    return this.value;
  }
  undo() {
    if(numbers_array.length === 0){
      return first_value;
    }
    popped_number = numbers_array.pop();
    popped_array.push(popped_number)
    this.value = numbers_array[numbers_array.length - 1];
    return this.value;
  }
  redo() {
    if(popped_array.length === 0){
      this.value = popped_number.toString() + "(nothing to redo)"
      return this.value;
    }
    popped_number = popped_array.pop()
    numbers_array.push(popped_number);
    initial_value = numbers_array[numbers_array.length - 1];
    return numbers_array[numbers_array.length - 1];
  }
  bulk_undo(num) {
    if(numbers_array.length === 0){
      this.value = first_value
      return this.value;
    }
    for(let i = 0; i < num; i++){
      if(numbers_array.length === 0){
        this.value = first_value
        return this.value;
      }
      popped_number = numbers_array.pop();
      popped_array.push(popped_number)
      this.value = numbers_array[numbers_array.length - 1];
    }
    return this.value;
  }
  bulk_redo(num) {
    if(popped_array.length === 0){
      this.value = popped_number.toString() + "(nothing to redo)"
      return this.value;
    }
    for(let i = 0; i < num;i++){
      if(popped_array.length === 0){
        this.value = popped_number.toString() + "(nothing to redo)"
        return this.value;
      }
      popped_number = popped_array.pop()
      numbers_array.push(popped_number);
      this.value = numbers_array[numbers_array.length - 1];
    }
    return this.value;
  }
}


// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
