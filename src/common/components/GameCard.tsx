'use client';

import type { Game } from '@/types';

type GameCardProps = {
    game: Game;
    onClick: (id: number) => void;
};

export default function GameCard({ game, onClick }: GameCardProps) {
    return (
        <div
            onClick={() => onClick(game.id_game)}
            className="cursor-pointer group border border-[#2C2C2C] rounded-[6px] bg-[#121212] hover:border-[#335bff] hover:scale-[1.02] transition-all duration-300 overflow-hidden min-w-[280px] h-80 flex flex-col"
        >
            {/* Imagen superior */}
            <div className="relative flex-1 overflow-hidden bg-[#0A0A0A]">
                {game.cover_url ? (
                    <img
                        src={game.cover_url}
                        alt={game.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center">
                        <span className="text-[#A1A1A1] text-[10px] uppercase tracking-widest">Sin imagen</span>
                    </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
            </div>

            <p className="text-[#A1A1A1] text-xs p-4">Info pendiente</p>
        </div>
    );
}
