import React from 'react';
import { render } from 'react-dom';

const Demo = () => {
const [count, setCount] = React.useState(0);
return (
<div>
<h1>Count: {count}</h1>
<button onClick={() => setCount(count + 1)}>Increment</button>
</div>
);
};




