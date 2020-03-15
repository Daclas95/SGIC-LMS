import React from 'react'

 function RemainingLeave() {
    return (
        <div>
            <h1>This is the reamining Leave page</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">Leave Type</th>
                    <th scope="col">Allocated</th>
                    <th scope="col">Leave Used</th>
                    <th scope="col">reamining</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Anual</td>
                    <td>30</td>
                    <td>10</td>
                    <td>20</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Casual</td>
                    <td>10</td>
                    <td>3</td>
                    <td>7</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Lev leave</td>
                    <td>12</td>
                    <td>2</td>
                    <td>10</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RemainingLeave