import React, { Component } from 'react';
class Getcall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch("http://localhost:80/get/formdata")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                this.setState({
                    isLoaded: true,
                    items: json,

                })
            })
    }
    render() {

        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>loading....</div>;
        }
        else {
            return (

                <div>
                    data has been loaded
                </div>
            )
        }
    }
}
export default Getcall;