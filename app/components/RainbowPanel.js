
import styled, { keyframes } from 'styled-components'

 const rainbowAnimation = keyframes`
  to {
    --bg-angle: 360deg;
  }
`

export const Rainbow = styled.div`
@property --bg-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: "<angle>";
}
  border-radius: 18px;
  animation: ${rainbowAnimation} 6s infinite linear running;
  background:
    padding-box,
    conic-gradient(
      from var(--bg-angle) in oklch longer hue,
      oklch(1 0.37 0) 0 0
    )
    border-box; 
    border: 6px solid transparent;
    &:hover {
      animation-play-state: paused;
    }
`

export const Article = styled.div`
  color: #0010a0;
  font-size: 3vw;
  font-weight: 575;
  text-align:left;
  padding-left: 2vw;
  border-radius: 18px;
  background-color: #898989;
`

export function StyledRainbowPanel({children}) {
  return(
      <Rainbow>
          <Article>
            {children}
          </Article>
      </Rainbow>
  )
}