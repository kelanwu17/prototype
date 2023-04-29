import React from 'react'
import {auth} from '../firebase'

const style = {
    button: `btn btn-ghost normal-case text-xl`
}


const LogOut = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <div className="containerWrap flex justify-between logout">
      <button onClick={() => auth.signOut()} className={style.button}>
              Logout
      </button>
    </div>
    
  )
}

export default LogOut