import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Resume() {
  return (
    <section>
      <h1 id="resume">Resume</h1>
      <p></p>
      <p className="mx-2 my-2">
        Download a copy ----{'>'} &nbsp;
        <a href="./assets/files/ResumeTech2021.pdf" download="ResumeTech2021.pdf"
        >
          <FontAwesomeIcon icon={['fas', 'download']} size={['2x']} />
        </a>
      </p>
      <br></br>
      <p>
        <h2>Technical Skills</h2>
        <h3>Proficient In:</h3>
        <ul>
          <li>•	ADMS (Advanced Distribution Management System) infrastructure design and configuration </li>
          <li>•	Microsoft Licensing: self-audit, 3rd party audit, and compliance management </li>
          <li>•	Data center architecting, DR (Disaster Recovery), BCP (Business Continuity Planning) </li>
          <li>•	Virtualization systems architecture (Hyper-V, VMware, and VMware Cloud offerings) and storage system design </li>
          <li>•	Microsoft domain architecture and maintenance (site configuration, Group Policy, and Active Directory, upgrade services, and Azure AD)</li>
          <li>•	HPE Synergy Frame configuration and implementation</li>
          <li>•	Linux (Ubuntu, Red Hat – RHEL, CentOS) experiences</li>
          <li>•	On-prem Exchange and Office 365 administration</li>
          <li>•	Develop Veeam services (Cloud and on-prem), VMware & Hyper-V design and implementation </li>
          <li>•	Reverse engineering, scripting, and minor programming (PowerShell, Shell/Bash, Python 3.x, PERL, Swift, JavaScript, Node JS, GitHub services) </li>
          <li>•	IP Phone Systems administration (Avaya & ShoreTel) and DR/BCP telephony planning, 3rd party cloud administration </li>
          <li>•	Network hardening and administration (specializing in HP ProCurve/Aruba Chassis, Cisco Switches & ASA’s, and Barracuda NG Firewalls) </li>
          <li>•	SOC 2, Type 2 compliance (deployment, auditor evidence, and continued maintenance)</li>
        </ul>
      </p>
    </section>
  );
}

export default Resume;