import React,{useState,useEffect} from 'react'
import style from '../styles/Dashboard.module.css'
import Userfront from '@userfront/react'
import idToken from '@userfront/react'
import {Redirect,Route} from 'react-router-dom'

function DashBoard() {
    const [_item,set_Item] = useState();
    const [date,setDate] = useState();
    const [data, setData] = useState([]);
    const [start, setStart] = useState(false);

    const openModal = () =>{
        setStart(true);
    }

    const closeAll = () =>[
        setStart(false)
    ]

    useEffect(()=>{
        if(data){
            setData(JSON.parse(getData('data')));
        }
        
    },[]);

    function getValue(e){
        set_Item(e.target.value);
    }

    function getDate(e){
        setDate(e.target.value)
    }

    const saveToLocalStorage = (key,value) =>{
        localStorage.setItem(key,value);
    }

    function saveData(e){
        e.preventDefault();
        saveToLocalStorage('data',JSON.stringify(data));
        setData([...data,{event:_item,date:date}]);
        
        set_Item('');
        closeAll();
    }

    function getData(key){
        if(data){
           return  localStorage.getItem(key);  
        }
        
        
        
    }

    const name = Userfront.idToken
    console.log(name)

    // test
    function renderFn({location}){
        if(!Userfront.accessToken()){
          return(
            <Redirect to={{pathname:'/',state:{from:location} }}/>
          )
        }
        const userData = JSON.stringify(Userfront.user,null,2);
        
        return(
            <div>
                <div className={style.dashboard}>
                    <div className={style.dashboard_1}></div>
                    <div className={style.dashboard_2}>
                    <button onClick={openModal}>Add Event</button>
                        {data.map(i=>(
                        <div className={style.box}>
                            <h5>{i.date}</h5>
                            <p>{i.event}</p>
                        </div>  
                        ))}
                        {name.name}
                    </div>
                </div>
                <div className={start? style.formModalActive : style.formModal}>
                    <form onSubmit={saveData} className={style.dataForm}>
                        <h3>What did you do today?</h3>
                        <textarea value={_item} onChange={getValue} type="text"/>
                        <input value={date} onChange={getDate} type="date"/>
                        <button>Add Event</button>
                    </form> 
                </div>
                
                {/* modalBac */}
                <div onClick={closeAll} className={start ? style.modalBacActive : style.modalBac}></div>
            
            </div>
          
        )
        
        // const userData = JSON.stringify(Userfront.user,null,2); 
        // return(
        //   <div>
        //     <pre>{userData}</pre>
        //     <button>{Userfront.logout}</button>
        //   </div>
        // )
    }
    // test
   
    return (
    
        <Route  render={renderFn} />
        
    )
}

export default DashBoard
