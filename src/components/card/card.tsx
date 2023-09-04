import "./card.scss";

interface Props {
  img?: string;
  title?: string;
  description?: string;
  price?: number;
}

const Card = ({ img, title, description, price }: Props) => {
  console.log(img, title, description, price);

  return (
    <div className="card">
      <div className="card-image">
        <img src={img} alt={title} />
      </div>
      <div className="card-body">
        <label className="price">$ {price}</label>
        <span className="title">{title?.slice(0, 36)}...</span>
        <h5 className="desc">{description?.slice(0, 20)}...</h5>
      </div>
    </div>
  );
};

export default Card;
