<script lang="ts">
  import { Navigation } from '@skeletonlabs/skeleton-svelte';
  import IconBox from '@lucide/svelte/icons/box';
</script>

<div class="bottom-nav">
  <div class="card preset-filled-surface-100-860 grid grid-cols-3 gap-1 px-2 py-1 w-[200px]">
    <Navigation.Tile label="" class="text-[10px] p-0 flex flex-col items-center">
      <IconBox class="w-5 h-5" />
    </Navigation.Tile>
    <Navigation.Tile label="" selected class="text-[10px] p-0 flex flex-col items-center">
      <IconBox class="w-5 h-5" />
    </Navigation.Tile>
    <Navigation.Tile label="" href="#" class="text-[10px] p-0 flex flex-col items-center">
      <IconBox class="w-5 h-5" />
    </Navigation.Tile>
  </div>
</div>

<style>
  .bottom-nav {
    position: fixed;
    bottom: 0.6rem;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 9999;
  }

  .bottom-nav .card {
    border-radius: 9999px;
    background: white;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    align-items: center;
  }
</style>
