import React from 'react'
import { IconsData } from './Icons'
import * as S from "./styled.js"

function StackIcons() {
  return (
    <S.StackIcons>
        <div className='master'>            
            {IconsData.map(set => {
                return(
                    <div className='divIcon'>
                        <div className='divAux'>
                            <img className='icon' src={set.icon}/><h1>{set.title}</h1>
                            <p>{set.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </S.StackIcons>
  )
}

export default StackIcons