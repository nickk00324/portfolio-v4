import React from "react"
import styled from "styled-components"
import Face from "./face"

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .about-desc {
    max-width: 700px;
    margin-top: 24px;
  }
`

const About = () => {
  return (
    <>
      <Flex>
        <h1>About Nick Kochornswasdi</h1>
        <section className="about-desc">
          <p>
            Nick Kochornswasdi is multi-disciplinary artist, designer, and
            software engineer.
          </p>
          <p>
            His work as an artist deals primarily in painting, poetry, and
            performance. His practice investigates the intersection of
            belonging, possibility, and love, in an effort to imagine a more
            just and equitable world.
          </p>
          <p>
            As an engineer he is interested in exploring the possibilities that
            potentially exist in technology to improve the lives of people and
            again, create a more just and equitable world.
          </p>
          <p>
            For inquiries about hiring, or if you just want to chat{" "}
            <a href="mailto:nickkochornswasdi@gmail.com">email me here</a>
          </p>
        </section>
      </Flex>
      <Face />
    </>
  )
}

export default About
