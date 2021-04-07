import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Results extends Component {
    render() {
        const r = this.props.result;
        return (
            <div>
                
                <div className="card mb-3 " >
                <div className="card-header text-white bg-dark" >
                    <h5><strong>Sybmbol: </strong>{r.symbol}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item text-white bg-secondary"><strong>Company: </strong>{r.name}</li>
                    <li className="list-group-item text-white bg-secondary"><strong>Region: </strong>{r.region}</li>
                    <li className="list-group-item text-white bg-secondary"><strong>Currency: </strong>{r.currency}</li>
                    <li className="list-group-item text-white bg-secondary"><strong>Type: </strong>{r.types}</li>
                </ul>
                </div>
                <Link className="" id="results" to={`/qouteendpoint/${r.symbol}`}> 
                <ol className="list-group card mb-3">
                <div className="card-header text-white bg-dark text-" >
                    <h5><strong>Sybmbol: </strong>{r.symbol}</h5>
                </div>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto ">
                    <div className="fw-bold ">Company:</div>
                    {r.name}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Region:</div>
                    {r.region}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Currency:</div>
                    {r.currency}
                    </div>
                </li>
                <li className="list-group-item d-flex  justify-content-between align-items-start bg-light">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">Type:</div>
                    {r.types}
                    </div>
                </li>
                </ol>                
                </Link>
            </div>
        )
    }
}
