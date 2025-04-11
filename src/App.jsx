// src/App.jsx
import {useState, useRef} from 'react'
import "./App.css";


const App = () => {

    const [teams, setTeams] = useState([])
    const [money, setMoney] = useState(100)
    const totalStrength = useRef(0)
    const totalAgility = useRef(0)
    const [zombieFighters, setZombieFighters] = useState([
        {
            id: 1,
            name: 'Survivor',
            price: 12,
            strength: 6,
            agility: 4,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
        },
        {
            id: 2,
            name: 'Scavenger',
            price: 10,
            strength: 5,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
        },
        {
            id: 3,
            name: 'Shadow',
            price: 18,
            strength: 7,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
        },
        {
            id: 4,
            name: 'Tracker',
            price: 14,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
        },
        {
            id: 5,
            name: 'Sharpshooter',
            price: 20,
            strength: 6,
            agility: 8,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
        },
        {
            id: 6,
            name: 'Medic',
            price: 15,
            strength: 5,
            agility: 7,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
        },
        {
            id: 7,
            name: 'Engineer',
            price: 16,
            strength: 6,
            agility: 5,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
        },
        {
            id: 8,
            name: 'Brawler',
            price: 11,
            strength: 8,
            agility: 3,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
        },
        {
            id: 9,
            name: 'Infiltrator',
            price: 17,
            strength: 5,
            agility: 9,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
        },
        {
            id: 10,
            name: 'Leader',
            price: 22,
            strength: 7,
            agility: 6,
            img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
        },
    ])

    const handleAddFighter = (fighter) => {
        setTeams([...teams, fighter])
        setZombieFighters(zombieFighters.filter(zombie => zombie.id !== fighter.id))
        setMoney(money - fighter.price)
        totalStrength.current += fighter.strength
        totalAgility.current += fighter.agility
        console.log(teams)
    }
    const handleRemoveFighter = (fighter) => {
        setZombieFighters([...zombieFighters, fighter])
        setTeams(teams.filter(zombie => zombie.id !== fighter.id))
        setMoney(money + fighter.price)
        totalStrength.current -= fighter.strength
        totalAgility.current -= fighter.agility
    }

    return (
        <>
            <h1>Zombie Fighters</h1>
            <h3>Money: {money}</h3>
            <h3>Team Strength: {totalStrength.current}</h3>
            <h3>Team Agility: {totalStrength.current}</h3>
            <h3>Team</h3>
            {teams.length === 0 ? (
                <p>Add some team members</p>
            ):null}
            <ul>
                {/*Add condition to remove p tag when team member is added*/}
                {teams.map((zombie)=> (
                    <li key={zombie.id}>
                        <img src={zombie.img}  alt={zombie.img}/>
                        <br/>
                        <b>{zombie.name}</b>
                        <br/>
                        Price: {zombie.price}
                        <br/>
                        Strength: {zombie.strength}
                        <br/>
                        Agility: {zombie.agility}
                        <br/>
                        <button onClick ={()=>{
                            handleRemoveFighter(zombie)
                        }}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Fighters</h3>
           <ul>
               {zombieFighters.map((zombie) => (
                   <li key={zombie.id}>
                       <img src={zombie.img}  alt={zombie.img}/>
                       <br/>
                       <b>{zombie.name}</b>
                       <br/>
                      Price: {zombie.price}
                       <br/>
                       Strength: {zombie.strength}
                       <br/>
                       Agility: {zombie.agility}
                       <br/>
                       {money >= zombie.price ? (
                           <button onClick ={()=>{
                               handleAddFighter(zombie)
                           }}
                           >
                               Add
                           </button>

                       ):<p>Not enough funds</p>}
                   </li>
               ))}
           </ul>
        </>
    );
}

export default App
