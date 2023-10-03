import "../index.css"
import tanya from "../assets/images/image-tanya.jpg";
import john from "../assets/images/image-john.jpg";

import { useState } from "react";


const testimonials = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        text: "I´ve been interested in coding for a while but never taken the jump, until now. I couldn´t recommend this course enough. I´m now in the job of my dreams and so excited about the future.",
        img: tanya
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        text: "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
        img: john
    },

]



export default function Slide() {
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        setIndex(1)
    }

    const handlePrev = () => {
        setIndex(0)
    }



    return (
            <div className="mt-10 bg-[url('/src/assets/images/pattern-bg.svg')] bg-no-repeat  bg-[length:500px_480px] bg-top lg:bg-right-top lg:bg-[length:600px_540px] lg:mr-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 ">  
                    <div className="text-3xl flex justify-center mx-20 mt-10  flex-col bg-[url('/src/assets/images/pattern-quotes.svg')] bg-no-repeat  bg-top lg:bg-left-top lg:mx-0 lg:max-w-xl lg:pt-8 lg:ml-20  ">
                        <p className="text-center font-light mb-4 mt-10 text-blue-950 lg:text-left  ">
                            {testimonials[index].text} 
                        </p>
                        <div className="text-center flex flex-col text-2xl  lg:text-left lg:flex-row ">
                            <span className="mr-4 font-medium">{testimonials[index].name}</span>
                            <span className="text-gray-500 ">{testimonials[index].job}</span>
                        </div>
                    </div>
                    
                    <div className="relative flex justify-center row-start-1 my-14 lg:col-start-2 lg:pt-8  ">
                        <img  src={testimonials[index].img} className=" w-96  shadow-2xl" />
                        <div className="absolute -bottom-4  bg-white w-24 h-12  rounded-full flex justify-around">
                            <button 
                                className=""
                                onClick={handlePrev}
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M11 1L3 9l8 8"/></svg>
                            </button>
                            <button 
                                onClick={handleNext}
                                className=""
                                >
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="18"><path fill="none" stroke="#8585AC" strokeWidth="3" d="M2 1l8 8-8 8"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <svg className="object-left-bottom" xmlns="http://www.w3.org/2000/svg" width="610" height="154"><path fill="#F4F4FC" fillRule="evenodd" d="M610 154C469.493 123.42 358.432 86.087 276.818 42S102.93-11.42 0 14v140h610z"/></svg>
            </div>
    )
}
