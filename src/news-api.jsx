import { useEffect, useState } from "react";

export default function TechCrunchHeadlines() {
    const [items, setItems] = useState([]);
    const [err, setErr] = useState("");

    useEffect(() => {
        const url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=e8bcaa3904bb47c79c417a1bbad1342e";
        fetch(url)
            .then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
            .then(d => setItems(d.articles || []))
            .catch(e => setErr(e.message));
    }, []);

    if (err) return <p>Error: {err}</p>;
    if (!items.length) return <p>Loading…</p>;

    return (
        <div className="main">
            {items.map(a => (

                <div key={a.url}>
                    <div>{a.content}</div>
                    <p>{a.author}</p>
                    <p>{a.description}</p>
                    <a href={a.url} target="_blank" rel="noreferrer">
                     <div>{a.title}</div>
                    </a>
                    <div>{a.publishedAt}</div>

                </div>

            ))}
        </div>
    );
}
