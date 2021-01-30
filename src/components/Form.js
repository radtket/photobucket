import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IconSearch from "./Icons/IconSearch";

const Form = () => {
  const history = useHistory();
  const [searchEntry, setSearchEntry] = useState("");

  return (
    <form
      className="search-form"
      onSubmit={(e) => {
        e.preventDefault();
        e.currentTarget.reset();
        history.push(`/search/${searchEntry}`);
      }}
    >
      <input
        name="search"
        onChange={(e) => {
          setSearchEntry(e.target.value);
        }}
        placeholder="Search..."
        type="text"
        value={searchEntry}
      />
      <button
        className={`search-button ${searchEntry.trim() ? "active" : null}`}
        disabled={!searchEntry.trim()}
        type="submit"
      >
        <IconSearch />
      </button>
    </form>
  );
};

export default Form;
