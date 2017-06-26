/**
 * Created by lnthao on 6/23/2017.
 */
import '../stylesheets/index.scss';
import {PropTypes} from 'react';
import Calendar from 'react-icons/lib/fa/calendar';
import SnowFlake from 'react-icons/lib/ti/weather-snow';
import Terrain from 'react-icons/lib/md/terrain';

const percentToDecimal = (decimal) => {
  return ((decimal * 100) + '%');
};
const calcGoalProgress = (total, goal) => {
  return percentToDecimal(total/goal);
};
export const SkiDayCount = ({total, powder, backcountry, goal}) => (
  <div className="ski-day-count">
    <div className="total-days">
      <span>{total}</span>
      <Calendar/>
      <span>days</span>
    </div>
    <div className="powder-days">
      <span>{powder}</span>
      <SnowFlake/>
      <span>days</span>
    </div>
    <div className="backcountry-days">
      <span>{backcountry}</span>
      <Terrain/>
      <span>days</span>
    </div>
    <div>
          <span>
          {calcGoalProgress(total, goal)}
          </span>
    </div>
  </div>
);
SkiDayCount.defaultProps = {
  total: 50,
  powder:10,
  backcountry:'abc',
  goal:100
};
SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number

}
// export class SkiDayCount extends React.Component{
//   render(){
//     return (
//       <div className="ski-day-count">
//         <div className="total-days">
//           <span>{this.props.total}</span>
//           <span>days</span>
//         </div>
//         <div className="powder-days">
//           <span>{this.props.powder}</span>
//           <span>days</span>
//         </div>
//         <div className="backcountry-days">
//           <span>{this.props.backcountry}</span>
//           <span>days</span>
//         </div>
//         <div><span>{this.props.goal}</span></div>
//       </div>
//     );
//   }
// }
