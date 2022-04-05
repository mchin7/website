<script lang="ts">
  export let src: string;
  export let alt: string;
  let clazz = "";
  export { clazz as class };
  import { onMount } from "svelte";
  let loaded = false;
  let image: HTMLElement;
  onMount(() => {
    image.onload = () => {
      loaded = true;
    };
  });
</script>

<style>
  img {
    opacity: 0;
    transition: opacity 1200ms ease-out;
  }
  img.loaded {
    opacity: 1;
  }
</style>

<img {src} {alt} class:loaded bind:this={image} class={clazz} />
