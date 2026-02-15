// app.js - Main application

// Import task functions
import { addTask, getAllTasks, completeTask } from './task.js';

// 1. Add some tasks
console.log(addTask("Finish JS assignment", "high", "2026-02-10"));
console.log(addTask("Prepare for hackathon", "medium", "2026-02-05"));
console.log(addTask("Read newspaper", "low", "2026-02-01"));

// 2. Display all tasks
console.log("\nAll Tasks:");
console.log(getAllTasks());

// 3. Complete a task (assuming taskId starts from 1)
console.log("\nCompleting Task with ID 2...");
completeTask(2);

// 4. Display all tasks again
console.log("\nTasks After Completion:");
console.log(getAllTasks());