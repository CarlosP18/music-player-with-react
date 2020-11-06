
import { useRef, useState } from "react";
import logo from './slogo.png'

export function SongList() {
    const [songs, setSongs] = useState([
        {"id":1,"category":"game","name":"Mario Castle","url":"files\/mario\/songs\/castle.mp3"},
        {"id":2,"category":"game","name":"Mario Star","url":"files\/mario\/songs\/hurry-starman.mp3"},
        {"id":3,"category":"game","name":"Mario Overworld","url":"files\/mario\/songs\/overworld.mp3"},
        {"id":4,"category":"game","name":"Mario Stage 1","url":"files\/mario\/songs\/stage1.mp3"},
        {"id":5,"category":"game","name":"Mario Stage 2","url":"files\/mario\/songs\/stage2.mp3"},
        {"id":6,"category":"game","name":"Mario Star","url":"files\/mario\/songs\/starman.mp3"},
        {"id":7,"category":"game","name":"Mario Underworld","url":"files\/mario\/songs\/underworld.mp3"},
        {"id":8,"category":"game","name":"Mario Underwater","url":"files\/mario\/songs\/underwater.mp3"},
        {"id":9,"category":"game","name":"Zelda Castle","url":"files\/videogame\/songs\/zelda_castle.mp3"},
        {"id":10,"category":"game","name":"Zelda Outworld","url":"files\/videogame\/songs\/zelda_outworld.mp3"},
     ])

let player  = useRef(null)

    const [selectedSong, setSelectedSong] = useState(null);
    const [playing, setPlaying] = useState(false);

    const selectSong = (i) => { 
        const song = songs[i];
        player.src = `https://assets.breatheco.de/apis/sound/${song.url}`;
        setSelectedSong(i);
    }

    const playSong = () => {
        player.play();
        setPlaying(!playing);
    }

    const puaseSong = () => {
        player.pause();
        setPlaying(!playing);
    }

    const nextSong = () => {
        selectSong(selectedSong === null ? 0 : selectedSong + 1);
        playSong();
        setPlaying(true);
    }

    const prevSong = () => {
        selectSong(selectedSong === null ? songs.length : selectedSong - 1);
        playSong();
        setPlaying(true);
    }


    return (
        <>
            <div className="card-header bg-dark">
                <img src={logo} height={40} />
            </div>
            <div className="card-body  px-0 list-group-flush" style={{ backgroundColor: "#222326" }}>

                {
                    songs.map((song, i) =>{
                        return <li key={i} style={{ backgroundColor: "#222326" }} className={'list-group-item  text-white text-left mx-0 ' + (selectedSong === i ? " bg-light text-dark" : "")} onClick={() => selectSong(i)}>{song.id}.-  {song.name} </li>
                    }) 
                }
                   
            </div>
            <div className="card-footer bg-dark">
                <div className='float-left ml-0 '>
                <button type="button" className="btn btn-dark"><i class="fas fa-random"></i></button>
                <button type="button" className="btn btn-dark"><i className="fas fa-backward" onClick={prevSong}></i></button>
                <button type="button" className={"btn btn-dark"+ (playing === true ? " d-none" : " ")} onClick={playSong}><i className="fas fa-play-circle" ></i></button>
                <button type="button" className={"btn btn-dark" + (playing === false ? " d-none" : " ")} onClick={puaseSong}><i className="fas fa-pause-circle" ></i></button>
                <button type="button" className="btn btn-dark" onClick={nextSong}><i className="fas fa-forward"></i></button>
                <button type="button" className="btn btn-dark"><i className="fas fa-redo-alt"></i></button>
                </div>
                <div className="float-right ml=0">
                    <button type="button" className="btn btn-dark"><i class="fas fa-volume-down"></i></button>
                    {/* <button type="button" className="btn btn-dark"><i class="fas fa-volume-mute"></i></button> */}
                    <input type="range" min="0" max="100" className="slider" />
                </div>
            </div>                
           
            <audio ref={(t) => player = t} src=""></audio>
        </>
    );
}