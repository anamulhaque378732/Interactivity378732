import './App.css';
import QueueingSeriesOfStateUpdates from './Component/QueueingSeriesOfStateUpdates';

function App() {

  // const handleClocked = () => {
  //   console.log("button clicked");

  // }
  return (
    <>
      {/* <button onClick={handleClocked} className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl">
        I don't do anything
      </button>
      <button onClick={() => console.log("plz clicked")
      } className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl">
        I don't do anything
      </button>
      <button onClick={function clicked() {
        console.log('clicked me');
      }} className="btn text-2xl bg-amber-200 p-2 m-2 border rounded-2xl">
        I don't do anything
      </button > */}

      {/* <Toolbar></Toolbar> */}

      {/* <Propagation></Propagation> */}

      {/* <StopPropagation></StopPropagation> */}

      {/* <PreventDefault></PreventDefault> */}


      {/* <State></State>
        <State2></State2> */}
      {/* 
      <StateAsSnapshot></StateAsSnapshot> */}
      <QueueingSeriesOfStateUpdates></QueueingSeriesOfStateUpdates>



    </>
  )
}

export default App
