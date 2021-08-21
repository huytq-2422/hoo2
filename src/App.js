import './App.css';

function App() {
    return (
        <div className="container">
            <h1 className="text-center p-2 border-bottom">To Do List</h1>

            <div className="card border border-warning">
                <div className="card-header d-flex justify-content-between bg-warning">
                    Add task
                    <a className="bi bi-x-circle-fill text-dark" role="button"/>
                </div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label"><b>Name</b></label>
                            <input type="text"
                                   className="form-control"
                                   id="inputName"
                                   aria-describedby="Input name"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"><b>Status</b></label>
                            <div className="input-group">
                                <select className="form-select" id="inputGroupSelect01">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center flex-wrap">
                            <button type="submit" className="btn btn-secondary mx-2">Cancel</button>
                            <button type="submit" className="btn btn-primary mx-2">Save</button>
                        </div>
                    </form>
                </div>
            </div>

            <button className="btn btn-primary my-2" type="button">
                <a href="" className="bi bi-plus-lg text-white me-2"/>
                Add Task
            </button>

            <div className="row my-3">
                <div className="col-6">
                    <div className="input-group">
                        <input type="text"
                               className="form-control"
                               placeholder="Enter keyword ... "
                               aria-label="Task's name"/>

                        <button className="btn btn-primary" type="button">
                            <a href="" className="bi bi-search text-white me-2"/>
                            Search
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" type="button">
                        Sort
                        <a href="" className="bi bi-filter-square text-white ms-2"/>
                    </button>
                </div>
            </div>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th scope="col" className="text-center">STT</th>
                    <th scope="col" className="text-center">Name</th>
                    <th scope="col" className="text-center">Status</th>
                    <th scope="col" className="text-center">Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td scope="row"></td>
                    <td>
                        <input type="text"
                               className="form-control"
                               placeholder=""/>
                    </td>
                    <td>
                        <div className="input-group">
                            <select className="form-select" id="inputGroupSelect01">
                                <option selected>Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </td>
                    <td></td>
                </tr>
                <tr>
                    <td scope="row">1</td>
                    <td>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
                    <td className="text-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="badge bg-danger">Active</div>
                        </div>
                    </td>
                    <td>
                        <div className="d-flex justify-content-center flex-wrap">
                            <button className="btn btn-warning text-white m-1">
                                <a href="#" className="bi bi-pencil text-white me-2"/>
                                Edit
                            </button>
                            <button className="btn btn-danger text-white m-1">
                                <a href="#" className="bi bi-trash-fill text-white me-2"/>
                                Delete
                            </button>
                        </div>

                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}

export default App;
