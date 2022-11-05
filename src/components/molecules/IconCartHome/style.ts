import styled, { keyframes } from 'styled-components'

const EnterBadge = keyframes`
  from {
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`

export const Container = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Button = styled.button`
  background-color: #fdaa5d;
  border: none;
  width: 32px;
  height: 32px;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  position: relative;
`

export const Badge = styled.div`
  background-color: #ffffff;
  border: 1px solid #fdaa5d;
  color: #fdaa5d;
  padding: 4px;
  height: 18px;
  min-width: 18px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  bottom: -2px;
  left: -4px;
  animation: ${EnterBadge} 0.4s forwards;
`
