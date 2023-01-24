import React from 'react'
import labels from '../lib/demo.js'
import LabelCard from './LabelCard.jsx'

export default function Labels() {

  return (
    <div >
        {labels.map((item)=>{
        return (
          <LabelCard label={item} key={item.id}/>
        )
        })} 
    </div>
  )
}
