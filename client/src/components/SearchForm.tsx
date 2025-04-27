import React, { useState, FormEvent } from "react";

interface SearchFormProps {
  onSearch: (location: string, query: string) => void;
  isLoading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, isLoading }) => {
  const [location, setLocation] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (location.trim()) {
      onSearch(location.trim(), query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mb-4">
        <label
          htmlFor="location"
          className="block text-gray-700 font-medium mb-2"
        >
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="Enter city name (e.g., London, New York)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="query" className="block text-gray-700 font-medium mb-2">
          Question (optional)
        </label>
        <input
          id="query"
          type="text"
          placeholder="Ask anything about the weather (e.g., Should I bring an umbrella?)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        {isLoading ? "Loading..." : "Get Weather"}
      </button>
    </form>
  );
};

export default SearchForm;
