import { GoPrimitiveDot } from "react-icons/go";

function JobListing({ data, onFilter, filterTags }) {

    if (filterTags[0]) {
        data = data.filter((job) => {
            let eachTag = []
            let validJob = true

            filterTags.forEach(element => {
                eachTag.push(job.tags.includes(element))
            });

            for (let i = 0; i < eachTag.length; i++) {
                if (eachTag[i] !== true) {
                    validJob = false
                }
            }
            return validJob
        })
    }

    const renderedJobListings = data.map((job) => {

        const renderedTags = job.tags.map((tag) => {
            const randomid = Math.random()

            const handleClick = (e) => {
                onFilter(e.target.textContent)
            }

            return <button className="mr-6 mb-4 lg:my-[10px] px-3 py-1 font-bold text-[16px] text-[#5ba4a4] bg-[#effafa] rounded"
                key={randomid}
                onClick={handleClick}>
                {tag}
            </button>
        })

        return <div key={job.company} className="relative lg:flex lg:justify-between lg:items-center my-[50px] lg:my-[20px] mx-[30px] pt-[40px] pb-[10px] lg:py-[20px] px-[20px] bg-white border-l-[6px] border-[#5ba4a4] rounded-lg shadow-xl">
            <div className="flex items-center">
                <img className="absolute -top-[30px] lg:static lg:w-[70px] w-[57px]" src={job.logo} alt={job.company} />
                <div className="lg:ml-[20px]">
                    <div className="flex items-center">
                        <h1 className="text-[#5ba4a4]">{job.company}</h1>
                        <p className="ml-6 px-2 text-white bg-[#5ba4a4] rounded-full font-bold">{job.new}</p>
                        <p className="ml-2 px-2 text-white bg-black rounded-full font-bold">{job.featured}</p>
                    </div>
                    <h2 className="my-[10px] lg:my-[5px] hover:text-[#5ba4a4] cursor-pointer">{job.title}</h2>
                    <div className="flex items-center text-[#7b8e8e]">
                        <p>{job.date}</p>
                        <GoPrimitiveDot className="mx-2" />
                        <p>{job.type}</p>
                        <GoPrimitiveDot className="mx-2" />
                        <p>{job.location}</p>
                    </div>
                </div>
            </div>
            <hr className="my-4 lg:hidden" />
            <div className="flex flex-wrap lg:justify-end">
                {renderedTags}
            </div>
        </div>
    })

    return <div className="py-[10px] lg:py-[50px]">
        {renderedJobListings}
    </div>
}

export default JobListing