<script lang="ts">
  import icons_json from "$lib/icons.json";
  import IconDialog from "$lib/components/pages/icons/icon-dialog.svelte";
  import { given_icon_name_return_html_string } from "$lib/functions/icons";

  function open_icon_model(id: string) {
    const el = document.getElementById(id) as HTMLDialogElement;
    el?.showModal();
  }

  function generate_unique_id() {
    return Math.random().toString(16).slice(2);
  }
</script>

<div class="py-20 flex flex-col gap-10">
  <div class="md:px-10 flex flex-col gap-5">
    <p class="text-center text-5xl font-black text-info">
      <span class="text-warning">Core Icons.</span><br />Beautifully crafted.
    </p>
    <p class="text-center text-lg text-acccent/70">
      Fully customizable SVG icons, open-source under the MIT license, and
      created by @coreproject-team.
    </p>
  </div>
  <div class="w-full relative flex items-center">
    <coreproject-shape-globe class="size-5 absolute left-4"
    ></coreproject-shape-globe>
    <input
      placeholder="Search icons..."
      class="w-full bg-neutral border-none outline-none focus:ring-[0.2rem] p-4 pl-12 rounded-xl font-semibold transition"
    />
  </div>
  <div class="grid grid-cols-8 gap-2">
    {#each icons_json.sort( (a, b) => a["icon-name"].localeCompare(b["icon-name"]), ) as item}
      {@const icon = item["icon-name"]}
      {@const variants = item.variants}
      {@const uuid = generate_unique_id()}

      {#if variants}
        {#each variants as it}
          {@const variant_uuid = generate_unique_id()}
          <button
            class="w-full p-5 rounded-xl hover:bg-neutral/50 cursor-pointer transition-colors"
            onclick={() => open_icon_model(variant_uuid)}
          >
            {@html given_icon_name_return_html_string({
              icon_name: icon,
              classname: "text-accent",
              variant: it,
            })}
          </button>
          <IconDialog uuid={variant_uuid} {icon} variant={it} />
        {/each}
      {:else}
        <button
          class="w-full p-5 rounded-xl hover:bg-neutral/50 cursor-pointer transition-colors"
          onclick={() => open_icon_model(uuid)}
        >
          {@html given_icon_name_return_html_string({
            icon_name: icon,
            classname: "text-accent",
          })}
        </button>
        <IconDialog {uuid} {icon} />
      {/if}
    {/each}
  </div>
</div>
