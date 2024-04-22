import React from 'react'
import image from './abc1.webp'
import image1 from './abc2.jpg'
import Cards from './Cards'


export const Home = () => {

    let data=[{
        name:'Adam Johnson',
        role:'Developer',
        img: image,
        cards: 'bg-secondary border-0 pt-5'
    },
    {
        name:'Linda Larson',
        role:'Manager',
        img: image1,
        cards:'border-0 pt-5'
    },
    {
        name: 'Mary Hudson',
        role:'Designer',
        img:image,
        cards:'border-0 pt-5'
    },
    {
        name:'Lina Hudson',
        role:'Developer',
        img: image,
        cards:'border-0 pt-5'
    },
    {
        name:'Linda Larson',
        role:'Manager',
        img: image,
        cards:'border-0 pt-5'
    },
    {
        name:'Margo Larson',
        role:'Manager',
        img: image,
        cards:'border-0 bg-secondary pt-5'
    }
    ]
  return (
    <div className='d-flex gap-3 flex-wrap w-75 text-center justify-content-center mx-auto'>
        {data.map((item)=>(
            <Cards name={item.name} role={item.role} img={item.img} cards={item.cards} />
        ))}
    </div>
  )
}
