import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Gallery } from "./ImageGallery.styled";


export const ImageGallery = ({ photos, onClickImageItem }) => (
  <Gallery>
    {photos.map(({ id, webformatURL, tags }) => (
      <ImageGalleryItem
        key={id}
        id={id}
        tags={tags}
        smallUrl={webformatURL}
        onClickImageItem={onClickImageItem}
      />
    ))}
  </Gallery>
);
