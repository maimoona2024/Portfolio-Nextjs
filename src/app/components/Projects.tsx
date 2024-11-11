import { title } from 'process'
import React from 'react'
import Heading from './Heading';
import Cards from './Cards';


const data = [
  {
    id:0,
    title:"To Do List",
    desc:"A react and typescript based app for managing and organising your tasks efficiently.",
    img:"/p2.jpg",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
  {
    id:1,
    title:"Architect Website",
    desc:"A Next.js architect website displays architectural projects and services professionally.",
    img:"/p7.png",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
  {
    id:2,
    title:"ATM",
    desc:"ATM software is a specialized application that manages the transactions.",
    img:"/p9.jpg",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
  {
    id:3,
    title:"Number Game",
    desc:"A number guessing game is a game where players guess a hidden number with hints.",
    img:"/p4.jpg",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
  {
    id:4,
    title:"Currency Converter",
    desc:"A currency converter is a software that converts one currency into another.",
    img:"/p5.jpg",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
  {
    id:5,
    title:"Simple Calculator",
    desc:"Calculator software is a program that performs mathematical calculations,",
    img:"/p6.jpg",
    tags:["React", "Node", "TypeScript", "CSS"],
  },
];
const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
        {data.map((el) => (<Cards 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects