const red = {
    color: '#ff0000'
};
const alertHello = () => {
    alert(`Hello`);
};

const Hello = props => <p style={red} onClick={alertHello}>Hello {props.name}</p>;

class RenderJSX extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    changeCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <header>
                    <img className="logo" src="logo.svg" alt="Logo React"/>
                    <h1>Hello React</h1>
                </header>
                <main>
                    <button onClick={this.changeCounter}>{this.state.counter}</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, pariatur!</p>
                    <Hello name="Max"/>
                    <Hello name="Alex"/>
                    <Hello name="John"/>
                </main>
            </div>

        )
    }
}


ReactDOM.render(<RenderJSX/>, document.getElementById('root'));