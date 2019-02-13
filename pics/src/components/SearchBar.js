import React from 'react'

class SearchBar extends React.Component {
    // onInputChange(event) {
    //     console.log(event.target.value)
    // }

    // inInputClick(event) {
    //     console.log('clicked')
    // }

    
    
    state = {
        term: ''
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // on class based component you have to use this with props
        this.props.onSubmit(this.state.term)
        
    }
    
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                            {
                             // Dont use () when passes a function on callback 
                             // because with () will call when the input initialize
                             // onchange={this.onInputChange}
                            }
                        <input
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })} 
                         />
                        
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar