import { useState } from "react"
import data from "../data/jobdata"
import FilterJobs from "./FilterJobs"
import JobListing from "./JobListing"

function JobList() {
    const [filterTags, setFilterTags] = useState([])

    const onFilter = (textContent) => {
        if (!filterTags.includes(textContent)) {
            setFilterTags([...filterTags, textContent])
        }
    }

    const onFilterRemove = (tag) => {
        let filtered = filterTags.filter((filterTag) => {
            return filterTag !== tag
        })
        setFilterTags(filtered)
    }

    const onFilterClear = () => {
        setFilterTags([])
    }

    return <div className=" bg-[#effafa]">
        {filterTags[0] ? <FilterJobs filterTags={filterTags} onFilterRemove={onFilterRemove} onFilterClear={onFilterClear} /> : null}
        <JobListing data={data} onFilter={onFilter} filterTags={filterTags} />
    </div>
}

export default JobList