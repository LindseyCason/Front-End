import React, {useState, useEffect} from "react";
import dungeon_room_data from "../data/rooms_pics.js";
import Confetti from 'react-confetti';

import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size'

function Grid(props){
    
    const { width, height } = useWindowSize();

    const [roomData, setRoomData] = useState([]);

    const [roomNames, setRoomNames] = useState([]);

    useEffect( () => {      
        
        setRoomNames(dungeon_room_data.rooms)
        
        roomNames.map(mock_room => {
            console.log("room names", mock_room);    

        }) 

    }, [])   
      

    var Tile = function(x, y) {
        this.x = x;
        this.y = y;
        this.width = 50;
    };

   
    var newTiles = [];

    var NUM_COLS = 10;
    var NUM_ROWS = 10;

    var tiles = new Array(NUM_COLS).fill(0)   

    tiles = tiles.map(arr=>{
        arr = new Array(NUM_ROWS).fill({x: 0, y: 0})
        return arr
    })

    tiles = tiles.map((tile, index1) => {
        
        return tile.map( (newTile, index2) => {           
           
            newTile.x = index1 + 1
            newTile.y = index2 + 1
            
           
            return <div className = "tile">{newTile.x},{newTile.y} </div>
        })

    })
     

    var flexGrid = roomNames.map( (room, index ) => {  

        let classStyles = "";   
        
        if (props.currentRoom === room.name){
            room.display = true;

        }
        

        return props.currentRoom === room.name ?                 
        <div key = {index} id = {room.name} className = "tile-selected" style = {{ backgroundImage: "url("+room.image+")" }} > </div>               
        :
            room.display === true ? 
                <div key = {index} id = {room.name} style = {{ backgroundImage: "url("+room.image+")" }} className = "tile"> </div>
            :
            <div key = {index} id = {room.name} className = "tile"> </div>
        
        
    })
     
   
    return (

        <div className="grid">                      
                
            {flexGrid} 

            {props.currentRoom === "The Small Rift of Flame" ? 

                <div style={{width: 50}}> 

                    <Confetti
                        width={width}
                        height={height}
                    /> 
                    

                </div>   
            :

            null}        


        </div>    

    );


}//end Grid

export default Grid;