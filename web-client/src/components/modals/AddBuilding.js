export default function AddBuilding(){
    return(
    <>
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Thêm tòa nhà</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên tòa nhà</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted"><span style={{color: 'red'}}>Tên tòa nhà đã tồn tại.</span></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Địa chỉ tòa nhà</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted"><span style={{color: 'red'}}>Địa chỉ không hợp lệ.</span></small>
                    </div>
                    </div>

                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
    </div>
    </>
    )
}