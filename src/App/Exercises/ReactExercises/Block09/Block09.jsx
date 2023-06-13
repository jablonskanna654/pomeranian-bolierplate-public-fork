import React from 'react';

import './style.css';
import { Click5 } from '../../../Components/Click5/Click5';
import { SeeOrNot } from '../../../Components/SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 - 13.06.2023</h1>
      <p>Jestem przykładowym komponentem</p>
        <Click5 />
        < hr />
        <MoreOrLess />
        < hr/>
        <SeeOrNot />
    </div>
  );
}
