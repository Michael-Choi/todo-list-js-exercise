// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false
  };
  return task;
}

function completeTask(task) {
  task.complete = true;
}

function logTaskState(task) {
  console.log(`${task.title} is complete: ${task.complete}`);
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log(tasks);
console.log("\n");
logTaskState(task1);
