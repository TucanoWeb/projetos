import { Component } from "react";
import MensageError from "./MensageError";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            msgErrorInfo: ''
        }
    }


    static getDerivedStateFromError(error)  {

       return { hasError: true, msgErrorInfo: error}

    }

    componentDidCatch(error, errorInfo) {

        console.log('Erro',error)
        console.log('Info', errorInfo)

    }


    render() {


        const { hasError, msgErrorInfo } = this.state


        if (hasError) {

            return <MensageError />    

        } else {

            return this.props.children

        }


    }
}

export default ErrorBoundaries