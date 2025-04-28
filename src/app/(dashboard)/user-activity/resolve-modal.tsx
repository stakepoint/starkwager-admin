import { Copy, X } from 'lucide-react';
import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import avatarOne from "../../../../public/avatar-one.png"
import strkLogo from "../../../../public/strk-logo.png"

const inter = Inter({ subsets: ['latin'] })
interface Props {
    onClose: () => void;
}

const ResolveDisputeModal: React.FC<Props> = ({ onClose }) => {
    const [section_one, setSectionOne] = React.useState(true);
    const [section_two, setSectionTwo] = React.useState(false);
    const [section_three, setSectionThree] = React.useState(false);

    const ContinueToSectionTwo = () => {
        console.log("button clicked")
        setSectionTwo(true)
        setSectionOne(false)
        setSectionThree(false)
    }

    const ContinueToSectionThree = () => {
        console.log("button clicked")
        setSectionOne(false)
        setSectionTwo(false)
        setSectionThree(true)
    }
    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center ${inter.className} `}>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className='relative bg- rounded-lg w-full h-full overflow-y-auto grid justify-items-end'>
                <div className='w-[582px] rounded-[24px] m-4 p-6 bg-[#EFF1F5] flex flex-col'>
                    <div className='flex items-center justify-between w-full'>
                        <p className="font-semibold text-[32px] text-[#101828] ">Dispute Details</p>
                        <X onClick={() => onClose()} className="cursor-pointer" width={24} />
                    </div>
                    <br />
                    <div className='font-[500] text-[16px] leading-[130%] tracking-[-0.02em] flex flex-col gap-4'>
                        {section_one && (
                            <>
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
                                       {/* where it was before */}
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
                                    <Image width={120} className='rounded-[12px] border' src={avatarOne} alt="proof images" />
                                </div>

                                <div className='flex flex-row gap-2'>
                                    <div onClick={() => ContinueToSectionTwo()} className='w-[211px] h-[56px] rounded-[16px] p-3 bg-[#F9F9FB] hover:bg-[#E0FE10] flex items-center justify-center border border-[#DCDFEA] cursor-pointer'>Resolve Dispute</div>
                                    <div className='w-[211px] h-[56px] rounded-[16px] p-3 flex items-center justify-center border bg-[#F9F9FB] hover:bg-[#E0FE10] border-[#DCDFEA] cursor-pointer'>Request More Info</div>
                                    <div onClick={() => onClose()} className='w-[80px] h-[56px] rounded-[16px] p-3 flex items-center justify-center border bg-[#F9F9FB] hover:bg-[#E0FE10] border-[#DCDFEA] cursor-pointer'>Close</div>
                                </div>
                            </>
                        )}

                        {section_two && (
                            <>
                                <div className='flex gap-2 flex-col'>
                                    <p>Reason for Resolution (Optional) </p>
                                    <input id='tell-them-why' type="text" placeholder='Tell them why ?' className='w-full h-[40px] rounded-[12px] py-6 px-3 bg-[#F9F9FB]' />
                                    <div className="grid justify-items-end w-full">
                                        <p className="text-[#7D89B0] w-fit text-sm">
                                            {`0/500`}
                                            {/* ${document.getElementById('tell-them-why')?.value.length  */}
                                        </p>
                                    </div>
                                </div>
                                <div className='w-full justify-center flex items-center'>
                                    <button onClick={() => ContinueToSectionThree()} className='w-[343px] h-[56px] rounded-[16px] bg-[#E0FE10]'>Fund Selected Winner</button>
                                </div>
                            </>
                        )}

                        {section_three && (
                            <>
                                <div className='w-full justify-center flex flex-col gap-4 items-center'>
                                    <ConfirmDecision />
                                    <p className='font-[600] text-[24px]'>Important Disclaimer</p>
                                    <p className='text-[#4A5578] font-[400] text-[18px] '>Once you close this wager nobody gets the funds.</p>
                                    <div className='flex gap-2 justify-center items-center'>
                                        <button className='bg-[#F9F9FB] py-3 px-6 rounded-[16px]'>Cancel</button>
                                        <button className='bg-[#E0FE10] py-3 px-6 rounded-[16px]'>Close Wager</button>
                                    </div>
                                </div>
                            </>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResolveDisputeModal;


export const ConfirmDecision: React.FC = () => {
    return (
        <svg width="104" height="74" viewBox="0 0 104 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M89.7991 5.8457H9.22704C7.17132 5.8457 5.62913 8.10671 5.80005 10.8708H93.8478C93.6768 8.10671 91.8549 5.8457 89.7991 5.8457Z" fill="#E0FE10" />
            <path d="M6.14712 31.2402C6.05164 31.2402 5.97135 31.162 5.9631 31.0581L4.99873 18.6254C4.99005 18.5164 5.06556 18.421 5.16756 18.4117C5.26304 18.4038 5.35809 18.4834 5.36677 18.5928L6.33114 31.0255C6.33982 31.1345 6.26431 31.2299 6.16231 31.2393C6.1571 31.2397 6.15233 31.2402 6.14712 31.2402Z" fill="#E0FE10" />
            <path d="M6.71703 38.6236C6.62154 38.6236 6.54125 38.5454 6.53301 38.4416L6.24091 34.678C6.23223 34.5691 6.30775 34.4736 6.40974 34.4643C6.5074 34.4508 6.60071 34.5355 6.60896 34.6454L6.90105 38.409C6.90973 38.5179 6.83421 38.6134 6.73222 38.6227C6.72744 38.6231 6.72223 38.6236 6.71703 38.6236Z" fill="#E0FE10" />
            <mask id="path-4-inside-1_35397_8598" fill="white">
                <path d="M95.0365 68.1551H14.6193C12.4834 68.1551 10.601 66.4148 10.4234 64.2758L5.89458 9.74949C5.80773 8.70908 6.13528 7.72796 6.8157 6.98715C7.493 6.24985 8.43554 5.84375 9.46961 5.84375H89.8872C92.0227 5.84375 93.905 7.5844 94.0826 9.72336L98.6119 64.2493C98.6987 65.2897 98.3712 66.2705 97.6908 67.0109C97.0131 67.7486 96.0705 68.1551 95.0365 68.1551ZM9.46961 6.15544C8.52356 6.15544 7.66243 6.52566 7.04471 7.1982C6.4235 7.87386 6.12515 8.77072 6.20422 9.72375L10.7331 64.2497C10.8978 66.2314 12.6411 67.8434 14.6197 67.8434H95.0368C95.9833 67.8434 96.8444 67.4732 97.4625 66.8006C98.0834 66.1246 98.3817 65.2281 98.3026 64.2755L93.7734 9.74949C93.6086 7.76775 91.8657 6.15544 89.8876 6.15544H9.46961Z" />
            </mask>
            <path d="M95.0365 68.1551H14.6193C12.4834 68.1551 10.601 66.4148 10.4234 64.2758L5.89458 9.74949C5.80773 8.70908 6.13528 7.72796 6.8157 6.98715C7.493 6.24985 8.43554 5.84375 9.46961 5.84375H89.8872C92.0227 5.84375 93.905 7.5844 94.0826 9.72336L98.6119 64.2493C98.6987 65.2897 98.3712 66.2705 97.6908 67.0109C97.0131 67.7486 96.0705 68.1551 95.0365 68.1551ZM9.46961 6.15544C8.52356 6.15544 7.66243 6.52566 7.04471 7.1982C6.4235 7.87386 6.12515 8.77072 6.20422 9.72375L10.7331 64.2497C10.8978 66.2314 12.6411 67.8434 14.6197 67.8434H95.0368C95.9833 67.8434 96.8444 67.4732 97.4625 66.8006C98.0834 66.1246 98.3817 65.2281 98.3026 64.2755L93.7734 9.74949C93.6086 7.76775 91.8657 6.15544 89.8876 6.15544H9.46961Z" fill="#E0FE10" />
            <path d="M10.4234 64.2758L10.8851 64.2375L10.8851 64.2375L10.4234 64.2758ZM5.89458 9.74949L6.35628 9.71115L6.35626 9.71095L5.89458 9.74949ZM6.8157 6.98715L6.47452 6.67374L6.47449 6.67376L6.8157 6.98715ZM94.0826 9.72336L93.6209 9.76169V9.76171L94.0826 9.72336ZM98.6119 64.2493L98.1502 64.2877L98.1502 64.2878L98.6119 64.2493ZM97.6908 67.0109L97.3496 66.6974L97.3496 66.6975L97.6908 67.0109ZM7.04471 7.1982L7.38576 7.51176L7.38592 7.51159L7.04471 7.1982ZM6.20422 9.72375L5.74252 9.76205L5.74252 9.7621L6.20422 9.72375ZM10.7331 64.2497L10.2714 64.2881L10.2714 64.2881L10.7331 64.2497ZM97.4625 66.8006L97.8036 67.1141L97.8038 67.114L97.4625 66.8006ZM98.3026 64.2755L98.7643 64.2371V64.2371L98.3026 64.2755ZM93.7734 9.74949L94.2351 9.71114V9.71111L93.7734 9.74949ZM95.0365 67.6918H14.6193V68.6183H95.0365V67.6918ZM14.6193 67.6918C12.7263 67.6918 11.0429 66.1381 10.8851 64.2375L9.96174 64.3142C10.1591 66.6914 12.2405 68.6183 14.6193 68.6183V67.6918ZM10.8851 64.2375L6.35628 9.71115L5.43289 9.78784L9.96174 64.3142L10.8851 64.2375ZM6.35626 9.71095C6.27973 8.79419 6.5676 7.94215 7.1569 7.30054L6.47449 6.67376C5.70296 7.51378 5.33573 8.62397 5.4329 9.78803L6.35626 9.71095ZM7.15688 7.30057C7.74324 6.66227 8.56041 6.30703 9.46961 6.30703V5.38047C8.31067 5.38047 7.24277 5.83744 6.47452 6.67374L7.15688 7.30057ZM9.46961 6.30703H89.8872V5.38047H9.46961V6.30703ZM89.8872 6.30703C91.7797 6.30703 93.4631 7.86096 93.6209 9.76169L94.5443 9.68502C94.3469 7.30784 92.2656 5.38047 89.8872 5.38047V6.30703ZM93.6209 9.76171L98.1502 64.2877L99.0736 64.211L94.5443 9.685L93.6209 9.76171ZM98.1502 64.2878C98.2267 65.2046 97.9389 66.0562 97.3496 66.6974L98.0319 67.3244C98.8035 66.4847 99.1707 65.3749 99.0735 64.2108L98.1502 64.2878ZM97.3496 66.6975C96.7627 67.3363 95.9455 67.6918 95.0365 67.6918V68.6183C96.1956 68.6183 97.2634 68.1609 98.0319 67.3243L97.3496 66.6975ZM9.46961 5.69216C8.3992 5.69216 7.41251 6.11288 6.70351 6.88481L7.38592 7.51159C7.91235 6.93843 8.64793 6.61873 9.46961 6.61873V5.69216ZM6.70367 6.88464C5.99074 7.66006 5.65327 8.68621 5.74252 9.76205L6.66592 9.68545C6.59704 8.85523 6.85626 8.08767 7.38576 7.51176L6.70367 6.88464ZM5.74252 9.7621L10.2714 64.2881L11.1948 64.2114L6.66591 9.6854L5.74252 9.7621ZM10.2714 64.2881C10.4559 66.508 12.3982 68.3066 14.6197 68.3066V67.3801C12.8841 67.3801 11.3397 65.9549 11.1948 64.2113L10.2714 64.2881ZM14.6197 68.3066H95.0368V67.3801H14.6197V68.3066ZM95.0368 68.3066C96.1077 68.3066 97.0943 67.8859 97.8036 67.1141L97.1214 66.4871C96.5946 67.0604 95.8589 67.3801 95.0368 67.3801V68.3066ZM97.8038 67.114C98.5161 66.3383 98.8536 65.3127 98.7643 64.2371L97.8409 64.3138C97.9098 65.1435 97.6507 65.9108 97.1213 66.4873L97.8038 67.114ZM98.7643 64.2371L94.2351 9.71114L93.3117 9.78784L97.8409 64.3138L98.7643 64.2371ZM94.2351 9.71111C94.0505 7.49131 92.1088 5.69216 89.8876 5.69216V6.61873C91.6226 6.61873 93.1667 8.04419 93.3117 9.78787L94.2351 9.71111ZM89.8876 5.69216H9.46961V6.61873H89.8876V5.69216Z" fill="#393F4F" mask="url(#path-4-inside-1_35397_8598)" />
            <path d="M11.0914 8.26175C11.1326 8.79302 10.7646 9.22371 10.2694 9.22371C9.77419 9.22371 9.33931 8.79302 9.29807 8.26175C9.25684 7.73049 9.62489 7.2998 10.1201 7.2998C10.6153 7.2998 11.0502 7.73049 11.0914 8.26175Z" fill="white" />
            <path d="M14.7394 8.26175C14.7806 8.79302 14.4126 9.22371 13.9174 9.22371C13.4222 9.22371 12.9877 8.79302 12.9465 8.26175C12.9053 7.73049 13.2733 7.2998 13.7685 7.2998C14.2637 7.2998 14.6982 7.73049 14.7394 8.26175Z" fill="white" />
            <path d="M18.38 8.26175C18.4213 8.79302 18.0532 9.22371 17.558 9.22371C17.0628 9.22371 16.6279 8.79302 16.5871 8.26175C16.5459 7.73049 16.9139 7.2998 17.4092 7.2998C17.9044 7.2998 18.3388 7.73049 18.38 8.26175Z" fill="white" />
            <path d="M91.8972 65.4725H16.5157C14.6981 65.4725 13.0875 63.8773 12.936 61.9273L9.41573 16.5354C9.26469 14.5854 10.6279 12.9902 12.4456 12.9902H87.8266C89.6442 12.9902 91.2548 14.5854 91.4063 16.5354L94.9266 61.9273C95.078 63.8773 93.7148 65.4725 91.8972 65.4725Z" fill="#F0F0F0" />
            <path d="M74.0303 18.3818C76.3087 14.833 81.215 15.0929 83.1914 18.7441L83.373 19.1074L97.915 50.6836C99.8229 54.8264 96.7193 59.5276 92.5293 59.0889L92.3291 59.0635L60.4395 54.5107C56.5543 53.9561 54.5003 49.3109 56.4785 45.7461L56.6826 45.4053L74.0303 18.3818Z" fill="#E0FE10" stroke="#393F4F" stroke-width="0.294002" />
            <path d="M78.668 18.459L78.874 18.4814C79.9107 18.6297 80.826 19.2971 81.3564 20.292L81.458 20.4951L96.0361 52.1514C96.5141 53.1892 96.4895 54.3247 95.9893 55.2344L95.8828 55.4141C95.3207 56.2894 94.3951 56.7502 93.373 56.6748L93.168 56.6523L61.1982 52.0879C60.1615 51.9401 59.2453 51.2723 58.7148 50.2773L58.6143 50.0732C58.1047 48.966 58.1647 47.7473 58.7656 46.8105L58.7666 46.8115L76.1592 19.7197C76.7213 18.8445 77.646 18.3836 78.668 18.459Z" fill="white" stroke="#393F4F" stroke-width="0.294002" />
            <path d="M77.2285 47.1357L77.7822 47.2148C78.8017 47.3604 79.6137 48.3088 79.665 49.3906L79.6641 49.6084C79.612 50.6969 78.7961 51.4652 77.8086 51.4307L77.6094 51.4131L77.0557 51.334H77.0547C76.0355 51.1882 75.2243 50.2398 75.1729 49.1582V48.9395C75.2254 47.8511 76.0422 47.0834 77.0293 47.1182L77.2285 47.1357ZM77.3906 28.0586L79.4219 28.3496C80.5703 28.5136 81.4834 29.5808 81.541 30.7979V31.043L81.4043 33.8857C81.3998 33.9837 81.389 34.081 81.373 34.1768L79.9277 42.7422C79.7441 43.8305 78.8699 44.5481 77.8477 44.5029L77.6416 44.4844C76.5912 44.3344 75.722 43.4212 75.5508 42.3057L75.5254 42.0801L74.9395 33.2275L74.9346 33.083C74.9342 33.0348 74.9352 32.9866 74.9375 32.9385L75.0732 30.0928C75.1321 28.8668 76.0521 27.9998 77.166 28.0391L77.3906 28.0586Z" fill="#E0FE10" stroke="#393F4F" stroke-width="0.294002" />
            <path d="M33.0176 22.4688C33.6416 19.9298 36.53 19.0778 38.2754 20.7979L38.4404 20.9727L52.1533 36.4824C53.852 38.404 52.9759 41.5272 50.6699 42.1914L50.4424 42.248L31.9658 46.1152C29.7341 46.5823 27.7715 44.4646 28.2051 42.0781L28.2549 41.8467L33.0176 22.4688Z" fill="#E0FE10" stroke="#393F4F" stroke-width="0.294002" />
            <path d="M35.7314 21.3545C36.3072 21.2342 36.9117 21.4284 37.3701 21.8887L37.46 21.9844L51.207 37.5342C51.6461 38.0309 51.8323 38.6844 51.7207 39.3047L51.6943 39.4277C51.5438 40.0402 51.1273 40.482 50.5713 40.6406L50.458 40.6689L31.9346 44.5459C31.3588 44.6663 30.7543 44.4729 30.2959 44.0127L30.2061 43.917C29.7671 43.4204 29.581 42.7666 29.6924 42.1465L29.7188 42.0225L34.4941 22.5957C34.6448 21.9831 35.0616 21.5412 35.6182 21.3828L35.7314 21.3545Z" fill="white" stroke="#393F4F" stroke-width="0.294002" />
            <path d="M40.2812 38.4004C40.8325 38.285 41.4251 38.6479 41.6396 39.249L41.6777 39.373C41.8388 40.002 41.5315 40.586 41.0137 40.7568L40.9072 40.7852L40.5859 40.8525C40.0345 40.9678 39.4418 40.6044 39.2275 40.0029L39.1904 39.8799C39.0287 39.2505 39.3362 38.6667 39.8545 38.4961L39.96 38.4678H39.9609L40.2812 38.4004ZM37.8076 27.0176C38.4336 26.8867 39.1037 27.2985 39.3457 27.9775L39.3887 28.1162V28.1172L39.8223 29.8086L39.8564 29.9795L40.5908 35.291C40.6817 35.9479 40.335 36.5186 39.793 36.6914L39.6826 36.7207C39.1098 36.8407 38.491 36.5053 38.2061 35.9072L38.1533 35.7842L36.2422 30.7207L36.1904 30.5576L35.7559 28.8633C35.5737 28.1532 35.9209 27.4899 36.5098 27.2959L36.6309 27.2637L37.8076 27.0176Z" fill="#E0FE10" stroke="#393F4F" stroke-width="0.294002" />
        </svg>

    );
};

