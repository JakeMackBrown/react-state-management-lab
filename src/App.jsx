import { useState } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },
    ]);

const [totalStrength, setTotalStrength] = useState(0);
const [totalAgility, setTotalAgility] = useState(0);

const calculateTotalStrength = (team) => {
  return team.reduce((total, fighter) => total + fighter.strength, 0)
};

const calculateTotalAgility = (team) => {
  return team.reduce((total, fighter) => total + fighter.agility, 0)
};

const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    const newTeam = [...team, fighter];
    setTeam(newTeam);
    setMoney(money - fighter.price);
    setTotalStrength(calculateTotalStrength(newTeam));
    setTotalAgility(calculateTotalAgility(newTeam));
  } else {
    console.log('Not enough money')
  }
}

  return (
    <div className="ZombieBuilder">
      <h1>Zombie Fighters</h1>
      <div>Money: ${money}</div>
      <div>Total Team Strength: {totalStrength}</div>
      <div>Total Team Agility: {totalAgility}</div>
      <ul className="zombie-fighters-list">
          {zombieFighters.map((fighter, index) => (
            <li key={index} className="zombie-fighter">
              <img src={fighter.img} alt={fighter.name} />
              <div>Name: {fighter.name}</div>
              <div>Price: {fighter.price}</div>
              <div>Strength: {fighter.strength}</div>
              <div>Agility: {fighter.agility}</div>
              <button onClick={() => handleAddFighter(fighter)}>Add</button>
            </li>
          ))}
      </ul>

      <h2>Team</h2>
      {team.length === 0 ? (
        <div>Pick some team members!</div>
      ) : (
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index} className="team-member">
              <img src={member.img} alt={member.name} />
              <div>Name: {member.name}</div>
              <div>Price: {member.price}</div>
              <div>Strength: {member.strength}</div>
              <div>Agility: {member.agility}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App