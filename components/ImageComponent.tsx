/* eslint-disable @next/next/no-img-element */
// components/ImageComponent.tsx

import { urlForImage } from '@/sanity/lib/image';

interface ImageComponentProps {
  value: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
}

const ImageComponent = ({ value }: ImageComponentProps) => {
  if (!value?.asset?._ref) {
    // Handle missing image reference
    return <p>Image not available</p>;
  }

  // Generate the image URL using the urlForImage function
  const imageUrl = urlForImage(value.asset).url();

  // Handle cases where imageUrl cannot be generated
  if (!imageUrl) {
    return <p>Unable to load image</p>;
  }

  // Use provided alt text or default to an empty string
  const altText = value.alt || '';

  return <img src={imageUrl} alt={altText} />;
};

export default ImageComponent;
