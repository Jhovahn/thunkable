import image from './images/ThunkableBeaver.png';
import EditIcon from './images/EditIcon.svg';
import DeleteIcon from './images/DeleteIcon.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { save, deleteItem } from './InputSlice';

const inputItemStyle = {
  width: '800px',
  height: '70px',
  flexShrink: 0,
  backgroundColor: '#F7F7F7',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  borderBottom: '1px solid black',
  borderCollapse: 'collapse',
  alignItems: 'center',
  position: 'relative'
};

const inputStyle = {
  height: '30px',
  width: '186px',
  marginLeft: '25px',
  position: 'absolute',
  left: '49px',
  top: '20px',
  bottom: '18px',
  fontWeight: 'bold'
};

const spanStyle = {
  ...inputStyle,
  marginTop: '5px',
  lineHeight: '30px',
  fontSize: '20px',
  fontStyle: 'normal',
  color: 'rgba(0, 0, 0, 0.7)'
};

const imageStyle = {
  height: '32px',
  width: '32px',
  position: 'absolute',
  left: '24px',
  top: '20px',
  bottom: '18px'
};

const editIconStyle = {
  position: 'absolute',
  left: '220px'
};

const dateStyle = {
  position: 'absolute',
  left: '411px',
  top: '25px',
  fontSize: '14px',
  lineHeight: '30px',
  letterSpacing: 0
};

const deleteIconStyle = {
  position: 'absolute',
  left: '748px',
  top: '27px'
};

function InputItem(element) {
  const [item, setItem] = useState(['', null]);
  const [displayInput, setDisplayInput] = useState(false);
  const dispatch = useDispatch();
  const date = new Date(element.element[1]);
  function handleKeyDown(e) {
    if (e.key === 'Enter' && item[0].replace(/\s+/, '') !== '') {
      dispatch(save(item));
      setItem(['', null]);
      setDisplayInput(false);
    } else if (e.key === 'Escape') {
      setDisplayInput(false);
    }
  }
  return (
    <div style={inputItemStyle}>
      <img src={image} style={imageStyle} />
      {element.element[0] === '' || displayInput ? (
        <span>
          <input
            placeholder="Name your project"
            style={inputStyle}
            onKeyDown={e => handleKeyDown(e)}
            onChange={e => setItem([e.target.value, Date.now()])}
            value={item[0]}
          />
        </span>
      ) : (
        <span>
          <span style={spanStyle}>
            {element.element[0]}{' '}
            <img
              src={EditIcon}
              style={editIconStyle}
              onClick={() => setDisplayInput(true)}
            />
          </span>
          <span
            style={dateStyle}
          >{`${date.toDateString()} ${date.toLocaleTimeString()}`}</span>
          <img
            src={DeleteIcon}
            style={deleteIconStyle}
            onClick={() => {
              if (window.confirm('Are you sure you want to delete?')) {
                dispatch(deleteItem(element.index));
              }
            }}
          />
        </span>
      )}
    </div>
  );
}

export default InputItem;
