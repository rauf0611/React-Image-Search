import React, { Component } from 'react';



class SearchBar extends Component {
    
        state = { term: '' };

    onInputChange(event) {
        console.log(event.target.value);
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit} >
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={e=> this.setState({term:e.target.value})}
                        />

                    </div>
                </form>
            </div>

        )
    }
}


export default SearchBar;
