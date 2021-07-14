import React from 'react';
import Event from '../image/Vaani-Vizha.jpg';
import UnionStudentSidebar from '../UnionSidebar/UnionStudentSidebar';
import Nav from '../Navbar/Navbar';
import Pirith from '../image/Pirith.jpg';
import './ViewFundraising.css';



function ViewFundraising() {
    return (
        <div>
            <div><Nav /></div>
            <div style={{ display: 'flex' }}>
                <UnionStudentSidebar />



                <div className="container container-custom">

                    <h2 style={{ fontFamily: 'Poppins'}} className="text-center">View prepared Fundraising events</h2>
                    <div class="card border-secondary mt-4">
                        <h5 style={{ fontFamily: 'Poppins' }} class="card-header text-center">Ongoing Fundraising</h5>

                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <img src={Pirith} class="card-img m-2" alt="..." />
                            </div>

                            <div class="col-md-8">
                                <div class="card-body m-3">
                                    <h5 class="card-title">Fundraising for the Annual Pirith ceremony</h5>
                                    <p class="card-text">The annual pirith ceremony which is conducted by second year students will be held on Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque modi rem culpa? Iusto dignissimos dicta molestias neque, necessitatibus et repellat perspiciatis? Est numquam labore sequi similique expedita harum asperiores.</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <p class="card-text ml-2"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>

                        <ul class="list-group list-group-flush" >
                            <li class="list-group-item">
                                <label><h6 style={{ fontFamily: 'Poppins' }}>Completed amount Progress sofar</h6></label>
                                <progress className="w-100 bg-success" id="file" max="100" value="20" ></progress>
                                <h6 style={{ fontFamily: 'Poppins' }}><b>Current amount: Rs 60,000</b></h6>
                            </li>

                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising was placed on <b>23/07/2021 at 10.00 a.m</b></h6></div>
                                    <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6></div>
                                </div>
                            </li>

                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Started base amount: Rs 3,000</h6></div>
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Final Expected amount: Rs 300,000</h6></div>
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>To be recieved amount: Rs 240,000</h6></div>
                                    {/* d-flex flex-row-reverse will put the button at the edn of the div tag */}
                                    <div className="btn-custom col-md-12 d-flex flex-row-reverse"><button type="button" class="btn btn-md">Edit Fundraising</button></div>
                                </div>
                            </li>

                        </ul>


                    </div>






                    <div class="card border-secondary mt-4">
                        <h5 style={{ fontFamily: 'Poppins' }} class="card-header text-center">Ongoing Fundraising</h5>

                        <div class="row no-gutters">

                            <div class="col-md-4">
                                <img src={Event} class="card-img m-2" alt="..." />
                            </div>

                            <div class="col-md-8">
                                <div class="card-body m-3">
                                    <h5 class="card-title">Fundraising for the Vani Vizha Tamil Festival</h5>
                                    <p class="card-text">The annual Vani Vizha tamil festival which is conducted by first year students will be held on Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cumque modi rem culpa? Iusto dignissimos dicta molestias neque, necessitatibus et repellat perspiciatis? Est numquam labore sequi similique expedita harum asperiores.</p>
                                    {/* <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <p class="card-text ml-2"><small class="text-muted">Last updated 5 mins ago</small></p>
                        </div>

                        <ul class="list-group list-group-flush" >
                            <li class="list-group-item">
                                <label><h6 style={{ fontFamily: 'Poppins' }}>Completed amount Progress sofar</h6></label>
                                <progress className="w-100 bg-success" id="file" max="100" value="50" ></progress>
                                <h6 style={{ fontFamily: 'Poppins' }}><b>Current amount: Rs 100,000</b></h6>
                            </li>

                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising was placed on <b>23/07/2021 at 10.00 a.m</b></h6></div>
                                    <div className="col-md-6"><h6 style={{ fontFamily: 'Poppins' }}>This Fundraising will be expired on <b>28/09/2021 at 10.00 a.m</b></h6></div>
                                </div>
                            </li>

                            <li class="list-group-item">
                                <div className="row">
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Started base amount: Rs 5,000</h6></div>
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>Final Expected amount: Rs 200,000</h6></div>
                                    <div className="col-md-4"><h6 style={{ fontFamily: 'Poppins' }}>To be recieved amount: Rs 100,000</h6></div>
                                    {/* d-flex flex-row-reverse will put the button at the edn of the div tag */}
                                    <div className="btn-custom col-md-12 d-flex flex-row-reverse"><button type="button" class="btn btn-md">Edit Fundraising</button></div>
                                </div>
                            </li>

                        </ul>


                    </div>




                </div>
            </div>
        </div>
    );
}

export default ViewFundraising;