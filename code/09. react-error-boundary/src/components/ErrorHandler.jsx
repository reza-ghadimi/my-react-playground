import { Component } from 'react';
// import Toast from './Toast.jsx';

class ErrorHandler extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
            errorMessage: null,
        };
    }

    componentDidCatch(error) {
        console.error(`componentDidCatch: ${error.message}`);

        this.setState({
            hasError: true,
            errorMessage: error.message || 'Something went wrong!'
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div style={{ padding: '1rem', textAlign: 'center' }}>
                        <h2>Something went wrong!</h2>
                        <p>We are working on fixing it.</p>
                    </div>
                </>
            );
        }

        return this.props.children;
    }
}

export default ErrorHandler;
