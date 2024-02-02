import {Simpsons} from './components/Simpsons'
import {Characters} from "./components/Characters";


const App = () => {
  return (
      <div>

         <Simpsons
             name = {'Homer'}
             surname = {'Simpson'}
             img = {'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
         />

          <Simpsons
              name = {'Marge'}
              surname = {'Simpson'}
              img = {'https://static.wikia.nocookie.net/desimpsons/images/4/4d/MargeSimpson.png'}
          />

          <Simpsons
              name = {'Bart'}
              surname = {'Simpson'}
              img = {'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png'}
          />

          <Simpsons
              name = {'Lisa'}
              surname = {'Simpson'}
              img = {'https://upload.wikimedia.org/wikipedia/en/e/ec/Lisa_Simpson.png'}
          />

          <Simpsons
              name = {'Maggie'}
              surname = {'Simpson'}
              img = {'https://upload.wikimedia.org/wikipedia/en/9/9d/Maggie_Simpson.png'}
          />

          <Characters/>

      </div>
  );
};

export {App};
