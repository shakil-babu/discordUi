import React from 'react'
import HomeUI from './HomeUi/HomeUI'
import Navbar from './Navbar/Navbar'
import {BrowserRouter , Route , Switch , Redirect} from 'react-router-dom';
import Dowenload from './Dowenload/Dowenload' ;
import WhyDiscordUi from "./WhyDiscord/WhyDiscordUi";
import SupportUi from './Support/SupportUi';
import NitroUi from './Nitro/NitroUi';
import SafetyUi from './Safety/SafetyUi';


const Index = () => {
   return(
       <>
       <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={HomeUI} />
            <Route path='/dowenload' component={Dowenload} />
            <Route path='/why-discord-is-different' component={WhyDiscordUi} />
            <Route path='/nitro' component={NitroUi} />
            <Route path='/safety' component={SafetyUi} />
            <Route path='/support' component={SupportUi} />
        </Switch>

       </BrowserRouter>
       </>
   )
}

export default Index
