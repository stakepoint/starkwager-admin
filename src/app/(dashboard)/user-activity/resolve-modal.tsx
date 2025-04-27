import { X } from 'lucide-react';
import React from 'react';


const ResolveDisputeModal: React.FC = ({ }) => {

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center'>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            <div className='relative bg-white rounded-lg w-full h-full overflow-y-auto grid justify-items-end'>
                <div className='w-[582px] rounded-[24px] m-4 p-4 bg-blue-300 flex'>
                    <div className='flex items-center justify-between w-full'>
                        <p className=''>Dispute Details</p>
                        <X/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResolveDisputeModal;