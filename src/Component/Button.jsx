import PropTypes from 'prop-types';

const Button = ({ content }) => {
  return (
    <button className="text-[#cbb58b] border-2 hover:bg-[#cbb58b] hover:text-white duration-200 border-[#cbb58b] px-5 py-2 text-lg">
      {content}
    </button>
  );
};

export default Button;
Button.propTypes = {
  content: PropTypes.string,
};
