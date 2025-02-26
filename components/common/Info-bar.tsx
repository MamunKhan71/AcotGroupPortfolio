import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationDot ,} from 'react-icons/fa6'
import { MdEmail, MdPhone  } from 'react-icons/md'

const InfoBar = () => {
    return (
        <div className='bg-[#f3f6f3] w-full py-3 font-roboto text-lg'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <FaLocationDot size={16} />
                        <p>6th floor, DTX Business Center, Pragati Sarani Road, Dhaka 1229</p>
                    </div>
                    <div className='flex gap-10'>
                        <div className='flex items-center gap-5'>
                            <BsFillTelephoneFill size={16} />
                            <p>(629) 555-0129</p>
                        </div>
                        <div className='flex items-center gap-5'>
                            <MdEmail  size={16} />
                            <p>info@acotegroup.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBar