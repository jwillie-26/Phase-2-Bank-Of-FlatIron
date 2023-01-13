import React,{useState} from "react";

function Search({onSearch}) {
  const[search,setSearch] = useState("");
 function handleSearch(e){
  setSearch(e.target.value)
  onSearch(search)
 }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={search}
        onChange={handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
