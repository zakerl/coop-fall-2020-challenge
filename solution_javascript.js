
class EventSourcer {
  constructor() {
    this.value = 0;
  }

  add(num) {}
  subtract(num) {}
  undo() {}
  redo() {}
  bulk_undo(num) {}
  bulk_redo(num) {}
}
let initial_value = 0;
let first_value =  initial_value;
let numbers_array = [];
let popped_array = [];
let popped_number;

function add(num){
  initial_value += num;
  numbers_array.push(initial_value);
  return initial_value;
}

function subtract(num){
  initial_value-=num;
  numbers_array.push(initial_value)
  return initial_value;
}

function undo(){
  if(numbers_array.length === 0){
    return first_value;
  }
  popped_number = numbers_array.pop();
  popped_array.push(popped_number)
  initial_value = numbers_array[numbers_array.length - 1];
  return numbers_array[numbers_array.length - 1];
}
function redo(){
  if(popped_array.length === 0){
    let str = popped_number.toString() + "(nothing to redo)"
    return str;
  }
  popped_number = popped_array.pop()
  numbers_array.push(popped_number);
  initial_value = numbers_array[numbers_array.length - 1];
  return numbers_array[numbers_array.length - 1];
}

function bulk_undo(num){
  if(numbers_array.length === 0){
    return first_value;
  }
  for(let i = 0; i < num; i++){
    if(numbers_array.length === 0){
      return first_value;
    }
    popped_number = numbers_array.pop();
    popped_array.push(popped_number)
    initial_value = numbers_array[numbers_array.length - 1];
  }
  return numbers_array[numbers_array.length - 1];
}
function bulk_redo(num){
  if(popped_array.length === 0){
    let str = popped_number.toString() + "(nothing to redo)"
    return str;
  }
  for(let i = 0; i < num;i++){
    if(popped_array.length === 0){
      let str = popped_number.toString() + "(nothing to redo)"
      return str;
    }
    popped_number = popped_array.pop()
    numbers_array.push(popped_number);
    initial_value = numbers_array[numbers_array.length - 1];
  }
  return numbers_array[numbers_array.length - 1];
}


// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
