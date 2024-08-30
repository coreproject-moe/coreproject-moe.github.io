<script lang="ts">
    import icons_json from '$lib/icons.json';

    function given_icon_name_return_html_string({
        icon_name,
        classname,
        variant,
    }: {
        icon_name: string;
        classname?: string;
        variant?: string;
    }) {
        if (variant)
            return `<${icon_name} ${classname ? `class=${classname}` : ''} variant='${variant}'></${icon_name}>`;
        return `<${icon_name}${classname ? ` class=${classname}` : ''}></${icon_name}>`;
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
                            {@html given_icon_name_return_html_string({
                                icon_name: icon,
                                classname: 'text-white',
                                variant: it,
                            })}
                        </div>
                        <code>
                            {given_icon_name_return_html_string({
                                icon_name: icon,
                                variant: it,
                            })}
                        </code>
                    </div>
                {/each}
            {:else}
                <div class="flex flex-row items-center align-center gap-4">
                    <div class="size-10">
                        {@html given_icon_name_return_html_string({
                            icon_name: icon,
                            classname: `text-white`,
                        })}
                    </div>
                    <code>
                        {given_icon_name_return_html_string({
                            icon_name: icon,
                        })}
                    </code>
                </div>
            {/if}
        {/each}
    </div>
</div>
