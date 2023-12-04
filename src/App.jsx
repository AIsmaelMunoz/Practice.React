import './App.css'

function App() {
  
  const hello = "hola mundo"

 const saludo = ()=>{
  alert("bienvenido")
 }

  return (
      <div id='app'>
        <img src="/img/ecommerce.webp" alt="" />
        <h1> {hello} </h1>
        para codigo js se usan {} llaves

      <button onClick={saludo}>click aqui</button>

      </div>

      
  )
}

export default App
