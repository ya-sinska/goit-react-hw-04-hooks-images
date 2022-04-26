import PropTypes from 'prop-types';
import { Gallery, Container } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({photos, openModal})=> {
return (
   <Container>
       <Gallery>
           {photos.map(photo =>
               <ImageGalleryItem key={photo.id}
                photo={photo} onImageClick={openModal} />
           )}
       </Gallery>                
   </Container>)
}
ImageGallery.propTypes = {
    photos: PropTypes.array,   
}