function Profile() {
    return (

        <div className=" container">
            <div class="mt-4 p-5 card rounded">
                <center><h2>My Profile</h2></center>
                <center style={{ fontSize: "100px" }}><i className="fa fa-user-circle"></i></center>
                <center><h3 className="mb-5">User Name</h3></center>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                My Posts
                            </div>
                            <div className="card-body">
                                This is Post 1
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card px-5 py-2">
                            <center><h4>Create New Post</h4></center>
                            <form action="">
                                <div class="mb-3">
                                    <label class="form-label">Post</label>
                                    <textarea className="form-control"></textarea>
                                </div>
                                <button type="submit" className="btn btn-sm btn-primary"><strong>Post</strong></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Profile;