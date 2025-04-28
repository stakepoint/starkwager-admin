import { Copy, LogOut, X } from 'lucide-react';
import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import avatarOne from "../../../../public/avatar-one.png"
import strkLogo from "../../../../public/strk-logo.png"

const inter = Inter({ subsets: ['latin'] })

const ResolveDisputeModal: React.FC = ({ }) => {

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${inter.className} `}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className='relative bg- rounded-lg w-full h-full overflow-y-auto grid justify-items-end'>
                <div className='w-[582px] rounded-[24px] m-4 p-6 bg-[#EFF1F5] flex flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <p className="font-semibold text-[32px] text-[#101828] ">Dispute Details</p>
                        <X width={24} />
                    </div>
                    <br />
                    <div className='font-[500] text-[16px] leading-[130%] tracking-[-0.02em] flex flex-col gap-4'>
                        <div className='flex gap-2 flex-col'>
                            <p className=" text-[#7D89B0]">Title of your Wager</p>
                            <p>Will Bitcoin Hit $100k Before January 31, 2025?</p>
                        </div>

                        <div className='flex gap-2 flex-col'>
                            <p className=" text-[#7D89B0]">Terms or Wager Description</p>

                            <div className=''>
                                Think Bitcoin is on track to skyrocket past $100k? Here’s your chance to put your prediction to the test! 
                                <br />
                                This wager challenges participants to predict whether Bitcoin will reach or exceed the $100,000 mark by January 31, 2025. 
                                <br />
                                The official price will be determined using CoinMarketCap’s data at 11:59 PM UTC on the deadline date.
                                <br /><br />
                                Participants must stake an equal amount of STRK tokens to join this head-to-head challenge. 
                                <br />
                                If Bitcoin hits or surpasses $100k by the specified date and time, those who wager ‘Yes’ win the wager. 
                                <br />
                                If it falls short, those who wager ‘No’ take the prize.
                                <br /><br />
                                No extensions, no exceptions—this is your chance to back your crypto knowledge with real stakes! 
                                <br />
                                Join now and see if your prediction skills can earn you the ultimate reward in STRK tokens. 
                                <br />
                                Let’s see who’s got what it takes to call the next big crypto move!
                            </div>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-[#7D89B0]'>Participants</p>
                            <div className='grid grid-cols-2 gap-4 text-[14px]'>
                                <div className='w-[253] h-[211px] rounded-[16px] p-4 bg-[#FFFFFF] flex flex-col gap-2'>
                                    <Image width={56} height={56} src={avatarOne} className='rounded-[12px]' alt="avatar_img" />
                                    <p>Username: <span>@noyi24_7</span></p>
                                    <p className='flex gap-1'>
                                        Wallet Address: 
                                        <span id="wallet-address">0x4040...7b</span> 
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
                                    <p>Wagers Created: <span>25</span></p>
                                    <p>Wagers Joined: <span>74</span></p>
                                </div>
                                <div className='w-[253] h-[211px] rounded-[16px] p-4 bg-[#FFFFFF] flex flex-col gap-2'>
                                    <Image width={56} height={56} src={avatarOne} className='rounded-[12px]' alt="avatar_img" />
                                    <p>Username: <span>@noyi24_7</span></p>
                                    <p className='flex gap-1'>
                                        Wallet Address: 
                                        <span id="wallet-address">0x4040...7b</span> 
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
                                    <p>Wagers Created: <span>25</span></p>
                                    <p>Wagers Joined: <span>74</span></p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-[#7D89B0]'>Amount Staked</p>
                            <div className='flex bg-[#FFFFFF] rounded-full p-2 gap-2 w-fit'>
                                <Image width={16} height={16} src={strkLogo} alt="strk logo" />

                                <p>10 Strk</p>
                            </div>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-[#7D89B0]'>Reason for Dispute</p>
                            <p> No proof provided for claim</p>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-[#7D89B0]'>Category</p>
                            <span className='bg-white p-2 w-fit rounded-full'>Crypto</span>
                        </div>
                        <div className='flex gap-2 flex-col'>
                            <p className='text-[#7D89B0]'>Proof</p>
                            <Image width={120} className='rounded-[12px] border' src="" alt="proof images" />
                        </div>

                        <div className='flex flex-row gap-2'>
                            <div className='w-[211px] h-[56px] rounded-[16px] p-3 bg-[#E0FE10] flex items-center justify-center border border-[#DCDFEA]'>Resolve Dispute</div>
                            <div className='w-[211px] h-[56px] rounded-[16px] p-3 flex items-center justify-center border bg-[#F9F9FB] border-[#DCDFEA]'>Request More Info</div>
                            <div className='w-[80px] h-[56px] rounded-[16px] p-3 flex items-center justify-center border bg-[#F9F9FB] border-[#DCDFEA]'>Close</div>
                        </div>
                        <div>
                            <p>Reason for Resolution (Optional) </p>
                            <input type="text" placeholder='Tell them why ?' className='w-full h-[40px] border border-[#D0D5DD] rounded-[8px] p-2 bg-[#F9F9FB]' />
                            <p>0/500</p>
                        </div>
                        <div>
                            <button>Fund Selected Winner</button>
                        </div>
                        <div>
                            <Image src="" alt="" />
                            <p>Important Disclaimer</p>
                            <p>Once you close this wager nobody gets the funds.</p>
                            <div>
                                <button>Cancel</button>
                                <button>Close Wager</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResolveDisputeModal;


