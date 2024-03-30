import "./CrimsonButton.css";
import PropTypes from "prop-types";

function CrimsonButton(props) {
    const { content, onClick, type } = props;

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };
    return (
        <>
            {type === "crimson" && (
                <button className="crimson-button" onClick={handleClick}>
                    {content}
                </button>
            )}
            {type === 'midnightBlue' && <button className="midnightBlue-button" onClick={handleClick}>{content}</button>}
        </>
    );
}

export default CrimsonButton;

CrimsonButton.propTypes = {
    content: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
};
