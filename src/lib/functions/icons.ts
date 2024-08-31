export function given_icon_name_return_html_string({
  icon_name,
  classname,
  variant,
}: {
  icon_name: string;
  classname?: string;
  variant?: string;
}) {
  if (variant)
    return `<${icon_name} ${classname ? `class=${classname}` : ""} variant='${variant}'></${icon_name}>`;
  return `<${icon_name}${classname ? ` class=${classname}` : ""}></${icon_name}>`;
}
