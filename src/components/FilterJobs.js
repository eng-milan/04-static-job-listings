import removeIcon from "../images/icon-remove.svg"

function FilterJobs({ filterTags, onFilterRemove, onFilterClear }) {

    const renderedTags = filterTags.map((tag, index) => {

        return <div key={index} className="flex mr-6 mb-4">
            <button className="px-3 py-1 font-bold text-[16px] text-[#5ba4a4] bg-[#effafa] rounded-l">{tag}</button>
            <div className="flex justify-center items-center bg-[#7b8e8e] w-[30px] rounded-r cursor-pointer" onClick={() => onFilterRemove(tag)}>
                <img className="bg-[#7b8e8e]" src={removeIcon} alt="remove" />
            </div>
        </div>
    })

    return <div className="relative mx-[30px] -mb-[20px]">
        <div className="relative -top-[30px] bg-white flex justify-between rounded-lg w-full px-[20px] pt-4 shadow-xl">
            <div className="flex flex-wrap">
                {renderedTags}
            </div>
            <button className="mb-4 font-bold text-[16px] text-[#5ba4a4] rounded" onClick={onFilterClear}>Clear</button>
        </div>
    </div>
}

export default FilterJobs