import React, { useState, useEffect } from 'react'
import Hat from "../important/hat"
import Infocard from "../important/infocard"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IoIosArrowDown as Arrow } from "react-icons/io"
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.defaults.color = "#ffffff";
ChartJS.defaults.backgroundColor = '#9BD0F5';
ChartJS.defaults.borderColor = '#0e9e2d';

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Language Competency',
        },
    },
}
const labels = ["HTML", "CSS", "Javascript", "LUA"]
const data = {
    labels, datasets: [
        {
            label: 'Language Competency',
            data: [10, 20, 40, 85],
            backgroundColor: '#ffffff',
        },
    ]

}

let pages = [
    ["Who is this loser?", "Avid game developer looking to learn as many good programming languages as possible.",
        //<div className="w-full h-auto">
        <Bar options={options} data={data} />
        //</div>
    ],
    ["Past Work", "This is a list of my past work.",
        <div className="grid grid-cols-2 grid-rows-2 w-11/12 h-5/6 gap-y-2 gap-x-2 mx-auto">
            <a className="mx-auto w-full h-full" href="https://b1gchungus.github.io/calculator-project/">
                <img src="calc.png" alt="joemama" className="mx-auto w-full h-full"></img>
            </a>
            <a className="mx-auto w-full h-full" href="https://github.com/RogerRandomDev/reactfinal">
                <img src="ufarter.png" alt="joemama" className="mx-auto w-full h-full"></img>
            </a>
            <a className="mx-auto w-full h-full" href="https://github.com/B1gChungus/taskmngr-server">
                <img src="taskmanager.png" alt="joemama" className="mx-auto w-full h-full"></img>
            </a>
            <a className="mx-auto w-full h-full" href="https://i.ytimg.com/vi/kYrZw4Jsjh8/hqdefault.jpg">
                <img src="uh.png" alt="joemama" className="mx-auto w-full h-full"></img>
            </a>
        </div>
    ],
    ["My Resume", "Why do i need a resume",
        <a href="./laresume.docx" className="w-3/4 h-5/6 mx-auto"><img src="whatnow.png" alt="joemama" className="mx-auto w-full h-full"></img></a>
    ]
]

function clamp(n, min, max) {
    //let newn = Math.min(Math.max(n, min), max)
    switch (n) {
        case min - 1: console.log("lol"); return max
        case max + 1: console.log("return min"); return min
        default: console.log("return default"); return Math.min(Math.max(n, min), max)
    }
}

function Main() {
    let [current, setCurrent] = useState(0)
    // let keyevent = document.addEventListener("keydown", function (event) {
    //     if (keys[event.key]) { setCurrent(clamp(current + keys[event.key], 1, pages.length)); }
    // })
    function keydown(event) {
        switch (event.key) {
            case "w": case "ArrowUp": setCurrent(clamp(current + 1, 0, pages.length - 1)); break
            case "s": case "ArrowDown": setCurrent(clamp(current - 1, 0, pages.length - 1)); break
            default: break
        }
        //console.log("keydownlol", current)
    }
    useEffect(function () {
        //etCurrent(clamp(current + 1, 1, pages.length))
        console.log("added event")

        document.addEventListener('keydown', keydown)

        return function cleanupListener() {
            console.log("removed event")
            document.removeEventListener('keydown', keydown)
        }
    })

    return (
        <div className="h-[100vh]">
            <div className="h-2/3 mt-[30%] md:mt-24 w-full absolute z-10 bg-none ">
                {pages.map(function (val, ind) {
                    //return <Getcard i={ind} key={ind}/>
                    let display = (ind === current && "animate-tweenin") || "animate-tweenout"
                    return <Infocard title={val[0]} key={ind} description={val[1]} display={display} extraelement={val[2] || null} />
                })}
            </div>
            <div className="absolute w-full h-full md:hidden">
                <div className="flex flex-col justify-between w-full h-full">
                    <Arrow className="z-30 w-full h-20 rotate-180" onClick={() => { keydown({ key: "w" }) }} />
                    <Arrow className="z-30 w-full h-20" onClick={() => { keydown({ key: "s" }) }} />
                </div>
            </div>
            <Hat className="z-20" />
        </div>
    )
}

export default Main