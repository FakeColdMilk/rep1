'use client';

import React, { useEffect, useState } from 'react';

export default function GameList(): JSX.Element {
  const [games, setGames] = useState<string[]>(['Chess', 'Tetris', 'Monopoly']);
  const [input, setInput] = useState('');
  const [sortAsc, setSortAsc] = useState(true);
  const [favorite, setFavorite] = useState<string | null>(null);

 
  useEffect(() => {
    try {
      const rawGames = localStorage.getItem('games');
      const rawFav = localStorage.getItem('favoriteGame');
      if (rawGames) {
        const parsed = JSON.parse(rawGames);
        if (Array.isArray(parsed)) setGames(parsed);
      }
      if (rawFav) {
        setFavorite(JSON.parse(rawFav));
      }
     
    } catch (err) {
      console.error('Failed reading localStorage in GameList:', err);
    }
  }, []);

 
  useEffect(() => {
    try {
      localStorage.setItem('games', JSON.stringify(games));
    } catch (err) {
      console.error('Failed saving games to localStorage:', err);
    }
  }, [games]);

  
  useEffect(() => {
    try {
      localStorage.setItem('favoriteGame', JSON.stringify(favorite));
    } catch (err) {
      console.error('Failed saving favoriteGame to localStorage:', err);
    }
  }, [favorite]);

  function addGame() {
    const name = input.trim();
    if (!name) return;
    // avoid duplicates (optional)
    if (games.includes(name)) {
      setInput('');
      return;
    }
    setGames((prev) => [...prev, name]);
    setInput('');
  }

  function toggleSort() {
    setSortAsc((s) => !s);
  }

  const sorted = [...games].sort((a, b) => (sortAsc ? a.localeCompare(b) : b.localeCompare(a)));

  return (
    <div style={{ border: '1px solid #eee', padding: '1rem', borderRadius: 8 }}>
      <h3>Spel-lista</h3>

      <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.5rem' }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Lägg till ett spel"
          aria-label="Nytt spel"
        />
        <button onClick={addGame}>Lägg till</button>
        <button onClick={toggleSort}>Sortera: {sortAsc ? 'A→Z' : 'Z→A'}</button>
      </div>

      <ul>
        {sorted.map((g, idx) => (
          // use index if game names might duplicate; for unique names you can use the name as key
          <li key={`${g}-${idx}`} style={{ margin: '.25rem 0' }}>
            <span style={{ marginRight: '.5rem' }}>{g}</span>
            <button onClick={() => setFavorite(g)}>Sätt favorit</button>
            {favorite === g ? <strong style={{ marginLeft: '.5rem' }}>★ Favorit</strong> : null}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '.75rem' }}>
        <em>Favoritspel:</em> {favorite ?? 'Ingen vald'}
      </div>
    </div>
  );
}