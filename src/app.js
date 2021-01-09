import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import 'normalize.css/normalize.css';
// import './styles/styles.scss';
// import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

const JSX = ()=>{
    return (
        <div>
            <Provider store={store}>
                {AppRouter}
            </Provider>
        </div>
    )
}

ReactDOM.render(<JSX />, document.getElementById('app'));
