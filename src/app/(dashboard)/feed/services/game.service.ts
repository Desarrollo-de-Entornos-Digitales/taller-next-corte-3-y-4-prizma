import apiClient from '../../../../lib/axios/client';
import type { Game } from '../../../../types';

export const getGames = async (): Promise<Game[]> => {
    const { data } = await apiClient.get<Game[]>('/games');
    return data;
};

export const getGameById = async (id: number): Promise<Game> => {
    const { data } = await apiClient.get<Game>(`/games/${id}`);
    return data;
};
