import styled from 'styled-components'
import { COLORS } from 'src/constants'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  width: 100%;
`
export const Text = styled.div`
  display: flex;
  background-color: ${COLORS.white};
  height: 35px;
  border-radius: 5px;

  input {
    border: none;
    padding-left: 5px;
    font-size: 14px;
    border-radius: 10px;
    width: 255px;
  }

  img {
    padding: 5px;
    padding-left: 10px;
    width: 30px;
  }
`
