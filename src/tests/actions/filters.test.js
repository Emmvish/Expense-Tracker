import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment';

test('Setting up Start Date',()=>{
    const createdAtMoment = moment(0)
    const startDate=setStartDate(createdAtMoment);
    expect(startDate).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Setting up Start Date',()=>{
    const createdAtMoment = moment(0)
    const endDate=setEndDate(createdAtMoment);
    expect(endDate).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Sort By Amount Filter',()=>{
    const sortByData = sortByAmount();
    expect(sortByData).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: "amount"
    })
})

test('Sort By Date Filter',()=>{
    const sortByData = sortByDate();
    expect(sortByData).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: "date"
    })
})

test('Set Default Text Filter',()=>{
    const textFilterData = setTextFilter();
    expect(textFilterData).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Set Text Filter',()=>{
    const textFilterData = setTextFilter("Rent");
    expect(textFilterData).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Rent'
    })
})