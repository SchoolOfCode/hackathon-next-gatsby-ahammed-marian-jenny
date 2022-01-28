
import {useState, useEffect} from 'react';

export default function StarInput() {
    const [nameInput, setNameInput] = useState(false);
    const [post, setPost] = useState([]);
    console.log(nameInput);

    function submitHandler(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(e.target.value);
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
          setPost(data)
        }
        getApi()
    }, [nameInput])
    return (
        <div>
        <form className='form-submit' onSubmit={submitHandler}>
            <input placeholder="Author"/>
            <button>Search for Title</button>
        </form>
        <ul>
        {post.map((e, index)=>{
            if(index < 10){
                return <li key={index}> {e.title}</li> 
            }   
        }
        )}
        </ul>
        </div>
    )
}


