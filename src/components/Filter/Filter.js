

const Filter = ({onSearch, searchName}) => {
    return (
      <>
        <label>
          Find contacts by name
          <input
            name="text"
            type="text"
            value={searchName}
            onChange={onSearch}
          ></input>
        </label>
      </>)
    }

export default Filter;
