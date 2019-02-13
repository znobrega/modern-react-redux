import React from 'react'

class SearchBar extends React.Component{
    
    state = { term: '' }

    onFormSubmit = event => {
        event.preventDefault()
        
        this.props.onFormSubmit(this.state.term)
        //console.log(this.state.term)
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={ (e) => this.setState({ term: e.target.value }) }
                            placeholder="Video search"
                        />                        
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar