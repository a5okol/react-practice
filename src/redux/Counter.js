import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component {
    render() {
        console.log (this.props);

        return (
            <div style={{padding: 20, border: '1px solid #ccc', margin: 20}}>
                <h1>Counter {this.props.counter}</h1>
                <hr/>
                <div>
                    <button onClick={() => this.props.onChange(1)}>Add</button>
                    <button onClick={() => this.props.onChange(-1)}>Sub</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        counter: state.Counter2.counter2
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onChange: number => dispatch({type: 'ADD2', payload: number})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)