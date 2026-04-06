'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import Link from 'next/link';

export default function NotesClient() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
  });

  if (isLoading) return <p>Loading, please wait...</p>;

  if (error) return <p>Something went wrong.</p>;

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {data?.map(note => (
         <li key={note.id}>
  {note.title} — <Link href={`/notes/${note.id}`}>View details</Link>
</li>
        ))}
      </ul>
    </div>
  );
}