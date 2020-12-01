import React,{Component} from 'react'; 

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date(), 
            text: "", 
            boolForShould: true,
        }
        console.log("Constructor sets the time as : " + this.state.date);
    }

    componentWillMount(){
        console.log(`componentwillmount sets the time as: ` + this.state.date);
    }

    componentDidMount(){
        console.log(`componentdidmount sets the time as: ` + this.state.date);
        this.timerId = setInterval( () => this.tick(), 1000);
    }

    componentWillUpdate(){ 
        console.log(`Component will update sets the time as: ` + this.state.date);
    }

    componentWillUnmount(){
        console.log(`Component will unmount sets the time as: ` + this.state.date);
        clearInterval(this.timerId);
    }    

    shouldComponentUpdate(){
        console.log(`shouldcomponentupdate` + this.state.date);
        return this.state.boolForShould; 
    }

    componentDidUpdate(){
        console.log(`didupdate: ` + this.state.date);
    }

    tick(){
        this.setState( {
            date: new Date()
        })
    }

    stateHandle = () => {
        console.log("stateHandle sets the time as :" + this.state.date);
        this.setState({
            text: "Updated"
        });
    };

    stateHandle2 = () => {
        console.log("stateHandle2 sets the time as :" + this.state.date);
        clearInterval(this.timerID);
        this.setState({
            text: "Updated and timer has stopped"
        });
    };

    shouldHandle = () => {
        console.log("shouldHandle sets the time as :" + this.state.date);
        this.setState({
            boolForShould: !this.state.boolForShould
        });
    };

    render(){
        return(
            <div>
                <h1>{this.state.text}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
                <button onClick={this.stateHandle}>Change State</button>
                <button onClick={this.stateHandle2}>Change State and stop timer</button>
                <button onClick={this.shouldHandle}>Change shouldCompUpdate</button>
            </div>
        )
    }

}

export default Clock;