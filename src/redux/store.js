import { createStore } from 'redux';
import Reducers from './reduces/index';

const Store = createStore(Reducers);

export default Store;
