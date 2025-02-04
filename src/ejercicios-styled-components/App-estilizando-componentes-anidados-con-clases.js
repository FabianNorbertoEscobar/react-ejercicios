import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  background: linear-gradient(20deg, #db7093, #daa357);
  text-align: center;
  border-radius: 0.2em;
  color: #FFF;
  padding: 0.3em;
  margin: 0.3em;
  font-size: 14px;

  h1 {
    color: purple;
  }

  .big {
    font-size: 20px;
    color: black;
  }
`

const App = () => {
  return (
    <div>
      <Header>
        <h1>
          Styled Components
        </h1>
        <div className='big'>
          Ejemplo
        </div>
      </Header>
    </div>
  )
}

export default App