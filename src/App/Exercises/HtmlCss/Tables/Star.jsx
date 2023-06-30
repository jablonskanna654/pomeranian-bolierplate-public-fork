import star from './star.svg';
const Star = new Array(numOfStars).fill(<img src={star} alt="rating star" />);
const grayStars = new Array(5 - numOfStars).fill(
  <img src={star} alt="rating star" style={{ filter: 'grayscale(1)' }} />
);
export default Star;
