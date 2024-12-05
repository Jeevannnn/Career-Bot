import Hero from "./Hero"
import BlogCards from "./BlogCards"
import Reviews from "./Reviews"
import Icon from "../assets/images/CareerGPT_Bot.gif"
import HomeCSS from "../assets/styles/Home.module.css"
import { Link } from "react-router-dom"


export default function Home(){
    return(
        <>
        <Hero />
        
        <Reviews/>
        <Link 
          className={HomeCSS.openButton}
          to="https://studious-fortnight-pv56w5q9gw5frrq9-8501.app.github.dev/"
        >
            <img src={Icon} className={HomeCSS.botIcon}/>

        </Link>
        </>
    )
}