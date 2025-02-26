import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderBadge from '@/components/common/HeaderBadge'
import ProjectCards from '@/components/common/ProjectCards'
import { Button } from '@/components/ui/button'
import { blogsData } from '@/data/blogs-data'
import React from 'react'

const OurProjects = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex w-full justify-between items-center'>
                <div>
                    <HeaderBadge title='our projects' />
                    <ComponentTitle title='recent projects' />
                </div>
                <Button className='text-xl' variant={'outline'}>View all</Button>
            </div>
            <div className='grid grid-cols-3 gap-7 mt-14'>
                {
                    blogsData?.map((blog, index) => <ProjectCards key={`blog-${index}`} title={blog.title} imageUrl={blog.imageUrl} category={blog.category} />)
                }
            </div> 
        </div>
    )
}

export default OurProjects