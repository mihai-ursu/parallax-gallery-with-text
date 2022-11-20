export default interface ParallaxGalleryProps {
  galleries: Gallery[];
}

export interface Gallery {
  galleryName: string;
  order: number;
  images: {
    name: string;
    src: string;
  }[];
}
