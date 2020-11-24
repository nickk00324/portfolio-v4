import React from "react"
import styled from "styled-components"
import pic1 from "../images/me_and_mr_husky.jpg"
import pic2 from "../images/rip_mr_husky.jpg"

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 64px;
  img {
    width: 500px;
  }
  .pic2 {
    margin-top: 100px;
  }
  .pic1 {
    margin-bottom: 100px;
  }
  .quote {
    margin-top: 300px;
    padding: 0 10px;
  }

  @media only screen and (max-width: 820px) {
    .quote {
      margin-top: 50px;
    }

    .pic1 {
      margin-bottom: 50px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }
`

const Landing = () => {
  return (
    <Main>
      <img className="pic1" src={pic1} />
      <div className="quote">"rip mr. husky" - nick kochornswasdi</div>
      <img className="pic2" src={pic2} />
    </Main>
  )
}

export default Landing
