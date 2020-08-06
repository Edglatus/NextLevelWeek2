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
`;

export const ListForm = styled.form`
    margin-top: 3.2rem;

    label {
        color: var(--color-text-in-primary);
    }

    div {
        position: relative;

        & + div {
            margin-top: 1.4rem;
        }

        label {
            font-size: 1.4rem;
        }

        input {
            width: 100%;
            height: 5.6rem;
            margin-top: 0.8rem;

            border-radius: 0.8rem;

            background: var(--color-input-background);
            border: 1px solid var(--color-line-in-white);
            outline: 0;
            padding: 0 1.6rem;
            font: 1.6rem Archivo;
        }

        &:focus-within::after {
            width: calc(100% - 2rem);
            height: 2px;
            content: '';
            background: var(--color-primary-light);
            position: absolute;
            left: 1rem;
            right: 1rem;
            bottom: -0rem;
        }
    }

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -25%;

        div + div {
            margin-top: 0;
        }
    }
`;

