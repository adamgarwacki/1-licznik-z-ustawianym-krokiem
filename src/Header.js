import React from 'react';

const Header = (props) => {
    console.log(props);
    return (
        <header className="App-header">
            {props.text}
        </header>
    );
}

export default Header;