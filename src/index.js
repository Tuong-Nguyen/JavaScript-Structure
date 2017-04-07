/**
 * Created by admin1 on 4/7/2017.
 */
import './index.css';

import numeral from 'numeral';

let courseValue = numeral(1000).format('$0,0.00');
console.log(`I would pay ${courseValue} for this awesome course`);
