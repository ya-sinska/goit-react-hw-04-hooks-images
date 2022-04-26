import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled"
export const  ImageGalleryItem =({photo, onImageClick})=> {
    const { webformatURL, tags, largeImageURL} = photo;
     return (
    <GalleryItem>
             <GalleryImage src={webformatURL}
                 alt={tags}
                 data-source={largeImageURL}
                 onClick={(e) => onImageClick(e.currentTarget.dataset.source)} />
    </GalleryItem> 
    )   
    }
    
ImageGalleryItem.propTypes = {
    onImageClick: PropTypes.func,
    photo:PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string
  }).isRequired,
}