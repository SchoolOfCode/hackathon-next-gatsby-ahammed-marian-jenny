
import { useState, useEffect } from 'react';
import Navbar from "../src/components/Navbar";
import style from "../styles/useEffect.module.css"
import styles from '../styles/about.module.css'

export default function StarInput() {
    const [nameInput, setNameInput] = useState(false);
    const [post, setPost] = useState([]);
    console.log(nameInput);

    function submitHandler(e) {
        e.preventDefault();
        setNameInput(e.target[0].value);
    }
    useEffect(() => {
        if (!nameInput) {
            return;
        }
        async function getApi() {
            let url = `https://poetrydb.org/author/${nameInput}`;

            const response = await fetch(`${url}`);
            const data = await response.json();
            if (data.status === 404) { console.log("error") }
            else {
                setPost(data)
            }
          
        }
        getApi()
    }, [nameInput])

  
    return (
        <div>
            <Navbar/>
        <form className={style.form} onSubmit={submitHandler}>
            <input placeholder="Author"/>
            <button>Search for Title</button>
        </form>
        <ul className={styles.listItem }>
        {post.map((e, index)=>{
                if(index < 10){
                    return <li className={ styles.li} key={index}> {e.title}</li> 
                }   
            }
            )}
        </ul>
        </div>
    )
}


