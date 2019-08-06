import React from 'react'
import withPlayers from '../hoc/withPlayers'
import PlayerCard from '../PlayerCard'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`


const PlayersList = ({ data, isLoading }) => {

  if (isLoading)
    return <div>...Loading</div>
  return (
    <Wrapper>
      {data.players.map((data, el) => <PlayerCard key={el} player={data}/>)}
    </Wrapper>
  )
}


export default withPlayers(PlayersList)
