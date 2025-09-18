import Card from '../../components/Card';
import Counter from '../../components/Counter';
import GameList from '../../components/GameList';


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



<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
<div>
<Counter />
<div style={{ height: '1rem' }} />
<GameList />
</div>


<div>
<h2>Senaste inlägg</h2>
<div style={{ display: 'grid', gap: '1rem', marginTop: '1rem' }}>
{posts.map((post) => (
<Card key={post.id} title={post.title} description={post.body} />
))}
</div>
</div>
</div>
</section>
);
}