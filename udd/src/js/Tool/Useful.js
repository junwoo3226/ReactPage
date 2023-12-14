import React, { useState } from "react";

function Useful() {
  // 현재 열려있는 섹션을 추적
  const [openSection, setOpenSection] = useState(null);

  // 섹션을 토글하는 함수
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <main id="primary" className="site__main layout--single layout--page">
      <article
        id="post-251"
        className="post-251 page type-page status-publish hentry"
      >
        <h1 className="page__title">Useful Forms</h1>
        <div className="page__content block-area">
          {/* Course Registration Section */}
          <h2 className="wp-block-heading">Course registration</h2>
          <div className="wp-block-ub-content-toggle">
            {/* Prerequisite Exemption Form */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("prerequisite")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "prerequisite" ? "▼" : "▶"} Prerequisite
                Exemption Form
              </p>
            </div>
            {openSection === "prerequisite" && (
              <div className="wp-block-ub-content-toggle-accordion-content-wrap">
                <p>
                  Please check THREE signatures below before you hand in this
                  form.
                </p>
                <ul>
                  <li>Signature of Instructor</li>
                  <li>Signature of Academic advisor</li>
                  <li>Signature of Applicant</li>
                </ul>
                <div className="wp-block-buttons is-style-outline">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="https://www.dropbox.com/s/8l6ddmj8znim8vl/%EB%B6%99%EC%9E%843.%20%EC%88%98%EC%97%85_%EC%84%A0%EC%9D%B4%EC%88%98%EB%A9%B4%EC%A0%9C%20%EC%8B%A0%EC%B2%AD%EC%84%9C%EF%BC%8FPrerequisite%20Exemption%20Form.docx?dl=0"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}

            {/* Application for Course Registration */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("courseRegistration")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "courseRegistration" ? "▼" : "▶"} Application
                for Course Registration
              </p>
            </div>
            {openSection === "courseRegistration" && (
              <div className="wp-block-ub-content-toggle-accordion-content-wrap">
                <p>
                  You can register courses via UNIST Portal in most cases. This
                  form will be needed in some cases.
                </p>
                <ul>
                  <li>Signature of Instructor</li>
                  <li>Signature of Academic advisor</li>
                  <li>Signature of Applicant</li>
                </ul>
                <div className="wp-block-buttons is-style-outline">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="https://www.dropbox.com/s/7ic1wrlj8elpi06/Course%20Registration%20(Undergraduate).docx?dl=0"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download (Undergraduate)
                  </a>
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="https://www.dropbox.com/s/0cohtka5r04op1v/Course%20Registration%20(Graduate).docx?dl=0"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download (Graduate)
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Experimental Budget Section */}
          <h2 className="wp-block-heading">Experimental Budget</h2>
          <p>
            Types of Experimental Budget includes (1) Purchasing materials and
            (2) Payment for experiment participation. You can read detail
            guideline via the{" "}
            <a
              href="https://www.dropbox.com/s/uwhfeiisxcbztib/붙임3-2.%20DHE%20Experimental%20Budget%20Guideline%20%282020.02.24%29.pdf?dl=0"
              data-type="URL"
              data-id="https://www.dropbox.com/s/uwhfeiisxcbztib/붙임3-2.%20DHE%20Experimental%20Budget%20Guideline%20%282020.02.24%29.pdf?dl=0"
              target="_blank"
              rel="noreferrer noopener"
            >
              link
            </a>
            .
          </p>
          <div className="wp-block-ub-content-toggle">
            {/* Purchasing Materials Section */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("purchasingMaterials")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "purchasingMaterials" ? "▼" : "▶"} Purchasing
                materials
              </p>
            </div>
            {openSection === "purchasingMaterials" && (
              <div className="wp-block-ub-content-toggle-accordion-content-wrap">
                <p>
                  Hand in this form with material information BEFORE purchasing.
                </p>
                <div className="wp-block-buttons is-style-outline">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="https://www.dropbox.com/s/acxiofw8hwd0bnk/Purchasing%20materials.hwp?dl=0"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}

            {/* Payment for Experiment Participation Section */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("paymentParticipation")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "paymentParticipation" ? "▼" : "▶"} Payment for
                Experiment participation
              </p>
            </div>
            {openSection === "paymentParticipation" && (
              <div className="wp-block-ub-content-toggle-accordion-content-wrap">
                <p>You can apply payment for experiment participation.</p>
                <div className="wp-block-buttons is-style-outline">
                  <a
                    className="wp-block-button__link wp-element-button"
                    href="https://www.dropbox.com/s/omrcsdnf2e8n4sa/Payment%20for%20Experiment%20participation.hwp?dl=0"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Graduation Forms for Graduate Students (CDE/Design) */}
          {/* 이 섹션은 예시로 추가됩니다. */}
          <h2 className="wp-block-heading">
            Graduation forms for Graduate students (CDE/Design)
          </h2>
          <div className="wp-block-ub-content-toggle">
            {/* MS Students Section */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("msStudents")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "msStudents" ? "▼" : "▶"} MS students
              </p>
            </div>
            {openSection === "msStudents" && (
              <div
                role="region"
                aria-expanded="true"
                className="wp-block-ub-content-toggle-accordion-content-wrap"
                id="ub-content-toggle-panel-0-a8a709eb-5976-4c4d-8f80-77a1bf021c59"
              >
                <p>There are FOUR forms as follows:</p>
                <ul>
                  <li>Nomination of Green Light Meeting Examining Committee</li>
                  <li>Green Light meeting evaluation</li>
                  <li>Master’s thesis evaluation</li>
                  <li>MGP/Thesis Approval</li>
                </ul>
                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fo/9vm07ci0oy29w31ab6n8w/h?rlkey=odh8wdqtds4oowlm8fjx17lf2&dl=0"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Download all forms
                    </a>
                  </div>
                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/11/1-2.Nomination-of-Green-Light-Meeting-Examining-Committee-Design.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Nomination of Committee (Design)
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/11/1-1.Nomination-of-Green-Light-Meeting-Examining-Committee-CDE.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Nomination of Committee (CDE)
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://design.unist.ac.kr/wp-core/wp-content/uploads/2023/11/2.Green-Light-meeting-Evaluation-v2.docx"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Green Light meeting evaluation
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fo/b85o5xs7kr5zm7w6eomxg/h?rlkey=4e20f7se5jnycf2wfy1mir384&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download thesis evaluation
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fo/ohvz6u63bkbi569oe1li7/h?rlkey=y1gs7x5wg8ws7z2nd9pnm8ojk&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download MGP/Thesis Approval
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* PhD Students Section */}
            <div
              className="wp-block-ub-content-toggle-accordion-title-wrap"
              onClick={() => toggleSection("phdStudents")}
            >
              <p className="wp-block-ub-content-toggle-accordion-title">
                {openSection === "phdStudents" ? "▼" : "▶"} PhD students
              </p>
            </div>
            {openSection === "phdStudents" && (
              <div
                role="region"
                aria-expanded="true"
                className="wp-block-ub-content-toggle-accordion-content-wrap"
                id="ub-content-toggle-panel-1-a8a709eb-5976-4c4d-8f80-77a1bf021c59"
              >
                <p>There are FOUR forms as follows:</p>
                <ul>
                  <li>Nomination of Ph.D. Pre-defense Examining Committee</li>
                  <li>Evaluation of Ph.D. Pre-defense Examination</li>
                  <li
                    style={{
                      fontSize: "1.5rem",
                      color: "var(--bs-body-color)",
                      fontFamily: "var(--bs-body-font-family)",
                      textAlign: "var(--bs-body-text-align)",
                      backgroundColor: "var(--bs-body-bg)",
                    }}
                  >
                    Doctoral dissertation evaluation
                  </li>
                  <li>Doctoral dissertation approval</li>
                </ul>
                <p>
                  *You can print out{" "}
                  <strong>Dissertation nomination of committee</strong> from
                  UNIST portal.
                </p>
                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                  {/* Repeat the pattern below for each download link */}
                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fo/iqabfdlfu465qoqxqr65w/h?rlkey=v775xa4wc9alw79y8ysrwuvra&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download all forms
                    </a>
                  </div>
                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fi/xsmdnc5s175xt8891fipx/1.Nomination-of-Ph.D.-Pre-defense-Examining-Committee.hwp?rlkey=hqgxvk01uzno45hci8oqcn8zl&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Pre-defense Nomination of Committee
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fi/1p96006qn70kaxgv0438f/2.Evaluation-of-Ph.D.-Pre-defense-Examination.hwp?rlkey=mv6hhkvs2dhia79x0rxx7c27t&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download Pre-defense evaluation
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fi/q2kuedi5vugyioll7j3c7/3.Doctoral-dissertation-evaluation.hwp?rlkey=uvrxynint37hfmcmsv14f19u1&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download dissertation evaluation
                    </a>
                  </div>

                  <div className="wp-block-button is-style-outline">
                    <a
                      className="wp-block-button__link wp-element-button"
                      href="https://www.dropbox.com/scl/fi/8n112pwpxd323skmkisjr/4.Master-s-Thesis-Doctoral-Dissertation-Approval-Form-2022.12.13.docx?rlkey=ce2ysnqb2abkml8bm428qodp1&dl=0"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download dissertation Approval
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <h2 className="wp-block-heading">Research fund</h2>
          <p>
            Please note before using research fund. You can check details via
            this{" "}
            <a
              rel="noreferrer noopener"
              href="https://www.dropbox.com/sh/tsvzclmudesiy7o/AAAYnR8fQd2Osuu-2BXuTv8qa?dl=0"
              data-type="URL"
              data-id="https://www.dropbox.com/sh/tsvzclmudesiy7o/AAAYnR8fQd2Osuu-2BXuTv8qa?dl=0"
              target="_blank"
            >
              link
            </a>
            .
          </p>
          <p>
            <strong>
              You can write the form:
              <br />
            </strong>
            Portal → Research Project → Research Project → Research budget
            execution list
          </p>
        </div>
      </article>
      <aside className="closer__wrap">
        <img
          className="closer"
          width="30"
          height="15"
          src="https://design.unist.ac.kr/wp-core/wp-content/themes/unistdesign/assets/brand.svg"
          alt="Brand Logo"
        />
      </aside>
    </main>
  );
}

export default Useful;
