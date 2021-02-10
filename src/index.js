import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import ContactForm from './components/ContactForm'


export class index extends Component {
    render() {
        return (
            <div>
                <Header/>
                <ContactForm />
            </div>
        )
    }
}

export default index
