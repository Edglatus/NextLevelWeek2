import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;

    background: var(--color-primary);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 90%;
        margin: 0 auto;
        padding: 1.6rem 0;

        color: var(--color-text-in-primary);

        a {
            height: 3.2rem;
            transition: opacity 0.2s;

            &:hover {
                opacity: 0.6;
            }
        }

        &>img {
            height: 1.6rem;
        }
    }

    section {
        position: relative;

        width: 90%;
        margin: 3.2rem auto;

        strong {
            font: 700 3.6rem Archivo;
            line-height: 4.2rem;
            color: var(--color-title-in-primary);
        }

        p {
            margin-top: 2.4rem;

            max-width: 30rem;

            font-size: 1.6rem;
            line-height: 2.6rem;
            color: var(--color-text-in-primary);
        }
    }


    @media (min-width: 700px) {
        height: 340px;
        max-height: 30%;

        header {
            max-width: 1100px;
        }

        section {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            flex: 1;
            max-width: 740px;
            margin: 0 auto;
            padding-bottom: 48px;

            p {
                max-width: 80rem;
            }
        }
    }
`;
