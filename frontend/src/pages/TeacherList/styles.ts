import styled from 'styled-components';

export const ListPage = styled.div`
    width: 100vw;
    height: 100vh;

    main {
        width: 90%;
        margin: 2.4rem auto;
    }

    @media (min-width: 700px) {
        max-width: 100%;

        main {
            max-width: 740px;

            padding: 3.2rem 0;
            margin: 0 auto;
        }
    }

    @media (min-width: 1000px) {

        main {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(36rem, 1fr));
            column-gap: 16px;

            max-width: 1080px;

        }
    }
`;

export const ListForm = styled.form`
    margin-top: 3.2rem;

    label {
        color: var(--color-text-in-primary);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        align-self: end;

        width: 100%;
        height: 5.6rem;
        margin-top: 2.8rem;

        border: 1px solid var(--color-in-white);
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

    @media (min-width: 700px) {
        display: grid;
        align-self: center;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -2.5rem;

        width: 100%;
        max-width: 1080px;

        div + div {
            margin-top: 0;
        }

        button {
            margin-top: 0rem;
        }

    }

    @media (min-width: 1000px) {
        width: 120%;
    }
`;

