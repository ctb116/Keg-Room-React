import React from 'react';
import Logo from './Logo';


function Header(){


  return (
    <div>
      <style jsx>{`
        
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          height: 280px;
          width: 100%;
          overflow: hidden;
          margin-bottom: 10px;
        }

      `}</style>
    <Logo/>

    </div>

  );
}

export default Header;