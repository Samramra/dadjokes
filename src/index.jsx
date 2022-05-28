import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';


const App = () => (
  <div className ="container">
   <div className="joke">
   <div className="joke__body">
   <div className="joke__user">
   <img className="user-avatar" src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png" />
            <p className="user-name">Neroxx</p>
     </div>    
  </div>
  </div> 
  </div> 
);

createRoot(
  document.querySelector('#app')
).render(<App />);
