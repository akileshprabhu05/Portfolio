import React from 'react'
import cakeImg from '../assets/img1.png'
import doorImg from '../assets/door.png'
import appImg from '../assets/img3.png'

const Slides =()=> {
    const cardList=[
        {
          img:cakeImg,
          title:"CBMS",
          description:"Developed a comprehensive PHP-based Cake Bakery Management System designed to simplify essential bakery operations",
        },
        {
          img:doorImg,
          title:"Eyes On Access",
          description:"Developed a Smart Door Notification System to enhance security and convenience using advanced technologies for remote door status notifications",
        },
        {
          img:appImg,
          title:"Sugars N Brownies",
          description:"Developed the Cake Bakery Management System to revolutionize bakery operations by integrating order management, inventory control, employee scheduling, and analytics for enhanced efficiency and performance",
        },
      ]
  return (
    <>
      {cardList.map((card,id)=>(
        <div key={id}
        className='flex flex-col cursor-pointer bg-white justify-center py-6 px-10 text-center items-center mt-12 rounded-tl-[35px] rounded-br-[35px]
                  shadow-2xl md:min-h-[340px] w-screen max-w-screen-md min-h-[260px] hov transition: all 0.2s'>
                    <img src={card.img} alt='card-image' className='w-[60px] mb-4 justify-center'/>
                    <p className='text-[22px] font-semibold font-mono uppercase mb-7'>
                        {card.title}
                    </p>
                    <p className='text-[15px] font-medium leading-2 w-full text-left'>
                        {card.description}
                    </p>
                  </div>
      ))}
    </>
  )
}

export default Slides