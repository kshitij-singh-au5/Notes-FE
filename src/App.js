import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Form from './components/Form'
import Note from './components/Note'


function App() {

  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const Counter = (count) => {
    return setCount(count)
  }

  useEffect(() => {

    const getData = async () => {
      try {
        let res = await Axios.get('http://localhost:5000/data')
        setData(res.data)

      }
      catch (err) {
        console.log(err)
      }

    }
    getData();

    // const interval = setInterval(() => { getData() }, 250)
    // return () => { clearInterval(interval) }
  }, [count])
  console.log("counter var", count)

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
