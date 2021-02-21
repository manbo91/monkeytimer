import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* ${(props) => (props.isWorking ? "repeat(3, 1fr)" : "repeat(2, 1fr)")}; */
    gap: 10px;
`;

export const Button = styled.button`
    padding: 10px;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.01);
    border: 3px solid transparent;
    color: white;
    font-weight: 600;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 24px;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    :focus {
        border: 3px solid rgb(255, 255, 255, 0.1);
        outline: none;
    }

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const AddInput = styled.input`
    font-size: 28px;
    font-family: "CasCadia Code PL";
    font-weight: 600;

    padding: 12px 15px;
    background-color: transparent;
    border: 3px solid transparent;
    border-radius: 15px;
    color: rgb(255, 214, 13);
    transition: all 0.3s;

    :focus {
        color: white;
        border: 3px solid rgba(255, 255, 255, 0.3);
        outline: none;
        background-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 500px) {
        font-size: 18px;
    }
`;

export const CaptionButton = styled.div`
    display: inline;
    ${(props) => props.is_on && "color: rgb(255, 214, 10);"}

    transition: all 0.3s;
    cursor: pointer;
`;

export const Caption = styled.div`
    position: absolute;
    top: -20px;
    left: 20px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.3);
`;
