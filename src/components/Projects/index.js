import React from 'react'
import './index.scss'
import Rubix from '../../assets/images/3.png'
import Willowmore from '../../assets/images/4.png'
import EatClub from '../../assets/images/1.png'
import HaloSolutions from '../../assets/images/5.png'
import Csiro from '../../assets/images/6.png'
import Moula from '../../assets/images/7.png'

function Projects() {
  return (
    <div className="project">
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>EatClub </h1>
        <h3 style={{ color: '#cccccc' }}>
          EATCLUB is a world-first app, that allows restaurants with empty
          tables to immediately upload last minute deals that you can redeem.I
          created this app by using technologies like React and MUI for the
          frontend, and Node.js and AWS for the backend and database.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          React.js, MUI, GraphQL, Node.js, AWS, Jest
        </h3>
        <a href="https://eatclub.com.au/" target="_blank">
          <img src={EatClub} className="meal" alt="Meals"></img>
        </a>
      </div>
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>Rubix</h1>
        <h3 style={{ color: '#cccccc' }}>
          RUBIX is a data and analytics IT service company that offers data
          strategy, business intelligence, and artificial intelligence services.
          I Worked on the block difficulty adjustment algorithm for the
          blockchain and Optimized application in Golang for thread contention.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          Golang, Rust, GraphQL, Web3.js, React.js, MUI
        </h3>
        <a href="https://rubix.com.au/" target="_blank">
          <img src={Rubix} className="meal" alt="Meals"></img>
        </a>
      </div>
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>Willowmore</h1>
        <h3 style={{ color: '#cccccc' }}>
          WILLOWMORE is a Security and Sustainability tech company that provides
          an access control management platform for enterprise and government
          critical sites. I made the API endpoints using JSON Schemas to model
          and validate the input and output.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          Java, Servlet, ERP System, Network Security
        </h3>
        <a href="https://www.willowmore.com.sg/" target="_blank">
          <img src={Willowmore} className="meal" alt="Meals"></img>
        </a>
      </div>
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>HaloSolutions </h1>
        <h3 style={{ color: '#cccccc' }}>
          Halo is cutting-edge technologies are leading the world of public
          safety with a new wave of solutions for incident, task & staff
          management. I worked as full stack developer and implemented many
          features and fixed the performance issues.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          React.js, GraphQL, AWS, Serverless, Django, Express
        </h3>
        <a href="https://www.halosolutions.com/" target="_blank">
          <img src={HaloSolutions} className="meal" alt="Meals"></img>
        </a>
      </div>
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>Csiro</h1>
        <h3 style={{ color: '#cccccc' }}>
          At CSIRO, we solve the greatest challenges using innovative science
          and technology. I developed smart contracts for token, ratings, and
          airdrop. And also interacted with the front-end library for smart
          contracts.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          React.js, Web3.js, Solidity, Ethereum, GraphQL
        </h3>
        <a href="https://www.csiro.au/" target="_blank">
          <img src={Csiro} className="meal" alt="Meals"></img>
        </a>
      </div>
      <div className="project-1">
        <h1 style={{ color: '#dddddd' }}>Moula</h1>
        <h3 style={{ color: '#cccccc' }}>
          MOULA provides business loans to small to medium sized businesses in
          Australia. I developed an eCommerce applications using MERN stack that
          allows users to buy medications.
        </h3>
        <h1 style={{ color: '#dddddd' }}>Stack</h1>
        <h3 style={{ color: '#cccccc' }}>
          React.js, Redux, eCommerce, Node.js, MongoDB
        </h3>
        <a href="https://moula.com.au/" target="_blank">
          <img src={Moula} className="meal" alt="Meals"></img>
        </a>
      </div>
    </div>
  )
}

export default Projects
