function slugify(text) {
  return text
    .toString() // Convert to string
    .toLowerCase() // Convert to lowercase
    .trim() // Remove extra spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove special characters
    .replace(/--+/g, "-"); // Remove multiple hyphens
}

export { slugify as s };
