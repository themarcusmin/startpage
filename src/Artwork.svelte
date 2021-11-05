<script>
  const src = "images/amegakure.jpeg";
</script>

<div>
  <img {src} alt="amegakure statue" />
  <span class="tooltip">
    Credits: Masashi Kishimoto; Recolored by twitter.com/gakkubi
  </span>
</div>

<style>
  div {
    width: 100%;
    margin: auto;
    position: relative;
  }
  img {
    width: 100%;
    margin: auto;
    margin-bottom: 0.5em;
    border-radius: 15px;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
  .tooltip {
    font-size: x-small;
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 0.5em;

    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 50%;
    margin-left: -60px;
  }
  div:hover .tooltip {
    visibility: visible;
  }
</style>
