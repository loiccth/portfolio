import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './components/home/Home'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route path='*'><NotFound /></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App
