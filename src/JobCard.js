import { useEffect, useState } from "react";

const JobCard = () => {
 const [openJobs, setOpenJobs] = useState(0)
 useEffect(() => {
        fetch('http://localhost:3000/openJobs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setOpenJobs(data)
        })
    }, [openJobs])
    

    return ( 
        <main>
        {openJobs && openJobs.map(openJob =>(
            
            <section key={openJob.id}>
                <img src={ openJob.logo } alt={openJob.id} class="company-log"/>
                <span className="company">{ openJob.company }</span>
                <h4 className="job">{ openJob.job }</h4>
                <span className="age">{openJob.age}</span>
                <span className="age type">{openJob.type}</span>
                <span className=" age location">{openJob.location}</span>
                <hr></hr>
                <input type="button" class="role" value={openJob.role}/>
                <input type="button" class="role" value={openJob.level}/>
                <input type="button" class="role" value={openJob.languages1}/>
                <br></br>
                <input type="button" class="role" value={openJob.languages2}/>
                <input type="button" class="role" value={openJob.languages3}/>
            </section>
        ))}
                
        </main>
     );
}
 
export default JobCard;