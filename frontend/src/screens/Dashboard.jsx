
//Components
import Filters from "../components/Filters"
import IntensityBarView from "../components/IntensityBarView"
import LikelihoodView from "../components/LikelihoodView"
import RegionView from "../components/RegionView"
import TopicView from "../components/TopicView"
import CountryView from "../components/CountryView"

//Images/Icons
import SearchIcon from '/search.png'
import MoonIcon from '/moon.png'
import SunIcon from '/sun.png'
import ShortcutIcon from '/shortcuts.png'
import BellIcon from '/bell.png'
import ProfileIcon from '/profile.png'
import Blackcoffer from '/blackcofferLogo.png'
import '../assets/dashboard.css'
import { AiOutlineMenuUnfold,  AiOutlineMenuFold} from "react-icons/ai";
import { TbFilterShare } from "react-icons/tb";


export default function Dashboard(){

    function openMenu(){
        const sidebar = document.getElementById('sidebar');
        sidebar.style.display = 'block';
        sidebar.classList.remove('width-0');
        sidebar.classList.add('width-300');
        const htmlElement = document.getElementsByTagName('html');
        htmlElement[0].style.overflowY = 'hidden';
    }

    function closeMenu(){
        const sidebar = document.getElementById('sidebar')
        sidebar.classList.remove('width-300');
        sidebar.classList.add('width-0');
        sidebar.style.display = 'none';
        const htmlElement = document.getElementsByTagName('html');
        htmlElement[0].style.overflowY = 'scroll';
    }
    return (
        <>
            <div id="dashboard" >
                <div id='sidebar' className="inter-300">
                    <div id='logo' className="inter-500">
                        <img src={Blackcoffer} alt='blackcoffer-logo' style={{width: '30px', height: '30px', alignSelf:'center'}}/>
                        <span style={{width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: "center"}}>BlackCoffer 

                            <span id="menu-icon" style={{display: 'none'}} onClick={closeMenu}><AiOutlineMenuFold/></span>
                         </span>
                    </div>
                    <div style={{display: "flex", gap: '5px', alignItems: 'center'}}>
                        Filters <span><TbFilterShare/></span>
                    </div>
                    <Filters/>
                </div>
                <div id='dataviews' className="inter-500">
                    <div id='topbar'>
                        <div>
                            <span id="menu-icon" style={{display: 'none'}} onClick={openMenu}><AiOutlineMenuUnfold/></span>
                            <img src={SearchIcon} alt="search-icon"/>
                            <input type="text" placeholder="Search"/>
                        </div>
                        <div>
                            <img src={SunIcon} alt="light-mode-button" />
                            <img src={ShortcutIcon} alt="light-mode-button" />
                            <img src={BellIcon} alt="light-mode-button" />
                            <img src={ProfileIcon} alt="light-mode-button"/>
                        </div>
                    </div>
                    
                    <div className="graphs">
                        <div> Frequency of Intensity </div>
                        <IntensityBarView/>
                    </div>

                    <div className="graphs" style={{height: '500px'}}>
                        <div> Frequency of Likelihood </div>
                        <LikelihoodView/>
                    </div>

                    <div className="graphs">
                        <div> Frequency of Country </div>
                        <CountryView/>
                    </div>

                    <div className="graphs">
                        <div> Frequency of Region </div>
                        <RegionView/>
                    </div>

                </div>

            </div>
        </>
    )
}