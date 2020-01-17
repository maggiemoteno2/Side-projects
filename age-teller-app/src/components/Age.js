import React, { Component } from 'react'
import {Form,FormControl,Button} from 'react-bootstrap'

export default class Age extends Component {
    render() {
        return (
            <div className="container">
                <Form inline>
                    <h2>Input your birthday</h2>
                    <FormControl type='date'>  
                    </FormControl>
                    {' '}
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
