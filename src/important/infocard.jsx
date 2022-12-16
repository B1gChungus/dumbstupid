export default function Infocard({ title, description, img, display, extraelement }) {
    return (
        <div className={`${display || "animate-tweenout"} absolute w-10/12 mx-[7%] md:mx-[20%] lg:mx-[30%] md:w-7/12 lg:w-5/12 h-4/6 lg:h-5/6 bg-gray-800 rounded text-center text-white p-4`}
            style={{ transformStyle: "preserve-3d", transform: "rotate3d(0,0,0,75deg)" }}>
            <div className="flex flex-col place-content-center h-full">
                <p id="title" className="text-4xl mb-2 grow-0">{title}</p>
                {(img && <img src={img} id="sub" alt="horrible"></img>)
                    ||
                    <p id="sub" className="lg:text-xl grow-0 mb-2">{description}</p>}
                {extraelement}
            </div>
        </div>
    )
}
