import { writable } from "svelte/store";

// Retrieve tasks from localStorage
const tasksStartPage = localStorage.getItem("tasksStartPage");

const stored = tasksStartPage === null ? [] : JSON.parse(tasksStartPage);

// Set the stored value or a default empty array
export const tasks = writable(stored);

// Subscribe to the store changes so it updates the localstorage
tasks.subscribe(
  (value) => (localStorage.tasksStartPage = JSON.stringify(value))
);

// Do not show modal initially
export const showModal = writable(false);
