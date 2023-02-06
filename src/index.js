import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from './testOne.css';

const firstElement = <h1 className="firstElementStyle">Hello again!</h1>

class Room {
    constructor(name) {
        this.roomName = name;
    }
    nameOfRoom() {
        return 'You are now viewing room ' + this.roomName;
    }
}
class Wall extends Room{
    constructor(name, thickness) {
        // super() refers to parent class
        super(name);
        this.wall = thickness;
    }
    viewWallThickness(){
        return 'Size of wall is ' + this.wall;
    }

    viewAllInfoOfWall() {
        return this.nameOfRoom() + ' ' + this.viewWallThickness();
    }
}



const wallOne = new Wall('Sleepingroom', 100);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(wallOne.viewAllInfoOfWall());


