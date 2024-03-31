import React from 'react'
import '../Button/btn.css'

export default function Button({label}) {
  return (
    <div>
      <button className="button">
    <span className="button_lg">
        <span className="button_sl"></span>
        <span className="button_text">{label}</span>
    </span>
</button>
    </div>
  )
}
