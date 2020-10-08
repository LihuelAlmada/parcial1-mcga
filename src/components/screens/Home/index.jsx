import './style.css';
import React from 'react';
import HomeCard from '../HomeCard';
import Button from '../Button';

const Home = (props) => (
    <>
    <div className="home">
    <HomeCard name = {props.name}
              year = {props.year}
    />
    <Button />
    <Button />
    </div>
    </>
)
export default Home;

