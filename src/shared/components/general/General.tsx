import React from 'react';

import './general.scss';

export enum Currenttype {
  SPACE = 'space',
  NOTE = 'note',
}

interface GereralProps {
  type: Currenttype;
}


function General( value: GereralProps ): JSX.Element {

  return (
    <React.Fragment>
     {value.type ===  Currenttype.SPACE && <div className="space"></div>}
     {value.type === Currenttype.NOTE && <div className="note">No Data Available For Market</div> } 

    </React.Fragment>
  )
}

export default General;
