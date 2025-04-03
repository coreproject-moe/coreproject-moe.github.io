export function given_icon_name_return_html_string({
  icon_name,
  classname,
  icon_type,
  variant
}: {
  icon_name: string;
  icon_type: string;
  classname?: string;
  variant?: string;
}) {
  if (variant)
    return `<coreicons-${icon_type}-${icon_name}${classname ? ` class="${classname}"` : ""} variant="${variant}"></coreicons-${icon_type}-${icon_name}>`;
  return `<coreicons-${icon_type}-${icon_name}${classname ? ` class="${classname}"` : ""}></coreicons-${icon_type}-${icon_name}>`;
}
