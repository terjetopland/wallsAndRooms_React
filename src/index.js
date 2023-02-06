import React from 'react';
import ReactDOM from 'react-dom/client';


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
const infoWallOne = wallOne.nameOfRoom() + ' and the ' + wallOne.viewWallThickness();

const myArray =['room1', 'room2', 'room3'];

const myRooms = myArray.map((item) => <p><button>{item}</button></p>);
const myElements = (
    <table>
        <tr>
            <button>testing out</button>
        </tr>
        <tr>
            Something more
        </tr>
    </table>
);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElements);


