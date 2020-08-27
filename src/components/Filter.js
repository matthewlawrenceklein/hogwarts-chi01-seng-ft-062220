import React from 'react';


class Filter extends React.Component {
    render(){
    return (
        <div className='filterWrapper'>
        <div className='ui menu'>
            <div className='item'>
            <label>Sort by </label>
            </div>
            <div className='ui item'>
            <select onChange={ this.props.handleFilter }
                className='ui selection dropdown'
                name='sort'
                // onChange={}
                // value={}
            >
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
            </div>
            <div className='item'>
            <label>Greased Pigs Only?</label>
            </div>
            <div className='item'>
            <input onChange={ this.props.sortGreased }
                className='ui toggle checkbox'
                // checked={}
                // onChange={}
                type='checkbox'
            />
            </div>
            <div className='ui right menu'>
            <div className='item'>
                <button
                className='ui blue basic button compact'
                // onClick={}
                >
                Hidden Hogs
                </button>
            </div>
            </div>
        </div>
        </div>
    );
    }
    };

export default Filter 