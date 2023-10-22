export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export function formatDate(dateString: string, lang = "eng") {
  const date = new Date(dateString);
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" } as const;
  
  return lang === "eng"
    ? date.toLocaleDateString("en-GB", options)
    : date.toLocaleDateString("pl-PL", options);
}
