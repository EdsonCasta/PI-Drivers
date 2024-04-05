import './search.styles.css'

function  SearchBar({ handleChange, handleSubmit }) {

    return (
      <div className="search-box">
        <form onChange={ handleChange } >
          <input placeholder="Drivers by Name"  type='search' />
          <button type='submit' onClick={handleSubmit}>Search</button>
        </form>
      </div>
    );
  };
  
  export default SearchBar;
