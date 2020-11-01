import React, { useState, useEffect } from 'react';
import './Form.css'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function Form(Counter) {

    const [note, setNote] = useState("")
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const { data1 } = Counter
    

    function submitForm(e) {
        e.preventDefault();
        setCount(count + 1)
        data1(count + 1)
        // localStorage.setItem('hello', count + 1)
        Axios.post('https://note-be.herokuapp.com/', { notes: note })
        setNote("")

    }


    useEffect(() => {
        const getData = async () => {
            try {
                let res = await Axios.get('https://note-be.herokuapp.com/data')
                setData(res.data)
            }
            catch (err) {
                console.log(err)
            }

        }

        getData();
    }, [count])
    console.log("data-length", data.length)


    return (
        <>
            <div className="border border-warning rounded" style={{ width: "800px", marginLeft: "350px", marginTop: "60px", padding: "40px" }}>
                <form onSubmit={submitForm}>
                    <textarea className="form-control mt-2 no-border" value={note} onChange={e => setNote(e.target.value)} placeholder="Note"
                        type="text" required />
                    <button type="submit" className="btn btn-outline-warning btn-lg btn-block rounded-pill mt-3 mb-2">Add Note</button>
                </form>
            </div>
            <div className="mt-3" style={{ display: "grid", justifyContent: "center" }}>
                {data && data.map((ele, i) => {
                    return (
                        <div className="mt-4 mb-4" style={{ maxWidth: "200px" }}>
                            <Link to={`/${i}`} target="_blank">

                                <a key={i} href={`https://note-be.herokuapp.com/${i}`} target="_blank" rel="noopener noreferrer">{`tiny.cc.${i}`}</a>

                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    );
}



export default Form;