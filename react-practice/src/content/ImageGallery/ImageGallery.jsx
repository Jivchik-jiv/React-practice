import React from "react";
import styles from "./ImageGallery.module.css";
import { galleryApi } from "./../../services/api";
import SearchBar from "./SearchBar";
import ImageGalleryItem from "./ImageGalleryItem";
import GalleryButton from "./GalleryButton";
import GalleryLoader from "./GalerryLoader";

class ImageGallery extends React.Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false


  };

  componentDidMount() {
    galleryApi.fetchImages().then((images) => {
      this.setState({ images });
    });
  }

  handleSubmit = (query) => {
    this.setState({query, isLoading: true})
    galleryApi.fetchImages(query)
    .then((images) => {
        this.setState({ images });
      })
    .finally(()=>{
        this.setState({isLoading: false})
    })
  }

  handleDownloadMore = () => {
      const {query, page} = this.state;
      this.setState({query, isLoading: true})
      galleryApi.fetchImages(query, page+1)
      .then((newImages)=>{
        this.setState(prevState=> ({
            images: [...prevState.images, ...newImages],
            page: prevState.page +1
        }))
      })
      .finally(()=>{
        this.setState({isLoading: false})
    })
  }

  render() {
    return (
      <div className={styles.gallery}>
        <h1>Image Gallery</h1>
        <SearchBar onSubmit = {this.handleSubmit}/>
        <ul className={styles.galleryWrap}>
          {this.state.images.map(({ id, webformatURL, largeImageURL }) => {
            return (
                <ImageGalleryItem key={id} webformatURL = {webformatURL} largeImageURL = {largeImageURL}/>
            );
          })}
        </ul>
        {this.state.query&&!this.state.isLoading &&<GalleryButton onDownloadMore = {this.handleDownloadMore}/>}
        {this.state.isLoading&&<GalleryLoader/>}
      </div>
    );
  }
}

export default ImageGallery;
