<script>
  import { showModal, tasks } from "./stores/tasks";

  let newTask = "";
  let error = "";

  const handleCloseModal = () => {
    // Clear error
    error = "";
    // Hide modal
    showModal.update(() => false);
  };

  const handleAddTask = () => {
    // Strip white spaces from input
    let trimmedNewTask = newTask.trim();
    // Check if field is missing
    if (trimmedNewTask === "") {
      error = "Missing Input";
      return;
    }
    // Check if task already exists
    if ($tasks.includes(trimmedNewTask)) {
      error = "Task already exists";
      return;
    }
    // Input is error-free
    error = "";
    // Push new task to the array
    $tasks = [...$tasks, newTask];
    // Reset new task value
    newTask = "";
    // Hide modal
    handleCloseModal();
  };

  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      handleAddTask();
    }
  };
</script>

{#if $showModal}
  <div class="modal" id="modal">
    <form class="modal_container" on:submit|preventDefault={handleAddTask}>
      <!-- svelte-ignore a11y-autofocus -->
      <input
        bind:value={newTask}
        on:keypress={onKeyPress}
        placeholder="New Task"
        autocomplete="off"
        autofocus
      />
      <div>
        <button type="button" on:click|preventDefault={handleCloseModal}
          >Cancel</button
        >
        {#if error.length}
          <p>{error}</p>
        {/if}
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
  <div class="modal_overlay" id="modal_overlay" />
{/if}

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    max-width: 100%;
    height: 400px;
    max-height: 100%;
    z-index: 10;
    display: flex;
  }

  .modal_overlay {
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 60%;
  }

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  form input {
    outline: none;
    border: none;
    border-bottom: 3px solid teal;
    background: inherit;
    color: white;
    font-size: xx-large;
  }

  form div {
    display: flex;
    justify-content: space-between;
  }

  form div button {
    width: 25%;
    background: none;
    border: none;
    color: white;
    font-size: large;
  }

  form div p {
    color: red;
    font-style: italic;
  }
</style>
