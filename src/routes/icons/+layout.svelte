<script lang="ts">
  import { base } from "$app/paths";
</script>

<div class="relative flex h-dvh w-full flex-col bg-secondary overflow-y-scroll">
  <header
    class="sticky top-0 z-10 bg-secondary/90 backdrop-blur flex items-center justify-between md:h-16 md:px-3 container"
  >
    <a href="{base}/icons">
      <coreproject-shape-logo class="w-9 md:w-[2.25vw] md:pt-[0.75vw]">
      </coreproject-shape-logo>
    </a>
    <nav class="flex items-center gap-5">
      <a href="{base}/icons" class="text-accent">Icons</a>
      <a href="{base}/icons/usage">Usage</a>
      <a href="https://github.com/coreproject-moe/monorepo">
        <coreproject-logo-github class="size-5"> </coreproject-logo-github>
      </a>
    </nav>
  </header>
  <div class="flex flex-1 justify-center">
    <div class="max-w-xl">
      <slot />
    </div>
  </div>
</div>
