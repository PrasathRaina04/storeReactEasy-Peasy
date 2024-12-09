import {createStore, persist} from 'easy-peasy';
import { appStoreModel } from './Models';
export const store =createStore(persist (appStoreModel));
