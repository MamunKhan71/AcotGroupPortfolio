import React from 'react'
import AboutUsHeader from './_componenets/AboutUsHeader'
import AboutAcote from './_componenets/AboutAcote'
import MissionAndVision from './_componenets/MissionAndVision'
import OurJourneySection from './_componenets/OurJourneySection'

const AboutUs = () => {
    return (
        <div className='space-y-20 mb-20'>
            {/* About us header section */}
            <AboutUsHeader />
            <AboutAcote />
            <MissionAndVision />
            <OurJourneySection />
        </div>
    )
}

export default AboutUs