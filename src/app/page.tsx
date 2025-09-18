import Card from '../../components/Card';


type Post = {
userId: number;
id: number;
title: string;
body: string;
};


export default async function Page() {
const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', { next: { revalidate: 60 } });
if (!res.ok) throw new Error('Failed to fetch posts');
const posts: Post[] = await res.json();


return (
<section>
<h1>Välkommen</h1>
<p>Här visas 3 inlägg från jsonplaceholder.typicode.com</p>


<div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
{posts.map((post) => (
<Card key={post.id} title={post.title} description={post.body} />
))}
</div>
</section>
);
}