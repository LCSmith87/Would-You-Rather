import React from 'react'

const Category = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.children}
        </div>
    )
}

export default Category
