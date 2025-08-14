const UserForm = () =>{
    return(
        <div className="mx-2 mt-2">
        <div className="row">
            <div className="card col-md-8 form-container">
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label><br />
                            <input type="text" name="name" className="name" placeholder="eg. John Doe" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label><br />
                            <input type="email" name="email" id="email" className="form-control" placeholder="yourname@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label><br />
                            <input type="password" name="password" id="password" className="form-control" placeholder="************" />
                        </div>
                        <button type="submit" className="btn btn-warning w-100" >Save</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default UserForm;