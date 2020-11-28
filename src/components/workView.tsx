import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "./layout"
import WorkImages from "./workImages"

type WorkViewProps = {
  data: any
}

const Container = styled.div``
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 48px;
  p {
    margin: 10px 0;
    max-width: 500px;
  }
  a {
    padding-right: 50px;
  }
`

const WorkView = (props: WorkViewProps) => {
  const {
    title,
    description,
    tech_used,
    image,
    type,
    url,
    images,
  } = props.data.worksJson
  return (
    <Layout>
      <Container>
        <Info>
          {url ? (
            <>
              <a href={url}>
                <h1>{title}</h1>
                <p>{type}</p>
                <p>Technologies Used: {tech_used}</p>
              </a>
            </>
          ) : (
            <div>
              <h1>{title}</h1>
              <p>{type}</p>
              <p>Technologies Used: {tech_used}</p>
            </div>
          )}
          <p>{description}</p>
        </Info>
        <WorkImages images={images} />
      </Container>
    </Layout>
  )
}

export default WorkView

export const query = graphql`
  query workQ($id: String!) {
    worksJson(id: { eq: $id }) {
      title
      type
      tech_used
      description
      url
      image
      images {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
