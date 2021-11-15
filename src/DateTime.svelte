<script>
  import { onMount } from "svelte";

  let time = new Date();
  let hours_24 = time.getHours();

  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  $: date = time.toLocaleDateString("en-US", options);

  $: hours_12 = hours_24 % 12 || 12;
  $: minutes = ("0" + time.getMinutes()).slice(-2);
  $: ampm = hours_24 >= 12 ? "PM" : "AM";

  onMount(() => {
    const interval = setInterval(() => {
      time = new Date();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="container">
  <p>{hours_12}: {minutes} {ampm}</p>
  <p>{date}</p>
</div>

<style>
  .container {
    align-self: flex-end;
    font-weight: bold;
  }

  .container p:nth-child(1) {
    font-size: 4em;
  }

  .container p:nth-child(2) {
    font-size: 2em;
  }

  p {
    font-weight: 200;
    color: white;
    color: #999999;
    text-align: right;
    margin: 0.5em 0em;
    /* animation: flicker 5s infinite alternate; */
  }

  @keyframes flicker {
    0%,
    19%,
    21%,
    23%,
    25%,
    54%,
    56%,
    100% {
      text-shadow: -0.2rem -0.2rem 1rem #fff, 0.2rem 0.2rem 1rem #fff,
        0 0 2rem var(--neon-text-color), 0 0 4rem var(--neon-text-color),
        0 0 6rem var(--neon-text-color), 0 0 8rem var(--neon-text-color),
        0 0 10rem var(--neon-text-color);
    }
    20%,
    24%,
    55% {
      text-shadow: none;
      box-shadow: none;
    }
  }
</style>
