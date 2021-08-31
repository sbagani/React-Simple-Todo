import React from 'react'

const Header = ({title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>Please add to-do item(s) through the input field</p>
        </div>
    )
}

export default Header
