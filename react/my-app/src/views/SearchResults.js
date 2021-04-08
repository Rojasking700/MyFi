import React, { Component } from 'react'
import Results from '../components/Results';

export default class SearchResults extends Component {

    constructor(){
        super();

        this.state={
            results : null
        }
    }

    async searchSymbol(e) {
        e.preventDefault()
        console.log("search results mounted")
        let keyword = e.target.keyword.value
        console.log('keyword', keyword)
        let res = await fetch(`http://127.0.0.1:5000/info/search/${keyword}`, {
            method: 'POST'
            // headers: { 
            //     'Content-Type': 'application/json'
            // }
            // body: JSON.stringify({
            //     "keyword" : e.target.keyword.value
            //     // "keyword" : "tesco"
            // })
        });
        let results = await res.json()
        console.log("results JSON", results)
        this.setState({results: results})
        console.log("results", this.state.results)
    }

    
    render() {

        if (Array.isArray(this.state.results)){
            console.log("true",this.state.results)
            return (
                <React.Fragment>
    
                    <div>
                        <div className="container">
                        <form onSubmit={(e) => this.searchSymbol(e)}>
                                <div className="input-group my-4">
                                <input className="form-control" type="search" name="keyword" id="keyword" placeholder="Search symbol" aria-label="Search"/>
                                <button className="btn btn-outline-primary" aria-current="page" type="submit" id="button-addon2">Search</button>
                                </div> 
                            </form>
                            <div className="row">
                                {this.state.results.map( r=> <Results key={r.symbol} result={r}  symbol={this.props.symbol} name={this.props.name} types={this.props.types} region={this.props.region} currency={this.props.currency} matchScore={this.props.matchScore}/> )}
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }else{
            console.log("false",this.state.results)
            return (
                <React.Fragment>
    
                    <div>
                        <div className="container">
                            <form onSubmit={(e) => this.searchSymbol(e)}>
                                <div className="input-group my-4">
                                <input className="form-control" type="search" name="keyword" id="keyword" placeholder="Search symbol" aria-label="Search"/>
                                <button className="btn btn-outline-primary" aria-current="page" type="submit" id="button-addon2">Search</button>
                                </div> 
                            </form>
                            <div className="row">
                                

                                <h1>not available</h1>
                            </div>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }
    }
}
