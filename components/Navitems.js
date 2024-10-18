const Navitems = (props) => {

    return (
        <>
            <button className='p-1 text-white text-base font-normal border-0 flex items-center gap-2'>
                {props.text} {(props.dropdown_required == "yes") ? <i className="ri-arrow-down-s-line ri-sm text-white"></i> : ''}
            </button>
        </>
    )
}
export default Navitems;