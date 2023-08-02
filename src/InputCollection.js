import InputItem from './InputItem';
import { useSelector } from 'react-redux';

const inputCollectionStyle = {
  position: 'absolute',
  top: '184px',
  left: '104px',
  border: '1px solid black'
};

function InputCollection() {
  const elements = useSelector(state => state.input && state.input.value);
  return (
    <div style={inputCollectionStyle}>
      {elements &&
        elements.map((element, index) => (
          <InputItem
            element={element}
            index={index}
            key={`${element}${index}`}
          />
        ))}
    </div>
  );
}

export default InputCollection;
