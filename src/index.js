import React from 'react';
import ReactDOM from 'react-dom/client';
import House from "./house";



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




const myButton = (<button id='click' onClick={ClickIt}>testing out</button>);
const refreshClick = (<button id='refresh' onClick={RefreshNumber}>Refresh</button>);
const myElements = (
    <table>
        <tbody>
            <tr>
                <td>Something</td>
            </tr>
            <tr>
                <td>Something more</td>
            </tr>
        </tbody>
    </table>

);

const combinedElement = (
    <>
        <div>{myElements}</div>
        <div>{myButton}</div>
        <div>{refreshClick}</div>
        <div>Please hit refresh</div>
    </>
);

function TheHeader(){
    return <h1>This is my header</h1>;

}

function Combined() {
    return (
        <>
            <TheHeader/>
            <TheHeader/>
            <div>
                {combinedElement}
            </div>
            <House/>
        </>
    );
}

let number = 0;
function ClickIt() {
    number++;
    document.getElementById('click').innerHTML = `test again ${number}`;
}

function RefreshNumber() {
    number = 0;
    document.getElementById('click').innerHTML = 'refreshed';
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Combined/>);


