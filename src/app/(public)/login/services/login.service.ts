import apiClient from '../../../../lib/axios/client';
import type { LoginDto, AuthResponse } from '../../../../types';

export const loginUser = async (credentials: LoginDto): Promise<AuthResponse> => {
    const { data } = await apiClient.post<AuthResponse>('/auth/login', credentials);
    return data;
};
