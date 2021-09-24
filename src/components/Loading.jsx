// CONFIG IMPORTS
import ReactLoading from 'react-loading';
 
const Loading = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={33} width={33} />
);
 
export default Loading;