<script lang="ts">
  const {
    icon,
    type,
    uuid,
    variant,
  }: {
    icon: string;
    type: string;
    uuid: string;
    variant?: string;
  } = $props();

  import { given_icon_name_return_html_string } from '$lib/functions/icons';
</script>

<dialog id={uuid} class="modal backdrop:bg-transparent">
  <div
    class="modal-box max-w-max p-0 absolute bottom-10 bg-secondary h-max"
  >
    <div class="bg-neutral/50 p-3 w-full flex items-center">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <div class="size-5">
            {@html given_icon_name_return_html_string({
              icon_type: type,
              icon_name: icon,
              classname: "text-accent",
              variant,
            })}
          </div>
          <span class="text-accent font-semibold text-lg">
            {icon}
          </span>
          <button
            onclick={(e) => {
            const target = e.target as HTMLButtonElement;
              navigator.clipboard
                .writeText(
                  given_icon_name_return_html_string({
                    icon_type: type,
                    icon_name: icon,
                    classname: "text-accent",
                  }),
                )
                .then(() => {
                  target.innerText = "Copied";
                  setTimeout(() => target.innerText = "Copy", 2000);
                });
            }}
            class="ml-auto btn btn-xs btn-primary">Copy</button
          >
        </div>
        <code class="text-sm bg-secondary/75 rounded-xl p-2">
          {given_icon_name_return_html_string({
            icon_type: type,
            icon_name: icon,
            classname: "text-accent",
            variant,
          })}
        </code>
      </div>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
