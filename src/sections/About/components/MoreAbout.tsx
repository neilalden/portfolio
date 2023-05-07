import "./MoreAbout.scss"
const MoreAbout = () => {
    return (
        <div className='more-about'>
            <ul>
                <li className="box">
                    <span></span>
                    <div className="title">Jr. React Native Developer</div>
                    <div className="sub-title">Medicomm Pacific, Inc.</div>
                    {/* <div className="info">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis, corrupti.</div> */}
                    <div className="time">
                        <span>Feb. 20, 2023</span>
                        <span>Aug. 20, 2022</span>
                    </div>
                </li>
                <li className="box">
                    <span></span>
                    <div className="title">Graduated BS Computer Science</div>
                    <div className="sub-title">Laguna State Polytechnic University</div>
                    <div className="info">Awards: Best in Thesis, Best in On the Job Training, Best Paper, Proficiency Award <br />Scholarships: Iskolar ng Laguna <br /> Orgs: GIOCOTECH - President (2019-2020)</div>
                    <div className="time">
                        <span>Sept. 23, 2022</span>
                        <span>June 3, 2018</span>
                    </div>
                </li>
                <li className="box">
                    <span></span>
                    <div className="title"> 5th International Research Conference on Innovations in Engineering, Science and Technology </div>
                    <div className="sub-title">Batangas State University</div>
                    <div className="info">Presented our research paper titled (Arduino-Based White Cane)</div>
                    <div className="time">
                        <span>Dec. 7, 2021</span>
                        <span>Dec. 6, 2021</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default MoreAbout