/** @jsxImportSource preact */
import { useState, useEffect } from "preact/hooks";
import { sanityClient } from "sanity:client";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  console.log(posts);
  console.log(searchQuery);

  // Fetch posts dynamically when the search query changes
  useEffect(() => {
    async function fetchPosts() {
      if (searchQuery.trim() === "") {
        setPosts([]); // Clear results if query is empty
        return;
      }

      const data = await sanityClient.fetch(
        `*[_type == "post" && 
            (title match $query || tags[] match $query)
          ]{
            title,
            body,
            tags,
            "slug": slug.current
          }`,
        { query: `${searchQuery}` }
      );

      setPosts(data);
    }

    fetchPosts();
  }, [searchQuery]);

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      {/* Search Input */}
      <div className="relative flex gap-7 items-center justify-center">
        <input
          type="text"
          name="q"
          placeholder="Search posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 pl-12 text-lg border border-gray-300 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {/* Search Icon */}
        <svg
          className="absolute left-4 right-3 top-5 w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m2.85-7.65a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <button
          className={
            "bg-blue-400 w-[7rem] rounded-lg h-[3rem] text-white hover:bg-blue-500"
          }
        >
          Search
        </button>
      </div>

      {/* Search Results */}
      <ul className="mt-6 space-y-4">
        {posts.map((post) => (
          <li
            key={post.slug}
            className="p-4 bg-white shadow-md rounded-xl border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Search;
