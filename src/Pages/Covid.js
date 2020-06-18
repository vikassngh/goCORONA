import React from "react";
import './Page.css'
import image from "../images/image.png";
import {Container} from "react-bootstrap";
import { useEffect } from "react";

function ScrollToTopOnMount() {
        useEffect(() => {
                window.scrollTo(0, 0);
        }, []);

        return null;
}


export const covid19 = () => (
    <Container fluid>
        <div className="container">
                <ScrollToTopOnMount/>
                <img className="covid_image" src={image} alt="COVID-19"/>
            <div className="content">
                    <p>Coronavirus Disease 2019 is the current ongoing pandemic that has affected each and every part of
                        the world. Some people also tried to call it Kung-Flu, due to its emergence from China.
                        The World Health Organization (WHO) declared the 2019–20 coronavirus outbreak, a Public Health
                        Emergency of International Concern (PHEIC) on 30 January 2020 and a pandemic on 11 March 2020.</p>
                    <h3>What really is CORONAVIRUS or COVID-19?</h3>
                    Covid-19 is an infectious disease caused by severe acute respiratory syndrome coronavirus 2
                    (SARS-CoV-2). It started in December 2019 from Wuhan, which is the capital of China's Hubei
                    province. The disease started to spread at a very rapid rate and soon became a pandemic that
                    affected the whole world. The first case of Coronavirus was confirmed in November 2019 from the
                    Hubei province. The common symptoms include fever, cough and dyspnea. Dyspnea is an uncomfortable
                    condition that makes it difficult to get the air into the lungs. The time of uncovering to the
                    beginning of these symptoms is around 5 days, but it varies from 2 to 14 days. Some of the cases
                    may result in Pneumonia and multi-organ failure.<br/>
                    More than 2.5 million (25 Lakh) cases have been recorded across 185 countries. Approximately, 665
                    thousand people have successfully recovered whereas over 174 thousand people died.
                    <h3>SPREAD</h3>
                    The virus is primarily spread between people during close contact, often via small droplets
                    produced by coughing, sneezing, or talking. While these droplets are produced when breathing out,
                    they usually fall to the ground or onto surfaces rather than remain in the air over long distances.
                    People may also become infected by touching a contaminated surface and then touching their eyes,
                    nose, or mouth. The virus can survive on surfaces for up to 72 hours. It is most contagious during
                    the first three days after the onset of symptoms, although spread may be possible before symptoms
                    appear and in later stages of the disease.
                    <h3>Modes of transmission</h3>
                    Respiratory infections can be transmitted through droplets of different sizes: when the droplet
                    particles are greater than 5-10 μm in diameter they are referred to as respiratory droplets, and
                    when then are less than 5μm in diameter, they are referred to as droplet nuclei. According to
                    current evidence, COVID-19 virus is primarily transmitted between people through respiratory
                    droplets and contact routes.2-7 In an analysis of 75,465 COVID-19 cases in China, airborne
                    transmission was not reported. Droplet transmission occurs when a person is in in close contact
                    (within 1 m) with someone who has respiratory symptoms (e.g., coughing or sneezing) and is
                    therefore at risk of having his/her mucosae (mouth and nose) or conjunctiva (eyes) exposed to
                    potentially infective respiratory droplets. Transmission may also occur through fomites in the
                    immediate environment around the infected person. Therefore, transmission of the COVID-19 virus can
                    occur by direct contact with infected people and indirect contact with surfaces in the immediate
                    environment or with objects used on the infected person (e.g., stethoscope or thermometer).
                    Airborne transmission is different from droplet transmission as it refers to the presence of
                    microbes within droplet nuclei, which are generally considered to be particles less than 5μm in
                    diameter, can remain in the air for long periods of time and be transmitted to others over
                    distances greater than 1 m. In the case of COVID-19, airborne transmission may be possible in
                    specific circumstances and settings in which procedures or support treatments that generate
                    aerosols are performed; i.e., endotracheal intubation, bronchoscopy, open suctioning,
                    administration of nebulized treatment, manual ventilation before intubation, turning the patient to
                    the prone position, disconnecting the patient from the ventilator, non-invasive positive-pressure
                    ventilation, tracheostomy, and cardiopulmonary resuscitation.
                    <h3>Treatment</h3>
                    There is currently no treatment available for the treatment of Coronavirus. Scientists and doctors
                    are exploring drugs, vaccines and multiple other treatments to fight COVID-19. There might be
                    a possibility that Plasma Therapy can help to improve the condition of critical patients.
                    <h4>What is a Plasma Therapy?</h4>
                    The convalescent plasma therapy aims at using antibodies from the blood of a recovered Covid-19
                    patient to treat those critically affected by the virus. The therapy can also be used to
                    immunise those at a high risk of contracting the virus - such as health workers, families of
                    patients and other high-risk contacts.<br/>
                    This therapy's concept is simple and is based on the premise that the blood of a patient who has
                    recovered from Covid-19 contains antibodies with the specific ability of fighting novel
                    coronavirus. The theory is that the recovered patient's antibodies, once ingested into somebody
                    under treatment, will begin targeting and fighting the novel coronavirus in the second
                    patient.<br/>
                    The convalescent plasma therapy is similar to passive immunisation as, according to researchers,
                    it is a preventive measure and not a treatment for the Covid-19 disease.
                    <h4>History of plasma therapy:</h4>
                    Plasma Therapy was discovered by German physiologist Emil von Behring, and first used in 1890. In 2014,
                    the World Health Organisation (WHO) recommended the plasma therapy to treat Ebola virus disease.
                    The plasma therapy was also used during Spanish flu pandemic. During the H1N1 infection of 2009, doctors
                    used plasma therapy to treat patients.
                    <h4>Plasma Therapy to treat COVID-19 cases</h4>
                    China used Plasma Therapy to treat critical COVID-19
                    patients. Two trials of plasma therapy were conducted on 15 coronavirus patients and they showed
                    improvement. At this moment, the Indian Council of Medical Research (ICMR) does not recommend this as a
                    treatment option outside of clinical trials. Several countries around the world including United Kingdom
                    and United States have also started plasma therapy trials.<br/>
                    <br/>
            </div>
        </div>
    </Container>
);
