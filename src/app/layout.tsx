import Link from 'next/link';
import './globals.css';
import React from 'react';


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="sv">
<head />
<body>
<header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
<nav>
<Link href="/">Hem</Link> {' | '}
<Link href="/about">Om oss</Link>
</nav>
</header>
<main style={{ padding: '1rem' }}>{children}</main>
</body>
</html>
);
}