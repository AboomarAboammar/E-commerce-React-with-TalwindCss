
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
<div className='text-2xl text-center pt-8 border-t'>
<Title text1={'ABOUT'} text2={'US'}/>
</div>
<div className='my-10 flex flex-col md:flex-row g16'>
  <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
<div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim nam aut id, velit at magni. Iure culpa quos veniam dolor aliquid, quasi mollitia tempore nisi voluptate natus magnam corrupti consequuntur.</p>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, tempore officia. Itaque laudantium illum molestias, libero, ratione reiciendis alias cumque neque natus repellat molestiae? Libero quam rem animi odio nostrum</p>
<b className='text-gray-800'>Our Mission</b>
<p>Our mission at forever Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, tempore, corrupti debitis magnam similique facere aspernatur iste quas adipisci commodi odio magni? Dicta, fugiat! Veniam minus ipsum suscipit explicabo perferendis</p>

</div>
</div>
<div className='text-xl py-4'>
<Title text1={'WHY'} text2={'CHOOSE US'}/>
</div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quo quos consectetur fuga modi, magni repellendus voluptate qui quae sapiente consequatur magnam ipsa, eius at voluptas error maxime laborum. Blanditiis.</p>

     
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, tempora? Reiciendis placeat eveniet est quasi voluptatem qui quidem ipsam? Eos, ut nisi incidunt atque ullam quam pariatur quis quos maxime.</p>
    
     
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae id consequatur in delectus ea facilis fuga possimus. Dolores vero neque repudiandae, odio, eum corporis culpa pariatur consequatur et, voluptatibus doloribus.</p>
    
     
  </div>

</div>
<NewsLetterBox />
    </div>
  )
}

export default About
