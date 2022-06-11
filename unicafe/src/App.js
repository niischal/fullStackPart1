import {useState} from 'react';

const App= ()=>{
    const[good,setGood]=useState(0)
    const[neutral,setNeutral]=useState(0)
    const[bad,setBad]=useState(0)

    return(
        <div>
            <h1>give feedback</h1>
            <Button onClick={()=>setGood(good+1)} value='good'/>
            <Button onClick={()=>setNeutral(neutral+1)} value='neutral'/>
            <Button onClick={()=>setBad(bad+1)} value='bad'/>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
            
        </div>
    )
}

const Statistics =({good,neutral,bad})=>{
  const allClicks=good+neutral+bad
  const average=(good*1+bad*-1+neutral*0)/(allClicks)
  const positive=(good*100)/(allClicks)
  if (allClicks===0){
    return(
      <p>No feedbacks given</p>
    )
  }
  return(
    <div>
      <StatisticLine name='good' value={good}/>
      <StatisticLine name='neutral' value={neutral}/>
      <StatisticLine name='bad' value={bad}/>
      <StatisticLine name='all' value={allClicks}/>
      <StatisticLine name='average' value={average}/>
      <StatisticLine name='positive' value={positive}/>
    </div>
)
}
const Button = ({onClick,value}) =>{
  return(
    <button onClick={onClick}>{value}</button>
  )
}

const StatisticLine = ({name,value}) => {
  return(
    <table>
      <tbody>
      <tr>
        <td>{name}</td>
        <td>{value}</td>
      </tr>
      </tbody>
    </table>
  )
}
export default App;