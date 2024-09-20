<script>
  import "$lib/css/app.css";
</script>

<div class="container">
  <slot />
</div> 

<style>
  .container {
    width: 1200px;
    margin: 0 auto;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }
</style>
