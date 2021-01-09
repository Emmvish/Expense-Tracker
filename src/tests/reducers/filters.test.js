import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test("Default State object returned by Filters Reducer",()=>{
    // Use redux dev tools to find type of action required to setup default state. @@INIT
    const state = filtersReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Set SortBy to Amount in state',()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT', sortBy: 'amount'})
    expect(state.sortBy).toBe('amount')
})

test('Set SortBy to Date in state',()=>{
    const sendState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filtersReducer(sendState,{type:'SORT_BY_DATE', sortBy: 'date'})
    expect(state.sortBy).toBe('date')
})

test('Set Text Filter',()=>{
    const state = filtersReducer(undefined,{type: 'SET_TEXT_FILTER', text: 'ABCD'});
    expect(state.text).toBe("ABCD")
})

test('Set Start Date Filter',()=>{
    const state = filtersReducer(undefined,{type: 'SET_START_DATE', startDate: 1000});
    expect(state.startDate).toBe(1000)
})

test('Set End Date Filter',()=>{
    const state = filtersReducer(undefined,{type: 'SET_END_DATE', endDate: 1000});
    expect(state.endDate).toBe(1000)
})