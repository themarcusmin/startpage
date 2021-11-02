<!-- Credits: https://codepen.io/Stockin/pen/XPvpoB -->
<script>
  import FaHackerNews from "svelte-icons/fa/FaHackerNews.svelte";
  import FaGithub from "svelte-icons/fa/FaGithub.svelte";
  import FaGoodreadsG from "svelte-icons/fa/FaGoodreadsG.svelte";
  import FaFacebook from "svelte-icons/fa/FaFacebook.svelte";
  import IoIosMail from "svelte-icons/io/IoIosMail.svelte";
  import FaRedditAlien from "svelte-icons/fa/FaRedditAlien.svelte";
  import FaYoutube from "svelte-icons/fa/FaYoutube.svelte";
  import FaTwitch from "svelte-icons/fa/FaTwitch.svelte";
</script>

<div>
  <ul class="container">
    <li>
      <a href="https://news.ycombinator.com/">
        <div>
          <FaHackerNews />
        </div>
      </a>
    </li>
    <li>
      <a href="https://github.com/">
        <div>
          <FaGithub />
        </div>
      </a>
    </li>

    <li>
      <a href="https://gmail.com/">
        <div>
          <IoIosMail />
        </div>
      </a>
    </li>
    <li>
      <a href="https://goodreads.com/">
        <div>
          <FaGoodreadsG />
        </div>
      </a>
    </li>
    <li>
      <a href="https://reddit.com/">
        <div>
          <FaRedditAlien />
        </div>
      </a>
    </li>
    <li>
      <a href="https://youtube.com/">
        <div>
          <FaYoutube />
        </div>
      </a>
    </li>
    <li>
      <a href="https://twitch.tv/"
        ><div>
          <FaTwitch />
        </div>
      </a>
    </li>
    <li>
      <a href="https://facebook.com/">
        <div>
          <FaFacebook />
        </div>
      </a>
    </li>
  </ul>
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto;
    column-gap: 1em;
    row-gap: 1em;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  ul li {
    list-style: none;
    /* margin: 0 1em; */
    margin: 1em;
  }

  ul li a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4em;
    position: relative;
    width: 1.75em;
    height: 1.75em;
    text-align: center;
    line-height: 60px;
    background: #171515;
    border-radius: 50%;
    font-size: 30px;
    color: #666;
    transition: 0.5s;
    box-sizing: content-box;
  }

  ul li a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #d35400;
    transition: 0.5s;
    transform: scale(0.9);
    z-index: -1;
  }

  ul li a:hover:before {
    transform: scale(1.2);
    box-shadow: 0 0 15px #d35400;
    filter: blur(3px);
  }

  ul li a:hover {
    color: #ffa502;
    box-shadow: 0 0 15px #d35400;
    text-shadow: 0 0 15px #d35400;
  }

  ul li a div {
    width: 1.5em;
    height: 1.5em;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    .container {
      grid-template-columns: auto auto auto;
    }
  }

  @media (min-width: 481px) and (max-width: 1024px) {
    .container {
      grid-template-columns: auto auto auto;
      column-gap: 0;
      row-gap: 0;
    }

    ul li a {
      width: 1.25em;
      height: 1.25em;
    }
  }
</style>
