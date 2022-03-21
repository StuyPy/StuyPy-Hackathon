import Image from 'next/image'

import teamData from '/public/resources/data/teamData'
import defaultMemberImage from '/public/resources/team/no-pic.png'

export default function Team() {
    return (
        <div id="team-section" className="text-center content-section container">
            <a id="team" className="anchor"></a>
            <h1>Our Team</h1> <hr />
            <div id="team-carousel" className="carousel slide animate__animated on-scroll-fade" data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <div className="card-container fluid-container d-flex flex-wrap justify-content-center align-items-center">
                            {
                                {/* teamData[0].map(member => {
                                    return (
                                        <div className="card" key={teamData.index(member)}>
                                            <Image src={defaultMemberImage} className="card-img-top" alt={member.name} />
                                            <div className="card-body primary-bg">
                                                <h5 className="card-title">{member.name}</h5>
                                                {
                                                    member.roles.map(role => {
                                                        return <p clasName="card-text" key={member.roles.index(role)}>{role} <br /> </p>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    )
                                }) */}
                            }
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-container fluid-container d-flex flex-wrap justify-content-center align-items-center">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-container fluid-container d-flex flex-wrap justify-content-center align-items-center">

                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-container fluid-container d-flex flex-wrap justify-content-center align-items-center">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}