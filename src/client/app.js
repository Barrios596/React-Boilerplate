import React from 'react'
import {connect} from 'react-redux';
import {defaultF} from '../actions';

class App extends React.Component {

    componentDidMount(){
        this.props.defaultF()
    }

    render() {
        return <div>Bienvenido al Boilerplate de React</div>
    }
}

function mapStateToProps(state){
    return{
        default: state.default
    }
}

export default connect(mapStateToProps, {defaultF})(App);