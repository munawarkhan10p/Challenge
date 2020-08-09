import React from 'react';

import { percentageFormatter } from '../../helpers/Formatter';

import './row.scss';

interface IRowProps {
  value: string;
  label: string;
  numeric?: boolean;
  currency?: string;
  percentChange?: 'increase' | 'decrease' | '';
}

function Row({ numeric, value, label, currency, percentChange }: IRowProps): JSX.Element {
  let analyticsValue = value;

  if (numeric) {
    if (percentChange === 'decrease' || percentChange === 'increase') {
      analyticsValue = percentageFormatter(parseFloat(value));
    } else {
      analyticsValue = `${Number(value).toFixed(0)} ${currency}`;
    }
  }

  return (
    <div className={numeric ? 'row numeric' : 'row'}>
      <div className={`value ${percentChange}`}>{analyticsValue}</div>
      <div className="label">{label}</div>
    </div>
  );
};

export default Row;
