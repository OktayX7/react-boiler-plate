import { Button, Link } from "components/base";
import PropTypes from "prop-types";

const Card = ({ title, subtitle, image, href }) => {
  return (
    <div className="card text-bg-dark">
      {image && (
        <div className="card-img-top ">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-subtitle">{subtitle}</div>

        <Link href={href} target="_blank">
          <Button className="my-2">Button</Button>
        </Link>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string,
  id: PropTypes.any,
};

export default Card;
