import React from 'react'

function Settings() {
    return (
        <div class="container">
        <form class="form-horizontal" role="form">
            <h2>Change Passward</h2>
            <div class="form-group">
                <label for="firstName" class="col-sm-3 control-label">New passward</label>
                <div class="col-sm-9">
                    <input type="text" id="firstName" placeholder="First Name" class="form-control" autofocus />
                </div>
            </div>
            
            <div class="form-group">
                <label for="firstName" class="col-sm-3 control-label">confirm passward</label>
                <div class="col-sm-9">
                    <input type="text" id="firstName" placeholder="First Name" class="form-control" autofocus />
                </div>
            </div>

            <div>
                <button type="submit" class="btn btn-primary btn-block col-sm-3">Change passward</button>
            </div>
        </form>
            
        </div>
    )
}

export default Settings