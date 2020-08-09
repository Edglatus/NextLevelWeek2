import styled from 'styled-components';

export const ListItem = styled.article`
    max-width: 500px;

    margin-top: 2.4rem;

    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;

    background: var(--color-box-base);


    header {
        display: flex;
        align-items: center;

        padding: 3.2rem 2rem;

        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 2.4rem;

            strong {
                display: block;

                font: 700 2.4rem Archivo;
                color: var(--color-text-title);
            }

            span {
                display: block;
                margin-top: 0.4rem;

                font-size: 1.6rem;
            }
        }
    }

    &>p {
        padding: 0 2rem;

        font-size: 1.6rem;
        line-height: 2.8rem;
    }

    footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        border-bottom-right-radius: 0.8rem;
        border-bottom-left-radius: 0.8rem;

        padding: 3.2rem 2rem;
        margin-top: 3.2rem;


        p strong {
            display: block;

            font-size: 1.6rem;
            color: var(--color-primary-dark);
        }

        a {
            display: flex;
            align-items: center;
            justify-content: space-evenly;

            width: 20rem;
            height: 5.6rem;

            background: var(--color-secondary);

            border: 0;
            border-radius: 0.8rem;

            font: 700 1.4rem Archivo;
            color: var(--color-button-text);
            text-decoration: none;

            cursor: pointer;

            &:hover {
                background: var(--color-secondary-dark);
            }
            transition: background-color 0.2s;
        }


    }

    @media (min-width: 700px) and (max-width: 900px)
    {
        header {
            padding: 3.2rem;
        }

        &>p {
            padding: 0 3.2rem;
        }

        footer {
            padding: 3.2rem;

            p strong {
                display: initial;
                margin-left: 1.6rem;
            }

            a {
                justify-content: center;
                width: 24.5rem;
                font-size: 1.6rem;

                img {
                    margin-right: 1.6rem;
                }
            }
        }
    }

`;
