import React from "react";

function Somefunc() {
    const items = [
        {id: 1, name: 'Item'},
        {id: 2, name: 'Item'},
        {id: 3, name: 'Item'},
        {id: 4, name: 'Item'}
    ];
    const item = items.map((item) => (<li key={item.id}>{item.name}</li>));
    return <div>
        <h1>HW - list with dynamic background</h1>
        <ul>{item}</ul>;
    </div>;
}

export default Somefunc;