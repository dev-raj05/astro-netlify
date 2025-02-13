function slugify(text) {
  return text.toString() // Convert to string
  .toLowerCase() // Convert to lowercase
  .trim() // Remove extra spaces
  .replace(/\s+/g, "-") // Replace spaces with hyphens
  .replace(/[^\w-]+/g, "") // Remove special characters
  .replace(/--+/g, "-") // Replace multiple hyphens with a single hyphen
  .replace(/^-+|-+$/g, ""); // Remove leading and trailing hyphens
}
function unSlugify(slug) {
  return slug.toString().replace(/-/g, " ").replace(/\s+/g, " ").trim().replace(/\b\w/g, char => char.toUpperCase());
}

export { slugify as s, unSlugify as u };
