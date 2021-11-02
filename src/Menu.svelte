<script>
  import { tasks, showModal } from "./stores/tasks";

  import { fly } from "svelte/transition";
  import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";
  import IoIosArrowBack from "svelte-icons/io/IoIosArrowBack.svelte";
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  let showTasks = false;

  const handleShowTasks = () => {
    showTasks = !showTasks;
  };

  const handleRemove = (task) => {
    $tasks = $tasks.filter((t) => t !== task);
  };

  const showAddTaskModal = () => {
    showModal.update((m) => true);
  };
</script>

<aside>
  <button class="trigger" on:click={handleShowTasks}>
    {#if showTasks}
      <IoIosArrowForward />
    {:else}
      <IoIosArrowBack />
    {/if}
  </button>
  {#if showTasks}
    <li transition:fly={{ x: 250, opacity: 1 }}>
      {#if $tasks.length}
        {#each $tasks as task}
          <button class="task" on:click={() => handleRemove(task)}>
            {task}
          </button>
        {/each}
      {/if}
      <button class="trigger" on:click={showAddTaskModal}>
        <IoIosAdd />
      </button>
    </li>
  {/if}
</aside>

<style>
  aside {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 15vw;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    aside {
      display: none;
    }
  }

  .trigger {
    width: 2.5em;
    height: 2.5em;
    background: inherit;
    color: white;
    border: none;
    border-radius: 50%;
    margin: 0.5em;
    padding: 0.4em;
    transition: 0.5s;
  }

  .trigger:hover {
    background: black;
  }

  .trigger:active {
    transform: scale(0.85);
  }

  li {
    display: block;
    list-style: none;
  }

  li .task:first-child {
    border-top: 0.2px solid #999999;
  }

  li .task {
    word-break: break-all;
    padding: 1em 0.5em;
    border-radius: 1em;
    background: black;
    display: block;
    width: 100%;
    margin: 0;
    color: #bbbbbb;
    outline: none;
    border: none;
    border-left: 0.2px solid #999999;
    border-bottom: 0.2px solid #999999;
  }

  li .task:hover {
    opacity: 0.7;
  }

  li .task:active {
    transform: scale(0.85);
  }
</style>
