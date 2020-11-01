import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form'
import Note from './components/Note'


function App() {

  const [data, setData] = useState([])
  const [count1, setCount] = useState(0)

  const Counter = (count) => {
    setCount(count)
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

    // const interval = setInterval(() => { getData() }, 250)
    // return () => { clearInterval(interval) }
  }, [count1, data.length])
  console.log("counter var", count1)

  const renderForm = (x) => {
    return (<Form data1={Counter}></Form>)
  }

  const renderLink = (routerProps) => {
    let id = parseInt(routerProps.match.params.id)
    console.log("id", id)
    let found = data[id]
    console.log("found", found)
    return (<Note data={found} />)
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={x => renderForm(x)} />

        <Route path='/:id' render={routerProps => renderLink(routerProps)} />
        <Route></Route>
      </Switch>
    </BrowserRouter>

  );

}

export default App;
