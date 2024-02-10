import {PropTypes} from "prop-types";
import { Link } from "react-router-dom";

const CustomButton = ({ButtonText}) => {
  return (
   <Link to="/users">
    <button className="relative  uppercase inline-flex items-center justify-start px-6 py-3 overflow-hidden font-bold transition-all bg-gradient-to-r from-amber-500 to-lime-500 rounded-xl group">
      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-yellow-400 rounded group-hover:-mr-4 group-hover:-mt-4">
        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
      </span>
      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-gradient-to-l from-amber-200 to-lime-500 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
      <span className="relative w-full text-left text-black transition-colors duration-500 ease-in-out group-hover:text-black">
        {ButtonText}
      </span>
    </button>
   </Link>
  );
};


CustomButton.propTypes = {
  ButtonText: PropTypes.string,
}
export default CustomButton;
