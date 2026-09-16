import React from 'react'
import { BriefcaseBusiness, Building2, CheckCircle2, Globe2, GraduationCap, Mail, Menu, Phone, ShieldCheck, Truck, UserCheck, Users, X } from 'lucide-react'

const talent = ['South African delivery riders','Professional drivers','Code 10 / Code 14 drivers','International driving opportunities','Sales Development Representatives (SDRs)','Virtual & administrative assistants','Retail & general workforce','Selected international opportunities']
const employers = ['Local recruitment','International recruitment','Driver recruitment','Workforce training','Candidate screening & verification','Bulk recruitment','Talent pipeline solutions']
const steps = [
  [Users,'Recruit','We source candidates through targeted talent networks and recruitment campaigns.'],
  [GraduationCap,'Train','We support workforce readiness and role-specific preparation where appropriate.'],
  [UserCheck,'Verify','We screen candidates and verify relevant information, licences and experience.'],
  [BriefcaseBusiness,'Place','We connect suitable, eligible candidates with genuine employer opportunities.'],
]

export default function App(){
  const [open,setOpen]=React.useState(false)
  return <div>
    <header className="nav"><div className="wrap navin"><a href="#home" className="brand"><img src="/talent-bridge-logo.jpeg"/><span><b>Talent Bridge Global</b><small>Connecting Talent. Creating Opportunity.</small></span></a><nav className="desktop"><a href="#about">About</a><a href="#talent">For Talent</a><a href="#employers">For Employers</a><a href="#contact">Contact</a></nav><a className="call desktop" href="tel:+27762139272"><Phone size={16}/> Call Us</a><button className="mobile menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>{open&&<div className="mobile mobnav"><a href="#about" onClick={()=>setOpen(false)}>About</a><a href="#talent" onClick={()=>setOpen(false)}>For Talent</a><a href="#employers" onClick={()=>setOpen(false)}>For Employers</a><a href="#contact" onClick={()=>setOpen(false)}>Contact</a></div>}</header>

    <section id="home" className="hero"><div className="overlay"/><div className="wrap heroContent"><span className="eyebrow">Recruit • Train • Verify • Place</span><h1>Connecting Talent.<br/><em>Creating Opportunity.</em></h1><p>Talent Bridge Global connects people with genuine employment opportunities while helping businesses access the talent they need to grow.</p><div className="actions"><a href="#talent" className="primary">Find Opportunities</a><a href="#employers" className="secondary">Hire Talent</a></div></div></section>

    <section className="stats"><div className="wrap grid4"><div><Users/><b>200+</b><span>Drivers placed</span></div><div><ShieldCheck/><b>Verified</b><span>Candidate screening</span></div><div><Globe2/><b>Local + Global</b><span>Talent network</span></div><div><Building2/><b>Employer-led</b><span>Recruitment solutions</span></div></div></section>

    <section id="about" className="section"><div className="wrap narrow center"><span className="tag">Who We Are</span><h2>About Talent Bridge Global</h2><p>Talent Bridge Global exists to connect people with genuine employment opportunities while helping businesses access the talent they need to grow.</p><p>We believe recruitment is about more than filling vacancies. It is about understanding people, understanding businesses and creating connections that can lead to meaningful, long-term employment.</p><p>Our approach brings together talent sourcing, screening, workforce readiness and recruitment partnerships across South Africa and selected international markets.</p></div></section>

    <section className="section light"><div className="wrap"><div className="center"><span className="tag">Our Approach</span><h2>Recruit. Train. Verify. Place.</h2></div><div className="cards4">{steps.map(([Icon,title,text]:any,i)=><article key={title}><span className="num">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="talent" className="section"><div className="wrap split"><div className="panel dark"><Users size={42}/><span className="tag gold">For Talent</span><h2>Build your profile. Access genuine opportunities.</h2><p>We connect candidates with suitable vacancies based on employer requirements, candidate eligibility and available opportunities.</p><div className="list">{talent.map(x=><div key={x}><CheckCircle2 size={18}/>{x}</div>)}</div><a href="#contact" className="primary">Join our talent network</a></div><div id="employers" className="panel"><Building2 size={42}/><span className="tag">For Employers</span><h2>Recruitment built around your workforce needs.</h2><p>From individual hires to large-scale recruitment drives, we help employers source, screen and prepare suitable candidates.</p><div className="list blue">{employers.map(x=><div key={x}><CheckCircle2 size={18}/>{x}</div>)}</div><a href="#contact" className="bluebtn">Request recruitment support</a></div></div></section>

    <section className="milestone"><div className="wrap center"><Truck size={52}/><strong>200+</strong><h2>Drivers placed</h2><p>A genuine placement milestone. We focus on credible recruitment, transparent communication and employer-led opportunities.</p></div></section>

    <section className="section light"><div className="wrap narrow center"><ShieldCheck size={48} className="blueIcon"/><span className="tag">Our Commitment</span><h2>Transparency comes first.</h2><p>We do not promise employment where no vacancy exists. We do not guarantee international placement. Opportunities depend on employer requirements, candidate eligibility and available vacancies.</p><p>Our goal is simple: to build a recruitment business that candidates can trust and employers can rely on.</p></div></section>

    <section className="section"><div className="wrap narrow center"><span className="tag">Our Vision</span><h2>Connecting African talent locally and globally.</h2><p>Our vision is to become a trusted workforce partner connecting African talent with opportunities locally and globally.</p></div></section>

    <section id="contact" className="contact"><div className="wrap split contactgrid"><div><span className="tag gold">Contact Us</span><h2>Ready to connect talent with opportunity?</h2><p>Whether you are looking for work or looking to hire, speak to Talent Bridge Global.</p><div className="contactlinks"><a href="tel:+27762139272"><Phone/> +27 76 213 9272</a><a href="mailto:info@talentbridgeglobal.co.za"><Mail/> info@talentbridgeglobal.co.za</a><a href="https://www.talentbridgeglobal.co.za"><Globe2/> www.talentbridgeglobal.co.za</a></div></div><div className="contactbox"><h3>Quick Enquiry</h3><p>Send us a WhatsApp message and tell us whether you are a candidate or employer.</p><a className="primary" href="https://wa.me/27762139272?text=Hello%20Talent%20Bridge%20Global%2C%20I%20would%20like%20more%20information." target="_blank">Chat on WhatsApp</a></div></div></section>

    <footer><div className="wrap foot"><div className="brand"><img src="/talent-bridge-logo.jpeg"/><span><b>Talent Bridge Global</b><small>Connecting Talent. Creating Opportunity.</small></span></div><p>Recruit. Train. Verify. Place.</p><small>© {new Date().getFullYear()} Talent Bridge Global. All rights reserved.</small></div></footer>
  </div>
}
