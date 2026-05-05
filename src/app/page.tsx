'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import LoadingSpinner from '../components/LoadingSpinner';

import { useAuth } from '@/context/AuthContext';

export default function Home() {
    const { isAuthenticated, isLoading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated) {
                router.push('/feed');
            } else {
                router.push('/login');
            }
        }
    }, [isAuthenticated, isLoading, router]);

    return <LoadingSpinner />;
}
