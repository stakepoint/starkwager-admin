import React from 'react'
import Image from 'next/image'
import { Copy } from 'lucide-react'
interface CardParticipantsProps {
    avatarSrc: string;
    username: string;
    walletAddress: string;
    wagersCreated: number;
    wagersJoined: number;
}
const CardParticipants: React.FC<CardParticipantsProps> = ({
    avatarSrc,
    username,
    walletAddress,
    wagersCreated,
    wagersJoined
}) => {
    return (
        <div className='w-[253] h-[211px] rounded-[16px] p-4 bg-[#FFFFFF] flex flex-col gap-2'>
            
            <Image width={56} height={56} src={avatarSrc} className='rounded-[12px]' alt="avatar_img" />
            <p>Username: <span>@{username}</span></p>
            <p className='flex gap-1'>
                Wallet Address:
                <span id="wallet-address">{walletAddress}</span>
                <Copy
                    width={14}
                    onClick={() => {
                        const walletAddress = document.getElementById('wallet-address')?.textContent;
                        if (walletAddress) {
                            navigator.clipboard.writeText(walletAddress);
                            alert('Wallet address copied to clipboard!');
                        }
                    }}
                    className='cursor-pointer'
                />
            </p>
            <p>Wagers Created: <span>{wagersCreated}</span></p>
            <p>Wagers Joined: <span>{wagersJoined}</span></p>
        </div>
    )
}

export default CardParticipants