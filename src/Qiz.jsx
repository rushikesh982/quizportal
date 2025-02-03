import React from "react";


export default function Qiz(){
    return(
        <>
            <div className="container text-center header text-capitalize mt-5 pt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 className="">my quiz portal</h1>
                    </div>
                </div>
                <hr/>
                <div className="row p-3 fw-bold pb-4">
                    <div className="col-4">total marks</div>
                    <div className="col-4">que count:100/1</div>
                    <div className="col-4">time 100 min</div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="row mt-3">
                        <div className="col-12 question">
                            <h2>which of the following correct name of react js ?</h2>
                            <ol className="list-group mt-4 mb-3">
                                <li className="list-group-item"><input type="radio"/> react</li>
                                <li className="list-group-item"><input type="radio"/> react</li>
                                <li className="list-group-item"><input type="radio"/> react</li>
                                <li className="list-group-item"><input type="radio"/> react</li>
                            </ol>
                        </div>
                            <div className="btn col-12 p-3">next</div>
                    </div>
                </div>
            </div>
        </>
    )
}