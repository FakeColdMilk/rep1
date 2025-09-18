'use client';


import { useState } from 'react';


export default function Counter() {
const [count, setCount] = useState<number>(0);


return (
<div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: 8 }}>
<h3>Räknare</h3>
<p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{count}</p>
<div style={{ display: 'flex', gap: '.5rem' }}>
<button onClick={() => setCount((c) => c - 1)}>-</button>
<button onClick={() => setCount((c) => c + 1)}>+</button>
<button onClick={() => setCount(0)}>Reset</button>
</div>
</div>
);
}