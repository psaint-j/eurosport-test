import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  margin-top: 5px;
  border-top: 1px solid black;
  display: flex;
`

Wrapper.Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const LastVictory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .fa-check {
    color: green;
  }
  .fa-remove {
    color: red;
  }
`

Wrapper.Rank = styled.div`
`

Wrapper.Weight = styled.div`
`
Wrapper.Height = styled.div`
`
Wrapper.Age = styled.div`
`
Wrapper.Total =styled.div`
  display: flex;
  margin-left: 20px;
  flex-direction: column;
`

const PlayerStats = ({ data }) => {

  return (
    <Wrapper>
      <Wrapper.Container>
        <Wrapper.Rank>
          Rank : {data.rank}
        </Wrapper.Rank>
        <Wrapper.Height>
          height : {data.height / 100} m
        </Wrapper.Height>
        <Wrapper.Weight>
          weight : {data.weight / 1000} Kg
        </Wrapper.Weight>
        <Wrapper.Age>
          Age : {data.age}
        </Wrapper.Age>
      </Wrapper.Container>
      <Wrapper.Total>
        <LastVictory>
          Last : {data.last.map((el, key) => el ? <i  key={`LastVictory-${key}`} className="	fa fa-check"></i> : <i key={`LastVictory-${key}`} className="	fa fa-remove"></i>)}
        </LastVictory>
        <span>wins : {data.last.filter(x => x === 1).length}</span>
        <span>losses : {data.last.filter(x => x === 0).length}</span>
      </Wrapper.Total>
    </Wrapper>
  )
}

export default PlayerStats
