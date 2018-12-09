import React from "react";

const SearchBox = ({ searchChange }) => {
    return (
        <React.Fragment>
            <input className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={searchChange}
            />
        </React.Fragment>
    )
}

export default SearchBox;