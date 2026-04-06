import axios from 'axios';
import { Note } from '@/types/note';

const BASE_URL = 'https://notehub-public.goit.study/api/notes';

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Получить все заметки
export const fetchNotes = async (): Promise<Note[]> => {
  const response = await instance.get('/');
  return response.data;
};

// Получить одну заметку по id
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await instance.get(`/${id}`);
  return response.data;
};