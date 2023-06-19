import './styles.css';

export const Title = (props) => {
  return (
    <div>
      <h2 className="blog-post-title">{props.text}</h2>
    </div>
  );
};
