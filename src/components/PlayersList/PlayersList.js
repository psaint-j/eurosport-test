import React from 'react'
import PropTypes from 'prop-types';
import withPlayers from '../hoc/withPlayers'
import PlayerCard from '../PlayerCard'
import styled from 'styled-components'


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`


export const PlayersList = ({ data, isLoading }) => {

  if (isLoading)
    return <div>...Loading</div>
  return (
    <Wrapper>
      {data.players.map((data, el) => <PlayerCard key={el} player={data}/>)}
    </Wrapper>
  )
}


PlayersList.propTypes = {
  data: PropTypes.shape({
    players: PropTypes.array,
  }),
  isLoading: PropTypes.bool,
}

export default withPlayers(PlayersList)
