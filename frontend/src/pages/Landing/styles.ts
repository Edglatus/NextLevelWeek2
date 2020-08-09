import styled from 'styled-components';

export const LandingPage = styled.div`
    display: flex;
    justify-content: space-around;
    margin: auto;
    padding: 1rem 0;

    color: var(--color-text-in-primary);
    background: var(--color-background);

    span {
        font-size: 1rem;
        text-align: center;

        display: flex;
        margin: auto;
        align-items: center;
        justify-content: space-around;
        width: 100%;

        img {
            margin-left: 0.8rem;
        }
    }

    .hero-image {
        width: 100%;
    }

    @media (min-width: 1100px) {
        #page-landing-content {
            max-width: 1100px;

            display: grid;
            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;

            grid-template-areas:
                "logo img img"
                "btn btn total"
            ;
        }

        .logo-container {
            grid-area: logo;
            align-self: center;
            margin: 0;

            h2 {
                text-align: initial;
                font-size: 3.6rem;
            }

            img {
                height: 100%;
            }
        }

        .hero-image {
            grid-area: img;
            align-self: center;
            justify-self: end;
        }

        .button-container {
            grid-area: btn;
            justify-content: flex-start;

            a {
                font-size: 2.4rem;
            }
        }

        .total-connections{
            grid-area: total;

            font-size: 1.4rem;
            justify-self: end;
        }
    }
`;

export const LandingHeader = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    img {
        height: 7rem;
    }
    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

    margin: 3.2rem 0;

    a {
        width: 30rem;
        height: 10.4rem;
        border-radius: 0.8rem;

        font: 700 2.0rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        color: var(--color-button-text);

        img {
            width: 4rem;
            margin-right: 1.4rem;
        }

        &.study {
            background: var(--color-primary-light);

            &:hover {
                background: var(--color-primary);
            }
        }

        &.teach {
            background: var(--color-secondary);

            &:hover {
                background: var(--color-secondary-dark);
            }
        }

        transition: background-color 0.2s;

        & + a {
            margin-left: 1.6rem;
        }
    }
`;
