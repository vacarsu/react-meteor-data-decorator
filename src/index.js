import { createContainer } from 'react-meteor-data';
/* 
  This decorator creates a redux container which supplies the state keys which were asked for
  ex: 
    @DimState([
      'test'
    ])
    class HomePage extends Component {
      constructor(props) {
        super(props);
      }
    }
*/
export function MeteorContainer(cb) {
  return function(target) {
    return createContainer(cb);
  }
}