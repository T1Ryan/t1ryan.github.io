import { useState, useEffect } from "react";

const Projecten = () => {
    const [slotmachineOpen, setSlotmachineOpen] = useState(false);
    const [schermOpen, setSchermOpen] = useState(false);
    const [robotOpen, setRobotOpen] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleScroll = () => {
        const projects = ['Slotmachine', 'Scherm', 'Robot'];
        for (const project of projects) {
            const element = document.getElementById(project);
            if (element) {
                const rect = element.getBoundingClientRect();
                if (rect.top <= 100 && rect.bottom >= 100) { // 100px from top
                    setActiveProject(project);
                    break;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Initialize with the first project
        setActiveProject('Slotmachine');
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getActiveClass = (projectId) => {
        return activeProject === projectId ? 'active' : '';
    };

    return (
        <div>
            <div className="sidenav">
                <div
                    className={`button-like ${getActiveClass('Slotmachine')}`}
                    onClick={() => {
                        document.getElementById('Slotmachine').scrollIntoView({behavior: 'smooth'});
                        setActiveProject('Slotmachine');
                    }}
                >
                    Gokautomaat
                </div>
                <div
                    className={`button-like ${getActiveClass('Scherm')}`}
                    onClick={() => {
                        document.getElementById('Scherm').scrollIntoView({behavior: 'smooth'});
                        setActiveProject('Scherm');
                    }}
                >
                    Aankondigingsscherm
                </div>
                <div
                    className={`button-like ${getActiveClass('Robot')}`}
                    onClick={() => {
                        document.getElementById('Robot').scrollIntoView({behavior: 'smooth'});
                        setActiveProject('Robot');
                    }}
                >
                    Lidar-Robot
                </div>
            </div>

            <div id="Slotmachine" className="content">
                <div>
                    <div onClick={() => setSlotmachineOpen(!slotmachineOpen)} style={{cursor: "pointer"}}>
                        <h2>Gokautomaat</h2>
                    </div>
                    {slotmachineOpen && (
                        <div>
                            <h3>Beschrijving</h3>
                            <p>Met de druk op een knop worden tussen drie afbeeldingen gedraaid tot er een
                                afbeelding word definitief word gekozen. Dit gebeurd drie keer en als elke
                                gokautomaat win je als alle 3 dezelfde afbeeldingen op een rij
                                hebt, toch is er een twist. Je kan nooit 3 keer dezelfde afbeelding krijgen. Later
                                heb ik deze aangepast om samen te gaan met
                                een project van klas 5D-BioCW. Zijnde het houden van een blad waar met een UV-pen
                                een code op werd geschrven. Mijn project gaf
                                hints naar de locatie van dit blad.</p>
                            <h3>Hardware</h3>
                            <p>Om dit project te realiseren maakte ik gebruik van een Raspberry Pi 4, een grote
                                Delete knop gegeven
                                door de leerkracht en een computerscherm.</p>
                            <h4>Raspberry Pi 4</h4>
                            <img
                                src="https://images.theengineeringprojects.com/image/webp/2021/03/raspberry-pi-4.png.webp?ssl=1"
                                alt="Raspberry Pi 4"/>
                            <h4>Delete knop</h4>
                            <img src="https://media.s-bol.com/qjyGrAXR97M0/550x339.jpg" alt="Delete knop"/>
                            <h3>Software</h3>
                            <h3>Proces</h3>
                            <h4>Maand 1</h4>
                            <p>Trail en error via chatGPT en YT tutorials. Later kreeg ik hulp van een leerkracht en
                                medeleerling om
                                vanaf 0 een programma te schrijven.</p>
                            <h4>Maand 2</h4>
                            <p>Moeilijkheden hebben met de code.</p>
                            <h4>Maand 3</h4>
                            <p>Ik ben klaar met mijn project maar probeer het toch nog een beetje te verbeteren.</p>
                        </div>
                    )}
                </div>
            </div>
            <div id="Scherm" className='content'>
                <div onClick={() => setSchermOpen(!schermOpen)} style={{cursor: "pointer"}}>
                    <h2>Verwelkomingsscherm</h2>
                </div>
                {schermOpen && (
                    <div>
                        <h3>Beschrijving</h3>
                        <p>Wanneer de spelers de lobby binnengaan, opent er een venster op het scherm met een boodschap
                            die vermeld dat ze moeten wachten of dat ze de escape room binnen mogen.
                        </p>
                        <h3>Hardware</h3>
                        <p>Voor dit project maakte ik gebruik van een Raspberry Pi, een PIR bewegingssensor, een
                            two-color LED
                            (niet
                            noodzakelijk), een tuimelschakelaar en een scherm.
                            Het was later ook de bedoeling dat ik deze switch aan iemands anders project gingverbinden
                            met
                            behulp
                            van relays.</p>
                        <h4>PIR bewegingssensor</h4>
                        <img
                            src="https://cdn-learn.adafruit.com/guides/cropped_images/000/000/030/medium640/proximity_pirsensor.jpg?1520539813"
                            alt="Bewegingssensor"/>
                        <h4>Two-color LED</h4>
                        <img src="https://popularelectronic.com/public/assets/homeLibs/img/products/00618110.JPG"
                             alt="Two-color LED"/>
                        <h4>Tuimelschakelaar</h4>
                        <img src="https://image.allekabels.nl/image/1289000-0/tuimelschakelaar-stroom-max-3a.jpg"
                             alt="Tuimelschakelaar"/>
                        <h3>Software</h3>

                        <h3>Proces</h3>
                        <h4>Maand 1</h4>
                        <p>Ik was begonnen met testen van de bewegingssensor maar kreeg moeilijkheden met het vinden van
                            een manier
                            om de gevoeligheid aan te passen.</p>
                        <h4>Maand 2</h4>
                        <p>Het is mij gelukt om aan de hand van de sensor het scherm aan te sturen maar er waren nog
                            kleine fouten om
                            op te lossen. De opendeurdag stond naast de deur dus moest ik het gaan implimenteren maar
                            het
                            lukte jammer genoeg niet om het scherm en de sensor op te zetten in de escape room zelf.
                        </p>

                    </div>
                )}
            </div>
            <div id="Robot" className='content'>
                <div onClick={() => setRobotOpen(!robotOpen)} style={{cursor: "pointer"}}>
                    <h2>LIDAR-Robot</h2>
                </div>
                {robotOpen && (
                    <div>
                        <h3>Beschrijving</h3>
                        <p>De robot navigeert door een kamer en maakt, met behulp van de daarop gemonteerde
                            LIDAR-sensor,
                            een kaart van deze ruimte. Hij zou deze later kunnen gebruiken om zo snel mogelijk van
                            punt A tot punt B te gaan.
                        </p>
                        <h3>Hardware</h3>
                        <p></p>
                        <h4>Slamtec RPLIDAR C1</h4>
                        <img
                            src="https://m.media-amazon.com/images/I/51jsON6CeCL._AC_SX679_.jpg"
                            alt="LIDARsensor"/>
                        <h4>Raspberry Pi 5</h4>
                        <img
                            src="https://jp.robotshop.com/cdn/shop/files/raspberry-pi-5-4gb-single-board-computer-img2.webp?v=1720507242&width=500"
                            alt="Raspberry Pi 5"/>
                        <h4>Arduino auto</h4>
                        <img
                            src="https://osoyoo.store/cdn/shop/products/1_40bf0f6a-75ff-4c34-96c5-18a3eeb7b6a9.jpg?v=1631499527"
                            alt="Arduino auto"/>
                        <h3>Software</h3>
                        <h4>Ubuntu Linux 24.04</h4>
                        <img src="https://linuxiac.b-cdn.net/wp-content/uploads/2020/06/ubuntu-linux.jpg"
                             alt="Ubuntu"/>
                        <h4>ROS</h4>
                        <img/>
                        <h4>Rviz</h4>
                        <img/>
                        <h3>Proces</h3>
                        <h4>Maand 1</h4>
                        <p>Ik begon met het flashen van Ubuntu 24.04 op een SD kaart voor de Raspberry Pi omdat deze
                            de meest geschikte OS was voor de installatie van ROS op de Raspberry Pi.
                            Waarschijnlijk door het niet te grote geheugen van de SD kaart werkte de Raspberry Pi zeer
                            traag
                            en duurde het redelijk voor de installatie van ROS.
                        </p>
                        <h4>Maand 2</h4>
                        <p>De Raspberry Pi zit ongeveer halverwege het installatieproces van ROS maar schiet niet veel
                            op.
                            Ik heb mijn sensor ontvangen en begin hem te testen en bergijpen.
                        </p>
                        <h4>Maand 4</h4>
                        <p>Met veel moeite is het mij gelukt om ROS op de Raspberry pi te krijgen. Ondertussen had ik al
                            onderzocht hoe ik mijn sensor aan de hand van ROS zou moeten inlezen.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Projecten;