import PropTypes from 'prop-types';
import { Button } from "./Button.styled";

export const LoadMoreBtn = ({LoadMore})=> {
    return (
        <Button onClick={ LoadMore}>Load more</Button >
)
}

LoadMoreBtn.propTypes = {
    LoadMore: PropTypes.func,
}
