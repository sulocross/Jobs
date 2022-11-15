import { useGlobalContext } from "../hooks/useGlobalContext"
import JobBoardItem from "./JobBoardItem"

export default function JobBoardList(){
    const {data: jobs} = useGlobalContext()

    return(
        <ul className="list-group">
            {jobs && jobs.map((job) => {
                return <JobBoardItem job={job} key={job.id}/>
            })}
        </ul>
    )
}