import React,{useState} from 'react';
import './App.css'
import {Home, Header, Footer,SearchPage,Aboutus,NotFound} from './GetComponents';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
   
// This is only for git checking purpose.
const[cursorX,setCursorX]=useState();
  const[cursorY,setCursorY]=useState();
     window.addEventListener('mousemove',(e)=>{
          setCursorX(e.pageX)
        setCursorY(e.pageY)
      });
    return (
        <>
            <div className='app'>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/search'>
                            <SearchPage />
                        </Route>
                        <Route path='/About'>
                        <Aboutus />
                        
                        </Route>
                        <Route path='*'>
                            <NotFound />
                        </Route>
          
                    </Switch>
                    <Footer />
                </Router>
                <div className='cursor'
             style={{
                 left:cursorX + 'px',
                 top: cursorY + 'px'
                  }
                  }
              >
              </div>
              </div>
            
    </>                          
    );
    
} 

export default App;
