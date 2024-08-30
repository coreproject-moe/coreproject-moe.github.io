<script lang="ts">
    import icons_json from '$lib/icons.json';

    function given_icon_name_return_html_string(
        icon_name: string,
        variant?: string
    ) {
        if (variant)
            return `<${icon_name} variant='${variant}'></${icon_name}>`;
        return `<${icon_name}></${icon_name}>`;
    }
</script>

<div class="pt-[2vw] pl-[2vw]">
    <div class="flex items-center justify-center text-3xl">App icons</div>
    <div class="flex items-center justify-center w-full flex-col gap-10">
        {#each icons_json.sort( (a, b) => a['icon-name'].localeCompare(b['icon-name']) ) as item}
            {@const icon = item['icon-name']}
            {@const variants = item.variants}
            {#if variants}
                {#each variants as it}
                    <div class="flex flex-row items-center align-center gap-4">
                        <div class="size-10">
                            {@html given_icon_name_return_html_string(icon, it)}
                        </div>
                        <code>
                            {given_icon_name_return_html_string(icon, it)}
                        </code>
                    </div>
                {/each}
            {:else}
                <div class="flex flex-row items-center align-center gap-4">
                    <div class="size-10">
                        {@html given_icon_name_return_html_string(icon)}
                    </div>
                    <code>
                        {given_icon_name_return_html_string(icon)}
                    </code>
                </div>
            {/if}
        {/each}
    </div>
</div>
