import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export const VisibilityControl = props => {
  return (
    <div className='form-check'>
      <Checkbox
        checked={props.isChecked}
        onChange={e => props.callback(e.target.checked)}
        color='primary'
      />
      <label htmlFor='form-check-label'>Show {props.description}</label>
    </div>
  );
};
