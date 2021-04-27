import React,{useState} from 'react'
import style from '../styles/Home.module.css'
import signUpForm from './SignUp.js'
import Userfront from '@userfront/react'


// import sign up from userfront
Userfront.init("rbvx8dbd");

const SignupForm = Userfront.build({
  toolId: "klnnkr"
});

// import sign in form from userfront


Userfront.init("rbvx8dbd");

const LoginForm = Userfront.build({
  toolId: "naoodo"
});


function Home() {

    const [start,setStart] = useState(false);
    const [start2,setStart2] = useState(false);

    const openSignUp = () =>{
        setStart(!start);
    }

    const closSignUp = () =>{
        setStart(false);
    }

    const closeLogIn = () =>{
        setStart2(false);
    }

    const openSignIn = () =>{
        setStart2(!start2);
    }

    return (
        <div>
            <div className={style.home}>
                <div className={style.home1}>
                    <h1>We Help You Keep Your Memories</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, animi deleniti! Facere dolorem voluptates voluptas sint natus sapiente eveniet totam recusandae vitae quia dolorum corrupti explicabo autem, officiis laboriosam repudiandae.</p>
                    <div className={style.button_box}>
                       <button className={style.but1} onClick={openSignUp}>Sign up</button>  
                       <button className={style.but2} onClick={openSignIn}>Sign in</button>
                    </div>
                   
                </div>
                <div className={style.home2}>

                </div>
            </div>
            {/* sign up moadal */}
            <div  className={start ? style.signUp_active : style.signUp }>
                <SignupForm />
            </div>
            {/* sign in modal */}
            <div className={start2 ? style.logIn_active : style.logIn }>
                <LoginForm />
            </div> 
           {/* signup modals */}
            <div onClick={closSignUp} className={start ? style.modalBacActive : style.modalBac}></div>
            <div onClick={closeLogIn} className={start2 ? style.modalBac2Active : style.modalBac2}></div>
             
        </div>
    )
}

export default Home
