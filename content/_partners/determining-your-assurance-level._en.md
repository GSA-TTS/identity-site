---
layout: partners/determining-your-assurance-level
permalink: /partners/determining-your-assurance-level/
title: >-
    Determining your assurance level
---

## About assurance levels

Assurance levels (also called “Service levels,” or “<a href="https://csrc.nist.gov/glossary/term/identity_assurance_level" class="external-link">Levels of Assurance</a>”) is a general term referring to the trustworthiness of a given transaction. Assurance levels are considered essential components of identity systems, due to the underlying complexity of identity verification processes. Generally, the higher the Service Levels, the greater the trustworthiness of the authentication and verification processes that occurred for a specific transaction and identity. 

Assurance levels can be general or specific. <a href="https://pages.nist.gov/800-63-FAQ/#q-1" class="external-link">NIST’s 800-63 publication</a> previously was a monolithic Level of Assurance (LOA) in revisions 1 and 2. Revision 3, the current version, distinguishes between the level of confidence in an identity proofing process (IAL), authentication assurance level (AAL), and federation assurance level (FAL).

**Examples:**

<table class="usa-table margin-bottom-4">
  <thead>
    <tr>
      <th scope="col">Assurance Level Type</th>
      <th scope="col">Authentication Assurance Level (AAL)</th>
      <th scope="col">Identity Assurance Level (IAL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Focus</td>
      <td>Verifying the user is associated with an existing account</td>
      <td>
        Verifying the legitimacy of the identity information when creating an
        account
      </td>
    </tr>
    <tr>
      <td>Techniques</td>
      <td>Passwords, MFA</td>
      <td>
        Credential issuance, document verification, data validation, biometrics
      </td>
    </tr>
    <tr>
      <td>NIST Standards</td>
      <td>
        <a
          href="https://pages.nist.gov/800-63-3/sp800-63b.html"
          class="external-link"
          >NIST SP 800-63B</a
        >
      </td>
      <td>
        <a
          href="https://pages.nist.gov/800-63-3/sp800-63a.html"
          class="external-link"
          >NIST SP 800-63A</a
        >
      </td>
    </tr>
    <tr>
      <td>Levels of Assurance</td>
      <td>AAL1, AAL2, AAL3</td>
      <td>IAL1, IAL2, IAL3</td>
    </tr>
  </tbody>
</table>

### Guidance on assurance levels from OMB and NIST
Determining the right level of identity assurance is an important consideration when integrating your use case with Login.gov. This ensures you strike the appropriate balance between usability and identity fraud mitigation. It also ensures you are compliant. <a href="https://www.whitehouse.gov/wp-content/uploads/2019/05/M-19-17.pdf" class="external-link">OMB Memo 19-17</a> requires agencies to incorporate Digital Identity Risk Management (DIRA) as defined in <a href="https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-63-3.pdf" class="external-link">NIST Special Publication 800-63</a> into their processes. The ICAM Subcommittee developed a <a href="https://www.idmanagement.gov/playbooks/dira/" class="external-link">playbook</a> that outlines a Digital Identity Risk Assessment (DIRA) process to help federal agency Chief Information Officer (CIO) and Chief Information Security Officer (CISO) teams and business application owners: 

1. Update and maintain consistent processes; 
2. Determine whether an agency application requires a DIRA; 
3. Integrate DIRA into agency Risk Management Framework (RMF) processes; and 
4. Learn practices to implement DIRA processes.

### What Identity Assurance Level (IAL) does your application need?

If your application has an account, we recommend you complete the Digital Identity Risk Management (DIRA) <a href="https://www.idmanagement.gov/playbooks/dira/" class="external-link">process</a> to determine IAL-level according to NIST 800-63 revision 3. We’ve extrapolated the following from the <a href="https://www.idmanagement.gov/playbooks/dira/#play-4-shortcut-decision-trees" class="external-link">DIRA shortcut guide</a>:

**Login.gov’s Authentication-only service (IAL1 in 800-63 rev 3) may be the appropriate service if ALL of the following are true:**

- Your application does not provide Controlled Unclassified Information (CUI) to the public. 
- Your application does not allow users to complete a financial transaction or provide banking information. 
- Your application does not allow users to request records
- Your application does not require users to verify their Personally Identifiable Information (PII) or Protected Health Information (PHI) of other people. 

**Login.gov’s IAL2 Identity Verification (IdV) services may be the appropriate service if ANY of the following are true:**

- Your application provides access to Controlled Unclassified Information (CUI)
- Your application allows users to complete a financial transaction or provide banking information
- Your application allows users to request records
- Your application requires users to verify their PII or PHI

**Login.gov also offers a IdV service without a facial matching step.**

We encourage agencies to leverage our IAL2 workflow from a compliance and anti-fraud perspective. For agencies that do not need IAL2 compliance, but desire document verification in addition to a username and password, we offer a version of identity verification that does not include a facial matching step. There is no cost difference between this and our IAL2 service. 

NIST is in the process of drafting a fourth revision of 800-63 that includes an updated set of assurance levels. We plan to support these assurance levels, but will not be able to provide guidance on them until the final version is published.
