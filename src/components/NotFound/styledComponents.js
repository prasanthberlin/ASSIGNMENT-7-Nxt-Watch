import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`

export const NotFoundImg = styled.img`
  width: 400px;
`
export const NotFoundHeading = styled.h1`
  color: #0f0f0f;
  font-family: roboto;
  font-size: 20px;
  font-weight: 600;
  margin-top: 35px;
  @media (min-width: 768px) {
    font-size: 30px;
    font-weight: 500;
    margin-top: 35px;
  }
`
export const NotFoundDescription = styled.p`
  color: #1e293b;
  margin-top: 0;
  font-family: roboto;
  font-size: 15px;
  max-width: 300px;
  text-align: center;
  @media (min-width: 768px) {
    max-width: 100%;
    font-size: 13px;
  }
`
