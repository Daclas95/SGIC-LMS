import React from 'react';

function ManageLeave() {
  return (
    <div id="content" class="pmd-content inner-page admin">
    <h1 id="leave">Leave</h1>
    
    
    
    
    
    <section class="component-section" id="employee">
        <table class="table pmd-table table-hover pmd-table-card">
                <thead class="thead-dark">
                    <tr>
                        <th>Employee</th>
                        <th>Leave Type</th>
                        <th>Half Day</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Reason</th>
                        <th>No of Leave</th>
                        <th>Paid / Unpaid</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-title="Employee">p.Manojkumar</td>
                        <td data-title="Leave Type">Casual Leave</td>
                        <td data-title="Half Day">No</td>
                        <td data-title="Start Date">1<sup>st</sup> September, 2018</td>
                        <td data-title="End Date">3<sup>rd</sup> September, 2018</td>
                        <td data-title="Reason">Attend Cousin's Wedding</td>
                        <td data-title="No of Leave">3</td>
                        <td data-title="Paid / Unpaid">Paid</td>
                        <td data-title="Status">Pending</td>
                        <td data-title="">
                            
                            <a href="javascript:void(0);" title="Reject" class="pmd-btn-fab btn-xs btn-outline-danger btn pmd-ripple-effect" data-toggle="modal" data-target="#reject-modal">
                                <i class="material-icons">close</i>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-title="Employee">P.Manojkumar</td>
                        <td data-title="Leave Type">Sick Leave</td>
                        <td data-title="Half Day">No</td>
                        <td data-title="Start Date">1<sup>st</sup> September, 2018</td>
                        <td data-title="End Date">3<sup>rd</sup> September, 2018</td>
                        <td data-title="Reason">Having Fever</td>
                        <td data-title="No of Leave">3</td>
                        <td data-title="Paid / Unpaid">Paid</td>
                        <td data-title="Status">Approved</td>
                        <td data-title="">

                        <a href="javascript:void(0);" title="Reject" class="pmd-btn-fab btn-xs btn-outline-danger btn pmd-ripple-effect" data-toggle="modal" data-target="#reject-modal">
                                <i class="material-icons">close</i>
                            </a>
                        </td>
                    </tr>
                   
                    <tr>
                        <td data-title="Employee">P.manojkumar</td>
                        <td data-title="Leave Type">Sick Leave</td>
                        <td data-title="Half Day">Yes</td>
                        <td data-title="Start Date">1<sup>st</sup> December, 2018</td>
                        <td data-title="End Date">1<sup>st</sup> December, 2018</td>
                        <td data-title="Reason">Not feeling well</td>
                        <td data-title="No of Leave">0.5</td>
                        <td data-title="Paid / Unpaid">Paid</td>
                        <td data-title="Status">Pending</td>
                        <td data-title="">
                           
                            <a href="javascript:void(0);" title="Reject" class="pmd-btn-fab btn-xs btn-outline-danger btn pmd-ripple-effect" data-toggle="modal" data-target="#reject-modal">
                                <i class="material-icons">close</i>
                            </a>
                        </td>
                    </tr>
                   
                </tbody>
        </table>
    </section>
    </div>

    );
}

export default ManageLeave