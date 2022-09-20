import placeholderImage from '~/assets/images/placeholder.jpg';

const Image = ({ src = placeholderImage, alt = '', className, ...props }) => {
  return <img src={src} alt={alt} className={className} {...props} />;
};

export default Image;
