import { Dispatch, SetStateAction } from 'react';

interface ButtonAreaProps {
    isCompleteScreen: boolean;
    setIsCompleteScreen: Dispatch<SetStateAction<boolean>>;
}

const ButtonArea: React.FC<ButtonAreaProps> = ({ isCompleteScreen, setIsCompleteScreen }) => {
    return (
        <div className="btn-area">
            <button
                type="button"
                className={`secondaryBtn ${isCompleteScreen === false && 'active'}`}
                onClick={() => setIsCompleteScreen(false)}
            >
                Todo
            </button>
            <button
                type="button"
                className={`secondaryBtn ${isCompleteScreen === true && 'active'}`}
                onClick={() => setIsCompleteScreen(true)}
            >
                Completed
            </button>
        </div>
    );
};

export default ButtonArea;
