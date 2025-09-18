export default function Card({ title, description }: { title: string; description: string }) {
return (
<article style={{ border: '1px solid #eee', padding: '1rem', borderRadius: 8 }}>
<h2 style={{ margin: '0 0 .5rem' }}>{title}</h2>
<p style={{ margin: 0 }}>{description}</p>
</article>
);
}