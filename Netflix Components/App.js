import React from 'react'
import Card from './Card';
import sdata from './sdata';

const App = () => {
  return (
    <>
      <h1>LIST OF TOP 3 NETFLIX SERIES IN 2020</h1>
      {sdata.map((val) => {
        return (
          <Card
            imgsrc={val.imgsrc}
            sname={val.sname}
            title={val.title}
            link={val.link}
          />
        );
      })}
    </>
  )
}
export default App
