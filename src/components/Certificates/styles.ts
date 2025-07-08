import styled from "styled-components";


export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .certificate {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: #fff;
      
    .card-link {
        text-decoration: none;
        color: inherit;
        display: block;
        transition: transform 0.2s;
        
        &:hover {
            transform: translateY(-5px);
        }
        }

      &:hover {
        transform: translateY(-5px);
        background-color: var(--pink);
      }

      .cert-image {
        width: 100%;
        max-width: 300px;
        border-radius: 1rem;
        margin-bottom: 1.5rem;
        object-fit: cover;
      }

      .body {
        h3 {
          margin-bottom: 1.2rem;
          font-size: 1.8rem;
        }

        p {
          font-size: 1.4rem;
          letter-spacing: 0.12rem;
          margin-bottom: 1.5rem;
        }

        .project-links {
          display: flex;
          justify-content: center;
          gap: 1rem;

          a > img {
            width: 3rem;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    .certificate {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .certificate {
      grid-template-columns: 1fr;
    }
  }
`;
