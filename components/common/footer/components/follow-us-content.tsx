import EmailIcon from '@/components/icons/email-icon'
import MapPinIcon from '@/components/icons/map-pin-icon'
import MobileIcon from '@/components/icons/mobile-icon'
const listStyle = 'flex gap-4 items-center'
const FollowUsContent = () => {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="text-white text-2xl font-medium md:leading-[27px]">{'Follow Us'}</h1>
                <div className="flex gap-1">
                    <hr className="w-14 border-[1px] rounded-full border-primary" />
                    <hr className="w-2 border-[1px] rounded-full border-primary" />
                    <hr className="w-2 border-[1px] rounded-full border-primary" />
                </div>
            </div>
            <div className='mt-6 text-white text-base md:max-w-96'>
                <ul className='space-y-4'>
                    <li className={listStyle}>
                        <MapPinIcon />
                        <p>Main HQ :<br />
                            DTX Business Center, 6th Floor, Plot no .1176 & 1543 Pragati Sarani Road, Kuril, Dhaka 1229</p>
                    </li>
                    <li className={listStyle}>
                        <MobileIcon />
                        <p><a href="tel:+8801758388865">+880 1758 388865</a></p>
                    </li>
                    <li className={listStyle}>
                        <EmailIcon />
                        <p><a href="mailto:info@acotegroup.com">info@acotegroup.com</a></p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FollowUsContent