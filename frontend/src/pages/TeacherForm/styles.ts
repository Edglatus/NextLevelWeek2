import styled from 'styled-components';

export const FormPage = styled.div`
    width: 100vw;
    height: 100vh;

    &>header {
        margin-bottom: 2.4rem;
    }

    @media (min-width: 700px) {
        max-width: 100vw;
        &>header {
            margin-bottom: 0;
        }
    }
`;

export const FormMain = styled.main`
    width: 100%;
    max-width: 74rem;
    overflow: hidden;

    background: var(--color-box-base);
    border-radius: 0.8rem;

    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;

    fieldset {
        border: 0;
        padding: 0 2.4rem;

        & + fieldset {
            margin-top: 6.4rem;
        }

        &>div + div {
            margin-top: 1.4rem;
        }

        legend {
            width: 100%;
            margin-bottom: 2.4rem;
            padding-bottom: 1.6rem;
            border-bottom: 1px solid var(--color-line-in-white);

            font: 700 2.4rem Archivo;
            color: var(--color-text-title);

            div {
                display: flex;
                align-items: center;
                justify-content: space-between;

                button {
                    border: 0;
                    background: none;
                    cursor: pointer;

                    font: 700 1.6rem Archivo;
                    color: var(--color-primary);
                    text-decoration: none;

                    &:hover {
                        color: var(--color-primary-dark);
                    }
                    transition: color 0.2s;
                }
            }
        }
    }

    footer {
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);

        padding: 4rem 2.4rem;
        margin-top: 6.4rem;

        p {
            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 1.4rem;
            line-height: 2.4rem;
            color: var(--color-text-complement);

            img {
                margin-right: 2rem;
            }
        }

        button {
            display: flex;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 5.6rem;
            margin-top: 3.2rem;

            border: 0;
            border-radius: 0.8rem;
            background: var(--color-secondary);
            cursor: pointer;

            font: 700 1.6rem Archivo;
            color: var(--color-button-text);
            text-decoration: none;

            &:hover {
                background: var(--color-secondary-dark);
            }
            transition: background-color 0.2s;
        }
    }

    @media (min-width: 700px) and (max-width: 1000px) {
        margin-top: -1.6rem;

        fieldset {
            padding: 0 6.4rem;
        }

        footer {
            grid-area: d;

            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 4.0rem 6.4rem;

            p {
                justify-content: space-between;
            }

            button {
                width: 20rem;
                margin-top: 0;
            }
        }
    }

    @media (min-width: 1000px) {
        width: 90%;
        max-width: 1080px;

        margin-top: -1.6rem;
        padding-top: 3.4rem;

        form {
            display: grid;
            column-gap: 16px;
            grid-template:
                "main corner" auto
                "side side" auto
                "foot foot" 1fr / 1fr 1fr;
        }

        fieldset {
            grid-area: main;
            padding: 0 2.4rem;

            & + fieldset {
                margin-top: 0;
                grid-area: corner;
            }
        }

        .schedule {
            margin-top: 4.8rem;
            align-self: center;
            grid-area: side;

            legend {
                padding-top: 1.6rem;
                border-top: 1px solid var(--color-line-in-white);
            }
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: space-around;

            grid-area: foot;

            button {
                margin-top: 0;
                width: 50%;
            }
        }
    }
`;

export const ScheduleItem = styled.div`
    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        column-gap: 1.6rem;

        grid-area: c;

        div {
            margin-top: 0;
        }
    }
`;
