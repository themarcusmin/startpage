<script>
  import TaskManager from "./TaskManager.svelte";
  import Artwork from "./Artwork.svelte";
  import DateTime from "./DateTime.svelte";
  import Google from "./Google.svelte";
  import Icons from "./Icons.svelte";
  import Modal from "./Modal.svelte";
</script>

<main>
  <TaskManager />
  <div class="left_panel">
    <Artwork />
  </div>
  <div class="right_panel">
    <div class="right_panel_child">
      <DateTime />
      <Google />
      <Icons />
    </div>
  </div>
  <Modal />
</main>

<style>
  :global(:root) {
    --neon-text-color: #ff944d;
  }

  main {
    background-color: #252525;
    text-align: center;
    padding: 6em 10em;
    height: 100%;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .left_panel {
    width: 30vw;
    height: 100%;
    display: flex;
  }

  .right_panel {
    width: 70vw;
    height: 100%;
    display: flex;
  }

  .right_panel_child {
    padding: 1em 3em;
    margin: auto;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    main {
      padding: 0;
    }

    .left_panel {
      width: 0vw;
      display: none;
    }

    .right_panel {
      width: 100vw;
    }

    .right_panel_child {
      width: 100%;
      padding: 0em 1em;
    }
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    main {
      padding: 3em 2em;
    }

    .right_panel_child {
      padding: 1em;
    }

    .left_panel {
      width: 45vw;
    }

    .right_panel {
      width: 55vw;
    }
  }

  @media screen and (max-height: 700px) {
    main {
      height: auto;
    }
  }
</style>
