import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import './Warehouses.css'
import PageTemplate from '../PageTemplate/PageTemplate';
import localization from '../../assets/localization.png';
import graphic from '../../assets/distribution.png';

class Warehouses extends React.Component 
{
	render() {
		return (
                <PageTemplate page="warehouses">
                    <div className="all">
                        <div className="left">
                            <div className="warehouse-picker">
                                <div className="btn-group">
                                    <div className="dropdown show">
                                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Warehouse 1
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" href="./">Warehouse 2</a>
                                            <a className="dropdown-item" href="./">Warehouse 3</a>
                                            <a className="dropdown-item" href="./">Warehouse 4</a>
                                        </div>
                                    </div>
                                </div>
                                <h1>Company A</h1>
                            </div>
                                <div className="localization">
                                    <img src={localization} alt="Localization" width="40" height="41" />
                                    <p>Rua Aval de Baixo nº158</p>
                                </div>
                                <div className="assets">
                                    <p>Asset's distribution:</p>
                                    <img src={graphic} alt="Graphic" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="table-wrapper-scroll-y my-custom-scrollbar">
                                    <table className="table table-bordered table-striped mb-0">
                                        <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Units in Stock</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="totalAssets">
                                    <h1>Total Assets Value: €110.225,30</h1>
                                </div>

                            </div>
                        </div>
                </PageTemplate>
        );
	}
};

export default Warehouses;