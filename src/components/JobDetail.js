import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import './JobDetail.css';
import {Link} from 'react-router-dom';
import { useGlobalContext } from '../hooks/useGlobalContext';


function JobDetail(){
    let { id } = useParams();

    const [job, setJob] = useState(null)
    const {data: jobs} = useGlobalContext()

    useEffect(() => {
        jobs.map(job => {
            if(job.id == id){
                setJob(job)
            }
        })
    }, [jobs])

    if (!job) {
        return <p>id not found</p>
    }

    function convertDate() {
        let createdAt = new Date(job.createdAt)
        let dateNow = new Date()
        let daysAgo = Math.floor((dateNow.getTime() - createdAt.getTime() )/(2436001000))
        
        return `Posted ${daysAgo} days ago`
    }


    return (
        <div className="container-fluid container-md">
            <div className="row row-cols-1 row-cols-sm-2">
                <div className="col col-md-8">
                    <div className='d-flex flex-column flex-md-row justify-content-between'>
                        <div className="fs-1 fw-bold">Job Details</div>
                        <hr className="d-block d-sm-none"/>
                        <div className="d-flex justify-content-between">
                        <div className='d-flex justify-content-between'>
                            <div className='me-4 my-4 '>
                                <i className='bx bx-bookmark'></i>Save to my list
                            </div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <div className='me-4 my-4'>
                                <i className='bx bxs-share-alt'></i>
                                Share
                            </div>
                        </div>
                        </div>
                    </div>
                    <hr className="d-none d-sm-block"/>

                        <button type="button" className="btn btn-secondary mt-4 p-3 my-4 rounded-3 btnApply1 d-none d-sm-block btnApply">Apply now</button>
                        <div>
                            <div className="d-flex">
                                <div className="col-8 fw-bold fs-4 mt-3 my-1">
                                    {job.title}
                                </div>
                                <div className="col-4 fw-bold fs-4 mt-3 d-flex flex-column align-items-end">
                                    <div>${job.salary}</div>
                                    <div className='fs-6 fw-normal'>Brutto, per year</div>
                                </div>
                            </div>
                            <div className="text-muted mt-1 my-1">
                                {convertDate()}
                            </div>
                        </div>
                        <div className="mt-2 my-4">
                            {job.description}
                        <div className='my-3'>
                            <button type="button" className="btn btn-secondary mt-3 my-4 p-3 rounded-3 btnApply">
                                Apply now
                            </button>
                        </div>
                        <h2 className="my-3 mt-5 headJob">
                            Additional info
                        </h2>
                        <hr/>
                        <div className="fs-5">
                            Employment type
                        </div> 
                        <div className="my-3 justify-content-center row">
                            {job.employment_type.map((empType) => {
                                return (
                                    <div className='col p-2 m-2 rounded-3 text-center empType' key={empType}>{empType}</div>
                                )
                            })}  
                        </div>
                        <div className="my-4 fs-5">
                            Benefits
                        </div>
                        <div className="my-3 text-bs-blue justify-content-center row">
                            {job.benefits.map((benefit) => {
                                return (
                                    <div className='col m-2 p-2 rounded-3 text-center benefits' key={benefit}>{benefit}</div>
                            )
                        })}
                        </div>
                        
                        <h2 className="my-5 headJob">
                            Attached images
                        </h2>
                        <hr/>
                        <div className="d-flex flex-row my-3 justify-content-between">
                            {job.pictures.map((picture, index) => {
                               return <img src={picture} className="mx-2 rounded-3" alt="..." style={{"objectFit": "fill"}} width="200px" height="150px" key={index}/>
                            })}
                        </div>
                        <Link to='/' className="btn btn-primary btn-lg fw-bold returnBtn">RETURN TO JOB BOARD</Link>
                        </div>
                        <div className="col-5">
                        </div>
                    </div>
                    <div className="text-white d-flex col col-md-4 rounded-3 my-2 align-self-start justify-content-center" style={{"backgroundColor": "#2A3047"}}>
                        <img src="../test.png" alt="..." width="100%" height="100%" style={{"objectFit": "fill"}}/>
                        <div className='d-flex flex-column my-4 align-items-start justify-content-center fs-5 position-absolute'>
                            <div className='mb-3'>{job.name}</div>
                            <div className='mb-2'>
                                <i className='bx bxs-map'></i>
                                {job.address}
                            </div>
                            <div className='mb-2'>{job.phone},</div>
                            <div className='mb-2'>{job.email}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default JobDetail;