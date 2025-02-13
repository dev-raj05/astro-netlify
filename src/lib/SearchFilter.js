export async function SearchfilterPosts(posts, searchQuery) {
  if (!searchQuery) {
    return posts;
  }

  const query = searchQuery.toLowerCase();

  return posts.filter((post) => {
    // Check if the title includes the query.
    const titleMatch = post.title.toLowerCase().includes(query);

    // If the body is stored as plain text.
    const bodyMatch = post.body && post.body.toLowerCase().includes(query);

    // Check if any of the tags include the query. Adjust if tags are objects.
    const tagsMatch =
      post.tags && post.tags.some((tag) => tag.toLowerCase().includes(query));

    return titleMatch || bodyMatch || tagsMatch;
  });
}
