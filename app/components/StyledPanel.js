import styled from "styled-components";
import { geologicaSharp } from "../ui/fonts";

const Title = styled.h1`
  font-family: 'geologicaSharp',;
  font-weight: 650;
  color: #cfb9b9;
  text-shadow: -1px 1px 6px #030a4a;
  margin-top: 1vh;
`
 const Panel = styled.div`
  color: #0075e0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border-width: 6px;
  border-style: solid;
  background-color: #4e4e4e;
`

export function StyledPanel({children, direction, borderCol}) {
    return(
        <Panel style={{flexDirection: direction, borderColor: borderCol}}>
            {children}
        </Panel>
    )
}