<script>
  import { onMount } from "svelte";

  let googleInput;
  onMount(() => {
    googleInput.focus();
  });
</script>

<form action="https://www.google.com/search" method="GET">
  <label for="google_input" class="desktop_label">g ></label>
  <label for="google_input" class="mobile_label">></label>
  <input
    bind:this={googleInput}
    id="google_input"
    required="true"
    type="text"
    name="as_q"
    autocomplete="off"
  />
</form>

<style>
  form {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-gap: 5px;
    font-size: larger;
    color: white;
    align-items: center;
    margin: 1.75em 0;
  }

  label {
    text-align: right;
  }

  /* desktop label as "google >", and mobile label as ">" */
  .desktop_label {
    display: block;
  }

  .mobile_label {
    display: none;
  }

  @media (min-width: 320px) and (max-width: 1024px) {
    form {
      grid-template-columns: 10% 90%;
    }

    .desktop_label {
      display: none;
    }

    .mobile_label {
      display: block;
    }
  }

  input {
    background-color: beige;
    background: inherit;
    border: none;
    outline: none;
    color: white;
    margin: 0;
  }
</style>
