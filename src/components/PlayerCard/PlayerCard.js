import React from 'react'
import PropTypes from 'prop-types'
import PlayerStats from '../molecule/PlayerStats'
import styled from 'styled-components'


const Wrapper = styled.div`
  margin: 10px;
  background: #ecf0f1;
  height: 340px;
  width: 400px;
  border-radius: 5px;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-family: 'Roboto Condensed', sans-serif;
`

Wrapper.Name = styled.div`
 display: flex;
`

Wrapper.Sex = styled.div`
  margin-left: 10px;
`

Wrapper.Country = styled.div`
  & img {
    width: 50px;
  }
  position: absolute;
  top: 0px;
  right: 0px;
`
Wrapper.Picture = styled.div`

`

const PlayerCard = ({ player }) => {

  return (
    <Wrapper>
      <Wrapper.Picture><img src={player.picture} alt=""/></Wrapper.Picture>
      <Wrapper.Name>{`${player.firstname} ${player.lastname}`}<Wrapper.Sex>{player.sex === 'M' ? <i className="	fa fa-mars"></i> : <i className="fa fa-venus"></i>}</Wrapper.Sex></Wrapper.Name>
      <Wrapper.Country> {player.country && <img src={player.country.picture} alt=""/> }</Wrapper.Country>
      <PlayerStats data={player.data}/>
    </Wrapper>

  )
}

PlayerCard.propTypes = {
  player: PropTypes.shape({
    firstname: PropTypes.string,
    lastname: PropTypes.string,
    sex: PropTypes.string,
    country: PropTypes.shape({
      picture: PropTypes.string,
      code: PropTypes.string,
    }),
    picture: PropTypes.string,
  })
}

export default PlayerCard
