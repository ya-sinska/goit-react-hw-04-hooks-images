import { useState, useEffect } from "react";
import * as Scroll from 'react-scroll';
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery"
import { LoadMoreBtn } from "../Button/Button"
import { Modal } from "../Modal/Modal"
import {StartSearch} from "../StartSearch/StartSearch"
import { Loader } from "../Loader/Loader"
import { Container } from "./App.styled";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from '../../services/api'
import { notifi } from "../../services/notifi"

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const App = () => {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');
  
  useEffect(() => {
    if (!imageName) {
      return
    }
    async function fetch() {
      try {
        setStatus(Status.PENDING)
        const photos = await fetchImages(imageName, page);
        if (photos.hits.length > 0) {
          setPhotos(prevState => [...prevState, ...photos.hits]);
          setStatus(Status.RESOLVED);
          setTotal(photos.total)
        }
        else {
          setStatus(Status.REJECTED);
          notifi(`Picture ${imageName} didn't find`);
        }
      }
      catch (error) {
        setError(error);
        setStatus(Status.REJECTED)
        notifi(error.massege);
      };
    }
    fetch()
  }, [imageName, page]);

  const LoadMore = () => {
    setPage(prevState =>prevState+1)
    Scroll.animateScroll.scrollMore(300);
  }

  const searchImage = (imageName) => {
    setImageName(imageName);
    setPage(1);
    setPhotos([]);
    Scroll.animateScroll.scrollToTop()
  }
  const openModal = (data) => {
    setModalOpen(prevState => !prevState);
    setModalImage(data);
    }  
    return (
      <Container>
        <ToastContainer />
        <Searchbar onSubmit={searchImage} /> 
        {status === 'idle' && <StartSearch text="Let's make a choise" />}
        {status === 'pending' && 
          <>
          {photos.length!==0 && <ImageGallery photos={photos}
          openModal={openModal} />}  
          <Loader />
          </>
        }       
        {status === 'resolved' && <ImageGallery photos={photos}
          openModal={openModal} />}
        {photos.length !== total && status === 'resolved'&& (<LoadMoreBtn LoadMore={LoadMore} />)}
        {status === 'rejected' && <StartSearch text={error? (error.massege):("Sorry, try again")} />}
        <Modal isModalOpen={modalOpen} onClose={openModal} image={ modalImage}/>
    </Container>
  );
};
