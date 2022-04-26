import PropTypes from 'prop-types';
import { StartPage, Image } from "./StartSearch.styled"
export const StartSearch = ({ text }) => {
    return (
        <StartPage>
            {text}
            <Image/>
        </StartPage>
    )
}

StartSearch.propTypes = {
    text: PropTypes.string,
}