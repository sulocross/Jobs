import {Link} from 'react-router-dom';

function JobBoardItem({job}){

    function convertDate (createdDate) {
        let createdAt = new Date(createdDate)
    
        let dateNow = new Date()
    
        let daysAgo = Math.floor((dateNow.getTime() - createdAt.getTime() )/(2436001000))
    
        return `Posted ${daysAgo} days ago`
      }

    return (
        <li className="list-group-item my-2 shadow rounded-3" style={{"backgroundColor": "#EFF0F5"}}>
            <div className="d-flex col justify-content-between align-items-stretch">
                <div className="align-items-center justify-content-center d-flex" id="picture">
                    <img src={job.pictures[1]} className="image rounded-circle me-1" alt="..."/>
                </div>
                <div className='d-flex flex-column flex-sm-row flex-fill ms-3'>
                <div className="d-sm-flex d-grid flex-md-row flex-row d-md-grid col-md-6">
                    <div className="col-md">
                        <div className="fw-bold title">
                            <Link to={`/detail/${job.id}`} style={{ textDecoration: 'none',"color": "#3A4562"}}>
                                {job.title}
                            </Link>
                        </div>
                        <span className="text-muted mt-2">{job.name}</span>
                    </div>
                    <div className="col d-none d-md-block text-muted mt-3">
                        <i className='bx bxs-map'></i>
                        lat:{job.location.lat}
                        long:{job.location.long}
                    </div>
                </div>

                <div className="d-none d-md-flex col-2 my-sm-3 my-md-0 d-md-flex flex-row justify-content-center align-items-center">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                </div>
                <div className="d-flex col-6 flex-sm-column flex-row justify-content-between align-items-end flex-fill" id="additional-info">
                    <div className="d-none d-sm-block pb-4">
                        <i className="text-muted bx bx-bookmark"></i>
                    </div>
                    <div className="col-sm mt-auto d-flex align-self-end align-items-end pt-4 mx-1">
                        <div id="date" className="text-nowrap text-muted">{convertDate(job.createdAt)}</div>
                    </div>
                </div>
                </div>
            </div>
        </li>
    )
}



export default JobBoardItem;