function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"card\" data-aos=\"fade-up\" data-aos-offset=\"10\">\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card-body\">\n                        <div class=\"h4 mt-0 title\">About Me</div>\n                        <p>\n                            A Leader, a manager, an engineer and an analytical individual interested in optimizing the supply chain and manufacturing domain with qualitative and quantitative measures of continuous improvement strategies aiming to bridge the gap between the human\n                            effort in making things efficient and effective automation.\n                        </p>\n                        <p>\n                            An effective learner who believes in continuous learning from the past and create a better future by making trade-off decisions involving efficient and optimal outcomes using the technical and practical skills gained in the process.\n                        </p>\n                        <p>\n                            A well-versed supply chain analyst from online retail business sector with a manufacturing and marketing-based experience in the Motorsport industry developing into a well-rounded lean zealot. With a technical speciality in concepts like forecasting,\n                            Gantt Chart, prediction classification, Lean principles, database design, data retrieval, data analysis and project management principles.\n                        </p>\n\n\n                    </div>\n                </div>\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card-body\">\n                        <div class=\"h4 mt-0 title\">Basic Information</div>\n                        <div class=\"row\">\n                            <div class=\"col-sm-4\">\n                                <strong class=\"text-uppercase\">Date of Birth:</strong>\n                            </div>\n                            <div class=\"col-sm-8\">September 18, 1994</div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-sm-4\">\n                                <strong class=\"text-uppercase\">Email:</strong>\n                            </div>\n                            <div class=\"col-sm-8\">vigneshc994@gmail.com</div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-sm-4\">\n                                <strong class=\"text-uppercase\">Phone:</strong>\n                            </div>\n                            <div class=\"col-sm-8\">+1 631 438 7908</div>\n                        </div>\n                        <div class=\"row mt-3\">\n                            <div class=\"col-sm-4\">\n                                <strong class=\"text-uppercase\">Languages:</strong>\n                            </div>\n                            <div class=\"col-sm-8\">English, Tamil, Telugu</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"contact\">\n  <div\n    class=\"cc-contact-information\"\n    style=\"\n      background-image: url('assets/images/contactus-1.png');\n      background-size: cover;\n      background-position: center center;\n    \"\n  >\n    <div class=\"container\">\n      <div class=\"cc-contact\">\n        <div class=\"row\">\n          <div class=\"col-md-9\">\n            <div class=\"card mb-0\" data-aos=\"zoom-in\">\n              <div class=\"h4 text-center title\">Contact Me</div>\n              <div class=\"row\">\n                <div class=\"card-body\">\n                  <form\n                    name=\"form\"\n                    (ngSubmit)=\"(f.form.valid); contact(); f.resetForm()\"\n                    #f=\"ngForm\"\n                    novalidate\n                  >\n                    <div class=\"p pb-3\" style=\"margin-left: 13px;\">\n                      <strong>Let me know your thoughts ! </strong>\n                    </div>\n                    <div class=\"row mb-6\">\n                      <div class=\"col\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\">\n                            <i class=\"fa fa-user-circle\"></i>\n                          </span>\n                          <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            name=\"name\"\n                            placeholder=\"Name\"\n                            [(ngModel)]=\"model.name\"\n                            #name=\"ngModel\"\n                            [ngClass]=\"{\n                              'is-invalid': f.submitted && name.invalid\n                            }\"\n                            required\n                          />\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\">\n                            <i class=\"fa fa-file-text\"></i>\n                          </span>\n                          <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            name=\"subject\"\n                            placeholder=\"Subject\"\n                            [(ngModel)]=\"model.subject\"\n                            #subject=\"ngModel\"\n                            [ngClass]=\"{\n                              'is-invalid': f.submitted && subject.invalid\n                            }\"\n                            required\n                          />\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\">\n                            <i class=\"fa fa-envelope\"></i>\n                          </span>\n                          <input\n                            class=\"form-control\"\n                            type=\"text\"\n                            name=\"email\"\n                            placeholder=\"E-mail\"\n                            [(ngModel)]=\"model.email\"\n                            #email=\"ngModel\"\n                            [ngClass]=\"{\n                              'is-invalid': f.submitted && email.invalid\n                            }\"\n                            pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\"\n                            required\n                          />\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mb-3\">\n                      <div class=\"col\">\n                        <div class=\"form-group\">\n                          <textarea\n                            class=\"form-control\"\n                            name=\"message\"\n                            placeholder=\"Your Message\"\n                            [(ngModel)]=\"model.message\"\n                            #message=\"ngModel\"\n                            [ngClass]=\"{\n                              'is-invalid': f.submitted && message.invalid\n                            }\"\n                            required\n                          ></textarea>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col\">\n                        <button class=\"btnsend btn-primary\" type=\"submit\">\n                          Send\n                        </button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<ng-snotify class=\"material\"></ng-snotify>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"education\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Education</div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div\n          class=\"col-md-3 bg-primary\"\n          data-aos=\"fade-right\"\n          data-aos-offset=\"50\"\n          data-aos-duration=\"500\"\n        >\n          <div class=\"card-body cc-education-header\">\n            <p>2019 - 2020</p>\n            <div class=\"h5\">Master's Degree</div>\n          </div>\n        </div>\n        <div\n          class=\"col-md-9\"\n          data-aos=\"fade-left\"\n          data-aos-offset=\"50\"\n          data-aos-duration=\"500\"\n        >\n          <div class=\"card-body\">\n            <div class=\"h5\">Master of Science</div>\n            <h4 class=\"category\">Stony Brook University</h4>\n            CGPA - 3.84 / 4 <br />\n            Coursework:\n            <ul>\n              <li>Analysis of Algorithms</li>\n              <li>Data Structures</li>\n              <li>Mobile Cloud Computing (Android Apps with Cloud)</li>\n              <li>Network Security Engineering</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"row\">\n        <div\n          class=\"col-md-3 bg-primary\"\n          data-aos=\"fade-right\"\n          data-aos-offset=\"50\"\n          data-aos-duration=\"500\"\n        >\n          <div class=\"card-body cc-education-header\">\n            <p>2012 - 2016</p>\n            <div class=\"h5\">Bachelor's Degree</div>\n          </div>\n        </div>\n        <div\n          class=\"col-md-9\"\n          data-aos=\"fade-left\"\n          data-aos-offset=\"50\"\n          data-aos-duration=\"500\"\n        >\n          <div class=\"card-body\">\n            <div class=\"h5\">Bachelor of Engineering</div>\n            <h4 class=\"category\">Anna University</h4>\n            CGPA - 8.46 / 10 <br />\n            Coursework:\n            <ul>\n              <li>Data Structures</li>\n              <li>Object Oriented Programming Language</li>\n              <li>Computer Networks</li>\n              <li>Computer Architecture</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"experience\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Work Experience</div>\n        <div class=\"colorlib-narrow-content\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"timeline-centered\">\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-1\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Co-owner\n                                        <span> - June 2018 to July 2019</span>\n                                    </h2>\n                                    <h4>Tool Trunk</h4>\n                                    <!-- <p>\n                                        As a Full Stack Web App Developer, was responsible for designing and developing applications, end to end\n                                    </p> -->\n                                    <ul>\n                                        <li>\n                                            Sold engineering tools to campus students, target audience footfall of around 800 students per year. </li>\n                                        <li>\n                                            Headed sales and distribution team of 6 people to sell tools to almost 350 students. </li>\n                                        <li>\n                                            Managed a small business venture, learnt risks involved and strategies to sustain in market competition among 3 similar campus companies. </li>\n\n                                    </ul>\n                                    <!-- <p>\n                                        Technologies Used: Java, Spring Boot, RESTful Web Services, Angular, Oracle Database (SQL), Ansible\n                                    </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInRight\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-2\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Supply chain and Operations Co-op <span> - July 2016 to June 2018</span>\n                                    </h2>\n                                    <h4>Wayfair LLC</h4>\n                                    <!-- <p>\n                                        An Application Developer responsible for developing and enhancing esisting Web Applications\n                                    </p> -->\n                                    <ul>\n                                        <li>\n                                            Increased volume-weighted coverage of assembly guides by 8% (71%->79%) helping reduce high-cost resolutions with targeted weighted outreach to 150+ suppliers ($320,428 potential GIE savings - 12.07% GIE/Wholesale cost) </li>\n                                        <li>\n                                            Standardized replacement part lead times of 260 suppliers at a weekly cadence to remove replacement part lead time discrepancies, monitored the head supplier metrics and reported bottlenecks using pivot tables and Tableau visualization driving continuous\n                                            improvement </li>\n                                        <li>\n                                            Performed sensitivity analysis for 200 tail suppliers to optimize their replacement part lead times and set lead times based on the analysis using excel, improving lead time related late deliveries and miss-shipments</li>\n                                        <li>\n                                            Performed root cause analysis and analyzed Wayfair Automated Lead Time (WALT) tool to gauge supplier’s performance metrics and issues like waterfalling resulting in more accurate and practical lead time settings for supplier portfolio and JIT order deliveries\n                                        </li>\n                                        <li>\n                                            Reported WALT performance trends and suggested improvements to senior management by applying PDCA principles resulting in accurate performance settings\n                                        </li>\n                                        <li>Increased WALT supplier coverage to 40% volume by analyzing and adding 4300 suppliers (tail and bulk lead-time eligible suppliers) to the logical algorithmic tool, maximizing automation in lead time settings and\n                                            continuously evaluating supplier performance results</li>\n                                        <li>\n                                            Investigated and reported weekly replacement parts’ cancellation trends and KPIs which resulted in high-cost resolution for performance managers to negotiate supplier replacement part agreement and developed a process improvement plan for defaulter suppliers\n                                        </li>\n                                        <li>Developed info hub and help centre pages for the incidence resolution team</li>\n\n\n                                    </ul>\n                                    <!-- <p>\n                                        Technologies Used: Java, Spring MVC, RESTful Web Services, MS SQL Database, Ansible, Bladelogic\n                                    </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-3\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Production Trainee <span> - June 2018 to July 2019</span>\n                                    </h2>\n                                    <h4>R.S Trading</h4>\n                                    <!-- <p>\n                                      As a Full Stack Web App Developer, was responsible for designing and developing applications, end to end\n                                  </p> -->\n                                    <ul>\n                                        <li>\n                                            Performed procurement and supply operations at an injection moulding, smelting and electrical component manufacturing company</li>\n                                        <li>\n                                            Managed supply/demand planning using Tally-ERP software to increase transparency and efficiency, in turn, maximizing profitability reducing inventory by 10.7%, lead time by 10 days and improved overall productivity</li>\n                                        <li>\n                                            Handled administrative tasks and overlooked process optimization from manufacturing, supply, warehouse till dispatch by creating a VSM model and optimize packaging using Truck Load concept -Transferring into a pull model</li>\n\n                                    </ul>\n                                    <!-- <p>\n                                      Technologies Used: Java, Spring Boot, RESTful Web Services, Angular, Oracle Database (SQL), Ansible\n                                  </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-4\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Manufacturing Associate <span> - June 2018 to July 2019</span>\n                                    </h2>\n                                    <h4>Orion Racing India</h4>\n                                    <!-- <p>\n                                    As a Full Stack Web App Developer, was responsible for designing and developing applications, end to end\n                                </p> -->\n                                    <ul>\n                                        <li>\n                                            Improved manufacturing techniques by using more cost-effective and time-saving methods and upgraded manufacturing facilities and managed inventory, increasing productivity, reducing lag time and waste between processes by implementing 5S techniques, lean\n                                            principles, material planning, and process improvement techniques for easy flow of inventory and on-time manufacturing</li>\n                                        <li>\n                                            Prepared the cost and manufacturing report and Developed C-BOM (Cost-Bill of Materials), process flow charts of system assembly and manufactured parts, plant flow, and production process according to industrial production standards along with the updated\n                                            Gantt Chart timelines for FSAE costing events</li>\n                                        <li>\n                                            Part of the international award-winning cost and manufacturing team at Formula Student Germany 2016</li>\n\n                                    </ul>\n                                    <!-- <p>\n                                    Technologies Used: Java, Spring Boot, RESTful Web Services, Angular, Oracle Database (SQL), Ansible\n                                </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-5\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Marketing Head<span> - June 2018 to July 2019</span>\n                                    </h2>\n                                    <h4>Orion Racing India</h4>\n                                    <!-- <p>\n                                  As a Full Stack Web App Developer, was responsible for designing and developing applications, end to end\n                              </p> -->\n                                    <ul>\n                                        <li>\n                                            Procured ₹1.8 million in financial sponsorships </li>\n                                        <li>\n                                            Involved in branding, public relations, negotiation with sponsorship deals and promotion of the organization</li>\n                                        <li>\n                                            Managed the crowdfunding campaign raising ₹3,400,00, thus improving brand association and marketing strategies of the organization as a Marketing Personnel</li>\n\n                                        <li>\n                                            Formulated finances and budgeting and prepared Business Plan Executive Summary to set up a virtual company and plot an expansion plan for FSAE Business Plan Presentations competitions\n                                        </li>\n                                        <li>Incorporated a business model, forecasting, logistics, warehousing plan, product scheduling and life cycles concept in the Business Plan Presentation</li>\n\n                                    </ul>\n                                    <!-- <p>\n                                  Technologies Used: Java, Spring Boot, RESTful Web Services, Angular, Oracle Database (SQL), Ansible\n                              </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                        <article class=\"timeline-entry animate-box\" data-animate-effect=\"fadeInLeft\">\n                            <div class=\"timeline-entry-inner\">\n                                <div class=\"timeline-icon color-1\">\n                                    <i class=\"icon-pen2\"></i>\n                                </div>\n\n                                <div class=\"timeline-label\">\n                                    <h2>\n                                        Computer Lab Assistant<span> - June 2018 to July 2019</span>\n                                    </h2>\n                                    <h4>Northeastern University</h4>\n                                    <!-- <p>\n                                As a Full Stack Web App Developer, was responsible for designing and developing applications, end to end\n                            </p> -->\n                                    <ul>\n                                        <li>\n                                            Resolving hardware and software issues in the computer lab</li>\n                                        <li>\n                                            Providing student support, customer service, maintaining inventory and scheduling Troubleshooting software and technical queries of students.\n                                        </li>\n                                        <li>\n                                            Maintain student accounts, virtual lab technology and update to trending technology</li>\n\n                                        <li>\n                                            Maintaining Classroom functioning and of NUFlex classrooms and troubleshooting technical issues related to zoom meetings, virtual teaching tech and classroom tech</li>\n                                    </ul>\n                                    <!-- <p>\n                                Technologies Used: Java, Spring Boot, RESTful Web Services, Angular, Oracle Database (SQL), Ansible\n                            </p> -->\n                                </div>\n                            </div>\n                        </article>\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\n  <div class=\"container text-center\">\n    <a\n      class=\"cc-facebook btn btn-link\"\n      href=\"https://www.facebook.com/vigneshc994/\"\n      target=\"_blank\"\n    >\n      <i class=\"fa fa-facebook fa-2x\" aria-hidden=\"true\"></i>\n    </a>\n    <a\n      class=\"cc-github btn btn-link\"\n      href=\"https://github.com/vignesh-chivukula\"\n      target=\"_blank\"\n    >\n      <i class=\"fa fa-github fa-2x\" aria-hidden=\"true\"></i>\n    </a>\n  </div>\n  <div class=\"text-center text-muted\">\n    <p>&copy; All rights reserved.</p>\n  </div>\n</footer>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <div class=\"profile-page sidebar-collapse\">\n        <nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent bg-primary\" color-on-scroll=\"400\">\n            <div class=\"container\">\n                <div class=\"navbar-translate\">\n                    <a class=\"navbar-brand\" href=\"#\" rel=\"tooltip\">About Karan</a>\n                    <button class=\"navbar-toggler navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n            <span class=\"navbar-toggler-bar bar1\"></span>\n            <span class=\"navbar-toggler-bar bar2\"></span>\n            <span class=\"navbar-toggler-bar bar3\"></span>\n          </button>\n                </div>\n                <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n                    <ul class=\"navbar-nav\">\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link smooth-scroll\" href=\"#about\">About</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link smooth-scroll\" href=\"#experience\">Experience</a\n              >\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link smooth-scroll\" href=\"#projects\">Projects</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link smooth-scroll\" href=\"#skill\">Skills</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link smooth-scroll\" href=\"#education\">Education</a>\n                        </li>\n                        <li class=\"nav-item\">\n                            <a class=\"nav-link smooth-scroll\" href=\"#contact\">Contact</a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </nav>\n    </div>\n</header>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileIntroIntroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"profile-page\">\n    <div class=\"wrapper\">\n        <div class=\"page-header page-header-small\" filter-color=\"green\">\n            <div class=\"page-header-image\" data-parallax=\"true\" style=\"background-image: url('assets/images/intro.jpg');\"></div>\n            <div class=\"container\">\n                <div class=\"content-center\">\n                    <div class=\"cc-profile-image\">\n                        <a href=\"#\">\n                            <img src=\"assets/images/karan.jpg\" alt=\"Image\" />\n                        </a>\n                    </div>\n                    <div class=\"h2 title\">Karan Parikh</div>\n                    <p class=\"category text-white\">\n                        Industrial Management\n                    </p>\n                    <a class=\"btn btn-primary smooth-scroll mr-2\" href=\"#contact\" data-aos=\"zoom-in\" data-aos-anchor=\"data-aos-anchor\">Contact Me</a\n          >\n          <a\n            class=\"btn btn-primary\"\n            href=\"https://drive.google.com/file/d/1TZ9NaEz9lLFWstJyOhu22TFHltbleY8U/view?usp=sharing\"\n            target=\"_blank\"\n            data-aos=\"zoom-in\"\n            data-aos-anchor=\"data-aos-anchor\"\n            >Resume</a\n          >\n        </div>\n      </div>\n      <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n            <a\n              class=\"btn btn-default btn-round btn-lg btn-icon\"\n              href=\"https://www.linkedin.com/in/vignesh-chivukula/\"\n              target=\"_blank\"\n              rel=\"tooltip\"\n              title=\"Follow me on Linkedin\"\n            >\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n                    <!-- <a class=\"btn btn-default btn-round btn-lg btn-icon\" href=\"https://github.com/vignesh-chivukula\" target=\"_blank\" rel=\"tooltip\" title=\"Follow me on Github\">\n                        <i class=\"fa fa-github\"></i>\n                    </a> -->\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"page-content\">\n  <app-intro></app-intro>\n  <app-about></app-about>\n  <app-experience></app-experience>\n  <app-projects></app-projects>\n  <app-skills></app-skills>\n  <app-education></app-education>\n  <app-contact></app-contact>\n</div>\n<app-footer></app-footer>\n<ngx-spinner\n  bdColor=\"rgba(255,255,255,1)\"\n  size=\"medium\"\n  color=\"#033d5b\"\n  type=\"ball-spin-clockwise\"\n></ngx-spinner>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"projects\">\n  <div class=\"container cc-education\">\n    <div class=\"h4 text-center mb-4 title\">Projects</div>\n\n    <div class=\"row\">\n      <div\n        class=\"col-md-4 col-sm-6 animate-box\"\n        data-animate-effect=\"fadeInLeft\"\n      >\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <h4 class=\"card-title\" style=\"text-align: center;\">\n              Personal Portfolio\n            </h4>\n            <img\n              class=\"card-img-top\"\n              src=\"assets/images/port-rs.png\"\n              alt=\"Card image\"\n              style=\"width: 100%; height: 60%;\"\n            />\n            <div class=\"card-body\">\n              <h5 class=\"card-text\"><b>Tech Stack: </b></h5>\n              <h5 class=\"card-text\">Angular</h5>\n\n              <a\n                href=\"https://github.com/vignesh-chivukula/Portfolio\"\n                target=\"_blank\"\n                class=\"btnexp btn-primary stretched-link\"\n                >Explore Further</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div\n        class=\"col-md-4 col-sm-6 animate-box\"\n        data-animate-effect=\"fadeInLeft\"\n      >\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <h4 class=\"card-title\" style=\"text-align: center;\">\n              Road Side Assistance\n            </h4>\n            <img\n              class=\"card-img-top\"\n              src=\"assets/images/ra-rs.png\"\n              alt=\"Card image\"\n              style=\"width: 100%;\"\n            />\n            <div class=\"card-body\">\n              <h5 class=\"card-text\"><b>Tech Stack: </b></h5>\n              <h5 class=\"card-text\">Angular, Node.js, MySQL, SCSS</h5>\n\n              <a\n                href=\"https://github.com/vignesh-chivukula/Road-side-assistance\"\n                target=\"_blank\"\n                class=\"btnexp btn-primary stretched-link\"\n                >Explore Further\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div\n        class=\"col-md-4 col-sm-6 animate-box\"\n        data-animate-effect=\"fadeInLeft\"\n      >\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <h4 class=\"card-title\" style=\"text-align: center;\">EZ Jobs</h4>\n            <img\n              class=\"card-img-top\"\n              src=\"assets/images/ez-rs.png\"\n              alt=\"Card image\"\n              style=\"width: 100%;\"\n            />\n            <div class=\"card-body\">\n              <h5 class=\"card-text\"><b>Tech Stack: </b></h5>\n\n              <h5 class=\"card-text\">Android SDK, Java, Firebase</h5>\n\n              <a\n                href=\"https://github.com/vignesh-chivukula/job-portal\"\n                target=\"_blank\"\n                class=\"btnexp btn-primary stretched-link\"\n                >Explore Further</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div\n        class=\"col-md-4 col-sm-6 animate-box\"\n        data-animate-effect=\"fadeInLeft\"\n      >\n        <div class=\"blog-entry\">\n          <div class=\"card\">\n            <h4 class=\"card-title\" style=\"text-align: center;\">\n              Human Sensing & Pose recognition\n            </h4>\n            <img\n              class=\"card-img-top\"\n              src=\"assets/images/pose-rs.png\"\n              alt=\"Card image\"\n              style=\"width: 100%;\"\n            />\n            <div class=\"card-body\">\n              <h5 class=\"card-text\"><b>Tech Stack: </b></h5>\n              <h5 class=\"card-text\">Python</h5>\n              <a\n                href=\"https://github.com/vignesh-chivukula/Human-Pose-Recognition\"\n                target=\"_blank\"\n                class=\"btnexp btn-primary stretched-link\"\n                >Explore Further</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"section\" id=\"skill\">\n    <div class=\"container cc-education\">\n        <div class=\"h4 text-center mb-4 title\">Skills</div>\n        <div class=\"row\">\n            <mat-card class=\"skillcard\">\n                <table class=\"skillsTable\">\n                    <tr>\n                        <th>\n                            Certifications\n                        </th>\n                        <th>\n                            <button mat-button> Lean Six Sigma Green Belt- license no. 11356560 (Exemplar Global)</button>\n\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>\n                            Technical Tools\n                        </th>\n                        <th>\n                            <button mat-button>Freemind</button>\n                            <button mat-button>SQL</button>\n                            <button mat-button>Minitab</button>\n                            <button mat-button>MS Office</button>\n                            <button mat-button>Tally-ERP</button>\n                            <button mat-button>Tableau</button>\n                            <button mat-button>PowerBi</button>\n                            <button mat-button>Lingo</button>\n                            <button mat-button>R Studio</button>\n                            <button mat-button>Python</button>\n                            <button mat-button>Arena Simulation</button>\n                            <button mat-button>SAS visual analytics</button>\n                            <button mat-button>SAS data studio</button>\n                            <button mat-button>Toad Data modeler</button>\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>\n                            CAD/CAM/CAE Tools\n                        </th>\n                        <th>\n                            <button mat-button>Solid works</button>\n                            <button mat-button>AutoCAD</button>\n                            <button mat-button>CorelDRAW</button>\n                            <button mat-button>ANSYS</button>\n                            <button mat-button>Photoshop</button>\n                            <button mat-button>C</button>\n                            <button mat-button>C++</button>\n\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>\n                            Blog Post\n                        </th>\n                        <th>\n\n\n                            <a href=\"https://www.skillsire.com/read-blog/123_optimizing-online-retail-industry-using-artificial-intelligence-leveraging-relex.html\" target=\"_blank\" class=\"btnexp btn-primary stretched-link\">\n                                Automating E-Commerce Assortment Decisions</a\n                          >\n                        </th>\n                    </tr>\n                </table>\n            </mat-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: '<router-outlet></router-outlet>'
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile/profile.module */
    "./src/app/profile/profile.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var routes = [{
      path: '',
      component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]
    }];
    var config = {
      useHash: true
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, config), _profile_profile_module__WEBPACK_IMPORTED_MODULE_6__["ProfileModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/about/about.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".row p {\n  font-weight: 700px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9hYm91dC9DOlxcVXNlcnNcXFNhbmplZXYgTURcXERvd25sb2Fkc1xcUG9ydGZvbGlvLW1hc3RlclxcUG9ydGZvbGlvLW1hc3Rlci9zcmNcXGFwcFxccHJvZmlsZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyBwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4iLCIucm93IHAge1xuICBmb250LXdlaWdodDogNzAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/about/about.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/about/about.component.ts ***!
    \**************************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppProfileAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/profile/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/profile/contact/contact.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profile/contact/contact.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/profile/contact/contact.component.ts ***!
    \******************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppProfileContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profile.service */
    "./src/app/profile/profile.service.ts");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js");
    /* harmony import */


    var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../assets/js/smtp.js */
    "./src/assets/js/smtp.js");
    /* harmony import */


    var _assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_js_smtp_js__WEBPACK_IMPORTED_MODULE_4__);

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(snotify, profile) {
        _classCallCheck(this, ContactComponent);

        this.snotify = snotify;
        this.profile = profile;
        this.model = {};
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "contact",
        value: function contact() {
          console.log("insde cntact");
          Email.send({
            Host: "smtp.elasticemail.com",
            Username: "vigneshc994@gmail.com",
            Password: "1D7492915BDD5722F9BB5410A4185091D4D3",
            To: "vigneshc994@gmail.com",
            From: "vigneshc994@gmail.com",
            Subject: this.model.subject,
            Body: "\n      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>".concat(this.model.name, " <br /> <b>Email: </b>").concat(this.model.email, "<br /> <b>Subject: </b>").concat(this.model.subject, "<br /> <b>Message:</b> <br /> ").concat(this.model.message, " <br><br> <b>~End of Message.~</b> ")
          }).then(function (message) {
            if (message == "OK") {
              alert("Thanks for your mail. Will get back to you soon !");
            } else {
              alert(message);
            }
          });
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"]
      }, {
        type: _profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-contact",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/profile/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/profile/education/education.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileEducationEducationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h4 {\n  color: #4a4843;\n  font-size: 20px;\n  margin-bottom: 10px;\n  margin-top: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vQzpcXFVzZXJzXFxTYW5qZWV2IE1EXFxEb3dubG9hZHNcXFBvcnRmb2xpby1tYXN0ZXJcXFBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXHByb2ZpbGVcXGVkdWNhdGlvblxcZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFBO0VBQ0osZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGg0e1xuICAgIGNvbG9yOiM0YTQ4NDM7XG5mb250LXNpemU6IDIwcHg7XG5tYXJnaW4tYm90dG9tOiAxMHB4O1xubWFyZ2luLXRvcDoycHg7XG59IiwiaDQge1xuICBjb2xvcjogIzRhNDg0MztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/education/education.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/profile/education/education.component.ts ***!
    \**********************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppProfileEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EducationComponent = /*#__PURE__*/function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EducationComponent;
    }();

    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-education',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/education/education.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./education.component.scss */
      "./src/app/profile/education/education.component.scss"))["default"]]
    })], EducationComponent);
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".colorlib-experience {\n  padding-top: 4em;\n  padding-bottom: 9em;\n  clear: both;\n  width: 100%;\n  display: block;\n}\n\n@media screen and (max-width: 768px) {\n  .colorlib-experience {\n    padding-top: 5em;\n    padding-bottom: 8em;\n  }\n}\n\n.timeline-centered {\n  position: relative;\n  margin-bottom: 30px;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before,\n.timeline-centered:after {\n  content: \" \";\n  display: table;\n}\n\n.timeline-centered:after {\n  clear: both;\n}\n\n.timeline-centered:before {\n  content: \"\";\n  position: absolute;\n  display: block;\n  width: 4px;\n  background: #f2f3f7;\n  top: 20px;\n  bottom: 20px;\n  margin-left: 29px;\n}\n\n.timeline-centered .timeline-entry {\n  position: relative;\n  margin-top: 5px;\n  margin-left: 30px;\n  margin-bottom: 10px;\n  clear: both;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner {\n  position: relative;\n  margin-left: -20px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon {\n  display: block;\n  width: 40px;\n  height: 40px;\n  background: greenyellow;\n  border-radius: 50%;\n  text-align: center;\n  box-shadow: 0 0 0 5px #f2f3f7;\n  line-height: 40px;\n  float: left;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon i {\n  color: #fff;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-2 {\n  background: aquamarine;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-3 {\n  background: #f9bf3f;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-4 {\n  background: #a84cb8;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-5 {\n  background: #2fa499;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-icon.color-none {\n  background: #fff;\n  width: 20px;\n  height: 20px;\n  margin-left: 10px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label {\n  position: relative;\n  background: #f2f3f7;\n  padding: 1.5em;\n  margin-left: 60px;\n  -webkit-background-clip: padding-box;\n  -moz-background-clip: padding;\n  background-clip: padding-box;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 9px 9px 9px 0;\n  border-color: transparent #f2f3f7 transparent transparent;\n  left: 0;\n  top: 10px;\n  margin-left: -9px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label p + p {\n  margin-top: 15px;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 {\n  font-size: 20px;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif;\n  font-weight: 500;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 a {\n  color: #000;\n}\n\n.timeline-centered .timeline-entry .timeline-entry-inner .timeline-label h2 span {\n  -webkit-opacity: 0.4;\n  -moz-opacity: 0.4;\n  opacity: 0.4;\n  -ms-filter: alpha(opacity=40);\n  filter: alpha(opacity=40);\n  font-size: 16px;\n}\n\n.timeline-label h4 {\n  margin-top: -15px;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif;\n  color: #545755;\n  font-weight: 500;\n}\n\n.timeline-label span {\n  color: #000;\n  font-weight: 600;\n}\n\n.timeline-label p {\n  font-size: 1.3em;\n  font-weight: 500;\n}\n\n.timeline-label ul {\n  font-size: 1.2em;\n  font-weight: 500;\n  font-family: \"Montserrat\", \"Helvetica Neue\", Arial, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL0M6XFxVc2Vyc1xcU2FuamVldiBNRFxcRG93bmxvYWRzXFxQb3J0Zm9saW8tbWFzdGVyXFxQb3J0Zm9saW8tbWFzdGVyL3NyY1xcYXBwXFxwcm9maWxlXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxtQkFBQTtFQ0NGO0FBQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQUY7O0FER0E7O0VBRUUsWUFBQTtFQUNBLGNBQUE7QUNBRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURHQTs7RUFFRSxZQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtBQ0FGOztBREdBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUlBLGtCQUFBO0VBQ0Esa0JBQUE7RUFHQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBSUUsc0JBQUE7QUNERjs7QURHQTtFQUlFLG1CQUFBO0FDSEY7O0FES0E7RUFJRSxtQkFBQTtBQ0xGOztBRE9BO0VBSUUsbUJBQUE7QUNQRjs7QURTQTtFQUlFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRFlBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQ1RGOztBRFlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlEQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZ0JBQUE7QUNURjs7QURZQTtFQUNFLGVBQUE7RUFDQSw4REFBQTtFQUNBLGdCQUFBO0FDVEY7O0FEWUE7RUFDRSxXQUFBO0FDVEY7O0FEWUE7RUFNRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDZEY7O0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSw4REFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2RGOztBRGdCQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ2JGOztBRGdCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiRjs7QURlQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4REFBQTtBQ1pGIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JsaWItZXhwZXJpZW5jZSB7XG4gIHBhZGRpbmctdG9wOiA0ZW07XG4gIHBhZGRpbmctYm90dG9tOiA5ZW07XG5cbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA4ZW07XG4gIH1cbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLFxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSxcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uIGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbi50aW1lbGluZS1jZW50ZXJlZFxuICAudGltZWxpbmUtZW50cnlcbiAgLnRpbWVsaW5lLWVudHJ5LWlubmVyXG4gIC50aW1lbGluZS1pY29uLmNvbG9yLTIge1xuICBiYWNrZ3JvdW5kOiBhcXVhbWFyaW5lO1xufVxuLnRpbWVsaW5lLWNlbnRlcmVkXG4gIC50aW1lbGluZS1lbnRyeVxuICAudGltZWxpbmUtZW50cnktaW5uZXJcbiAgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG4udGltZWxpbmUtY2VudGVyZWRcbiAgLnRpbWVsaW5lLWVudHJ5XG4gIC50aW1lbGluZS1lbnRyeS1pbm5lclxuICAudGltZWxpbmUtaWNvbi5jb2xvci00IHtcbiAgYmFja2dyb3VuZDogI2E4NGNiODtcbn1cbi50aW1lbGluZS1jZW50ZXJlZFxuICAudGltZWxpbmUtZW50cnlcbiAgLnRpbWVsaW5lLWVudHJ5LWlubmVyXG4gIC50aW1lbGluZS1pY29uLmNvbG9yLTUge1xuICBiYWNrZ3JvdW5kOiAjMmZhNDk5O1xufVxuLnRpbWVsaW5lLWNlbnRlcmVkXG4gIC50aW1lbGluZS1lbnRyeVxuICAudGltZWxpbmUtZW50cnktaW5uZXJcbiAgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWRcbiAgLnRpbWVsaW5lLWVudHJ5XG4gIC50aW1lbGluZS1lbnRyeS1pbm5lclxuICAudGltZWxpbmUtbGFiZWxcbiAgaDJcbiAgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogMC40O1xuICAtbW96LW9wYWNpdHk6IDAuNDtcbiAgb3BhY2l0eTogMC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZWxpbmUtbGFiZWwgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU0NTc1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50aW1lbGluZS1sYWJlbCBzcGFuIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50aW1lbGluZS1sYWJlbCBwIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi50aW1lbGluZS1sYWJlbCB1bCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cbiIsIi5jb2xvcmxpYi1leHBlcmllbmNlIHtcbiAgcGFkZGluZy10b3A6IDRlbTtcbiAgcGFkZGluZy1ib3R0b206IDllbTtcbiAgY2xlYXI6IGJvdGg7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmNvbG9ybGliLWV4cGVyaWVuY2Uge1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDhlbTtcbiAgfVxufVxuLnRpbWVsaW5lLWNlbnRlcmVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YmVmb3JlLFxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQ6YWZ0ZXIge1xuICBjbGVhcjogYm90aDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmJlZm9yZSxcbi50aW1lbGluZS1jZW50ZXJlZDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmM2Y3O1xuICB0b3A6IDIwcHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDI5cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGNsZWFyOiBib3RoO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCA1cHggI2YyZjNmNztcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4ICNmMmYzZjc7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24gaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci0yIHtcbiAgYmFja2dyb3VuZDogYXF1YW1hcmluZTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3ItMyB7XG4gIGJhY2tncm91bmQ6ICNmOWJmM2Y7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1pY29uLmNvbG9yLTQge1xuICBiYWNrZ3JvdW5kOiAjYTg0Y2I4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtaWNvbi5jb2xvci01IHtcbiAgYmFja2dyb3VuZDogIzJmYTQ5OTtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWljb24uY29sb3Itbm9uZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmMmYzZjc7XG4gIHBhZGRpbmc6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogNjBweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICAtbW96LWJhY2tncm91bmQtY2xpcDogcGFkZGluZztcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cblxuLnRpbWVsaW5lLWNlbnRlcmVkIC50aW1lbGluZS1lbnRyeSAudGltZWxpbmUtZW50cnktaW5uZXIgLnRpbWVsaW5lLWxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiA5cHggOXB4IDlweCAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmMmYzZjcgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBwICsgcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50aW1lbGluZS1jZW50ZXJlZCAudGltZWxpbmUtZW50cnkgLnRpbWVsaW5lLWVudHJ5LWlubmVyIC50aW1lbGluZS1sYWJlbCBoMiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgYSB7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4udGltZWxpbmUtY2VudGVyZWQgLnRpbWVsaW5lLWVudHJ5IC50aW1lbGluZS1lbnRyeS1pbm5lciAudGltZWxpbmUtbGFiZWwgaDIgc3BhbiB7XG4gIC13ZWJraXQtb3BhY2l0eTogMC40O1xuICAtbW96LW9wYWNpdHk6IDAuNDtcbiAgb3BhY2l0eTogMC40O1xuICAtbXMtZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGltZWxpbmUtbGFiZWwgaDQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzU0NTc1NTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRpbWVsaW5lLWxhYmVsIHAge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGltZWxpbmUtbGFiZWwgdWwge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/profile/experience/experience.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/profile/experience/experience.component.ts ***!
    \************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppProfileExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExperienceComponent = /*#__PURE__*/function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/experience/experience.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/profile/experience/experience.component.scss"))["default"]]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/footer/footer.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppProfileFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/profile/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/header/header.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/header/header.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/header/header.component.ts ***!
    \****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppProfileHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/profile/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/profile/intro/intro.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileIntroIntroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/profile/intro/intro.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/profile/intro/intro.component.ts ***!
    \**************************************************/

  /*! exports provided: IntroComponent */

  /***/
  function srcAppProfileIntroIntroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IntroComponent", function () {
      return IntroComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IntroComponent = /*#__PURE__*/function () {
      function IntroComponent() {
        _classCallCheck(this, IntroComponent);
      }

      _createClass(IntroComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IntroComponent;
    }();

    IntroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-intro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./intro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/intro/intro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./intro.component.scss */
      "./src/app/profile/intro/intro.component.scss"))["default"]]
    })], IntroComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.scss":
  /*!************************************************!*\
    !*** ./src/app/profile/profile.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(spinner) {
        _classCallCheck(this, ProfileComponent);

        this.spinner = spinner;
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.spinner.show();
          setTimeout(function () {
            _this.spinner.hide();
          }, 2000);
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/profile/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/profile/footer/footer.component.ts");
    /* harmony import */


    var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./intro/intro.component */
    "./src/app/profile/intro/intro.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/profile/about/about.component.ts");
    /* harmony import */


    var _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./skills/skills.component */
    "./src/app/profile/skills/skills.component.ts");
    /* harmony import */


    var _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./experience/experience.component */
    "./src/app/profile/experience/experience.component.ts");
    /* harmony import */


    var _education_education_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./education/education.component */
    "./src/app/profile/education/education.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/profile/contact/contact.component.ts");
    /* harmony import */


    var _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../node_modules/ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/profile/projects/projects.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyModule"], _node_modules_ngx_spinner__WEBPACK_IMPORTED_MODULE_14__["NgxSpinnerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"]],
      declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], _experience_experience_component__WEBPACK_IMPORTED_MODULE_11__["ExperienceComponent"], _education_education_component__WEBPACK_IMPORTED_MODULE_12__["EducationComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"]],
      providers: [{
        provide: "SnotifyToastConfig",
        useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_4__["ToastDefaults"]
      }, ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]]
    })], ProfileModule);
    /***/
  },

  /***/
  "./src/app/profile/profile.service.ts":
  /*!********************************************!*\
    !*** ./src/app/profile/profile.service.ts ***!
    \********************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppProfileProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProfileService = /*#__PURE__*/function () {
      //baseUrl = environment.baseUrl;
      function ProfileService(http) {
        _classCallCheck(this, ProfileService);

        this.http = http;
        this.skillsData = [{
          'id': '1',
          'skill': 'ANGULAR 6',
          'progress': '85%'
        }, {
          'id': '2',
          'skill': 'PHP\/CODEIGNITER',
          'progress': '80%'
        }, {
          'id': '3',
          'skill': 'C++',
          'progress': '80%'
        }, {
          'id': '4',
          'skill': 'PYTHON',
          'progress': '75%'
        }, {
          'id': '5',
          'skill': 'ADOBE ILLUSTRATOR',
          'progress': '75%'
        }, {
          'id': '6',
          'skill': 'DATA STRUCTURE',
          'progress': '70%'
        }];
        this.educationData = [{
          'id': '1',
          'from_to_year': '2016 - 2020',
          'education': 'Bachelor\'s Degree',
          'stream': 'Bachelor of Engineering',
          'institution': 'MADHAV INSTITUTE OF TECHNOLOGY AND SCIENCE, GWALIOR'
        }, {
          'id': '2',
          'from_to_year': '2014 - 2015',
          'education': 'Higher Secondary',
          'stream': 'Science and Mathematics',
          'institution': 'GOVT. BOYS H.S. SCHOOL, DHAMNOD, DHAR'
        }, {
          'id': '3',
          'from_to_year': '2012 - 2013',
          'education': 'High School',
          'stream': 'Science and Mathematics',
          'institution': 'SARSWATI SHISHU VIDHYA MANDIR, DHAMNOD, DHAR'
        }];
        this.exprienceData = [{
          'id': '1',
          'from_to_month_year': 'JUNE 2018 - AUGUST 2018',
          'organization': 'WITTYFEED',
          'designation': 'Full Stack Developer',
          'details': "Created fully functional projects for <strong>WittyFeed</strong>,\n      A publisher Dashboard was created using <strong>Angular 6, CodeIgniter 3 , Rest API and JWT (Json Web Token).\n      </strong> It involves multiple modules like Analytics, Stories, RSS Links, Payments.\n      Another project was Influencer admin Dashboard which has features like app approval,\n      app rejection in OneFeed(WittyFeed\u2019s personalised feed SDK) integrations.\n      Lastly the admin dashboard for managing publishers for OneFeed."
        }, {
          'id': '2',
          'from_to_month_year': 'OCTOBER 2017 - NOVEMBER 2017',
          'organization': 'MITS, GWALIOR',
          'designation': 'Web Developer',
          'details': 'Designed the Official Website of the <strong>INDUSTRY CONCLAVE<\/strong>.'
        }, {
          'id': '3',
          'from_to_month_year': 'AUGUST 2017 - SEPTEMBER 2017',
          'organization': 'QUERENCIA CLUB (MITS)',
          'designation': 'Web Developer',
          'details': 'Developed the Official Website of the <strong>MITSVAH Literary Fest<\/strong>\r\nUnder <strong>Querencia CLUB<\/strong>.'
        }];
      } // contactus(data: any): Observable<any> {
      //   return this.http.post(this.baseUrl + 'contact', data);
      // }


      _createClass(ProfileService, [{
        key: "skills",
        value: function skills() {
          // return this.http.get(this.baseUrl + 'skills');
          return this.skillsData;
        }
      }, {
        key: "education",
        value: function education() {
          // return this.http.get(this.baseUrl + 'education');
          return this.educationData;
        }
      }, {
        key: "exprience",
        value: function exprience() {
          // return this.http.get(this.baseUrl + 'exprience');
          return this.exprienceData;
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileService);
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".blog-entry {\n  width: 100%;\n  float: left;\n  background: #fff;\n  margin-bottom: 3em;\n}\n\n@media screen and (max-width: 768px) {\n  .blog-entry {\n    margin-bottom: 3em;\n  }\n}\n\n.blog-entry .blog-img {\n  width: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  margin-bottom: 25px;\n}\n\n.blog-entry .blog-img img {\n  position: absolute;\n  max-width: 100%;\n  max-height: 60%;\n  transform: scale(1);\n  transition: 0.3s;\n}\n\n.blog-entry .desc h3 {\n  font-size: 16px;\n  margin-bottom: 25px;\n  line-height: auto;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-family: \"Quicksand\", Arial, sans-serif;\n}\n\n.blog-entry .desc h3 a {\n  color: #000;\n  text-decoration: none;\n}\n\n.blog-entry .desc span {\n  display: block;\n  margin-bottom: 20px;\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.4) !important;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n}\n\n.blog-entry .desc span small i {\n  color: #999999;\n}\n\n.blog-entry .desc .lead {\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #000;\n}\n\n.blog-entry:hover .blog-img img {\n  transform: scale(1.1);\n}\n\n.blog-entry h4 {\n  font-weight: 560;\n  margin-top: 8px;\n  font-size: 20px;\n}\n\n.blog-entry h5 {\n  line-height: normal;\n  font-weight: 500;\n  font-size: 1.3em;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9qZWN0cy9DOlxcVXNlcnNcXFNhbmplZXYgTURcXERvd25sb2Fkc1xcUG9ydGZvbGlvLW1hc3RlclxcUG9ydGZvbGlvLW1hc3Rlci9zcmNcXGFwcFxccHJvZmlsZVxccHJvamVjdHNcXHByb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRTtJQUNFLGtCQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUtBLG1CQUFBO0VBR0EsZ0JBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUNJRjs7QURGQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtBQ0tGOztBREhBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTUY7O0FESkE7RUFDRSxjQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNRRjs7QUROQTtFQUtFLHFCQUFBO0FDU0Y7O0FETkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDU0Y7O0FETkE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDU0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsb2ctZW50cnkge1xuICB3aWR0aDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLWVudHJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cbn1cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLmJsb2ctZW50cnkgLmJsb2ctaW1nIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiA2MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICAtby10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuLmJsb2ctZW50cnkgLmRlc2MgaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIGxpbmUtaGVpZ2h0OiBhdXRvO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG59XG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5ibG9nLWVudHJ5IC5kZXNjIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uYmxvZy1lbnRyeSAuZGVzYyBzcGFuIHNtYWxsIGkge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cbi5ibG9nLWVudHJ5OmhvdmVyIC5ibG9nLWltZyBpbWcge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uYmxvZy1lbnRyeSBoNCB7XG4gIGZvbnQtd2VpZ2h0OiA1NjA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uYmxvZy1lbnRyeSBoNSB7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiBibGFjaztcbn1cbiIsIi5ibG9nLWVudHJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5ibG9nLWVudHJ5IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIH1cbn1cbi5ibG9nLWVudHJ5IC5ibG9nLWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4uYmxvZy1lbnRyeSAuYmxvZy1pbWcgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDYwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IDAuM3M7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBsaW5lLWhlaWdodDogYXV0bztcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuXG4uYmxvZy1lbnRyeSAuZGVzYyBoMyBhIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmJsb2ctZW50cnkgLmRlc2Mgc3BhbiBzbWFsbCBpIHtcbiAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5ibG9nLWVudHJ5IC5kZXNjIC5sZWFkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLmJsb2ctZW50cnk6aG92ZXIgLmJsb2ctaW1nIGltZyB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5ibG9nLWVudHJ5IGg0IHtcbiAgZm9udC13ZWlnaHQ6IDU2MDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ibG9nLWVudHJ5IGg1IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/projects/projects.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/profile/projects/projects.component.ts ***!
    \********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProfileProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProjectsComponent = /*#__PURE__*/function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/profile/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/profile/skills/skills.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".skillsbg {\n  margin-top: 12%;\n  background-color: white;\n  width: 100%;\n  height: 700px;\n}\n\n.skillcard {\n  margin-top: 2%;\n  min-width: 100%;\n  min-height: 425px;\n  background-color: white;\n  background: white;\n  box-shadow: 0 1px 3px rgba(180, 140, 140, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n}\n\n.skillcard:hover {\n  box-shadow: 28px 28px 28px rgba(0, 0, 0, 0.22), 20px 20px 20px rgba(0, 0, 0, 0.22);\n  transition: all 0.3s cubic-bezier(1, 1, 1, 1);\n}\n\n.skillTitle {\n  padding-top: 2%;\n  text-align: center;\n  letter-spacing: 0.05em;\n  font-family: Verdana;\n  font-size: 25px;\n}\n\n.skillsTable {\n  margin-top: 3%;\n}\n\n.mat-button {\n  border-radius: 20px;\n  border-color: white;\n  border: 2px solid rgba(255, 255, 255, 0.486);\n}\n\n.mat-button:hover {\n  color: rgba(255, 255, 255, 0.486);\n  cursor: pointer;\n}\n\nth,\ntd {\n  padding: 10px;\n  border: none;\n}\n\nth {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9za2lsbHMvQzpcXFVzZXJzXFxTYW5qZWV2IE1EXFxEb3dubG9hZHNcXFBvcnRmb2xpby1tYXN0ZXJcXFBvcnRmb2xpby1tYXN0ZXIvc3JjXFxhcHBcXHByb2ZpbGVcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9maWxlL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFFQSw4RUFBQTtBQ0RGOztBREdFO0VBQ0Usa0ZBQUE7RUFFQSw2Q0FBQTtBQ0ZKOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNIRjs7QURNQTtFQUVFLGNBQUE7QUNKRjs7QURPQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw0Q0FBQTtBQ0pGOztBREtFO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7O0VBRUUsYUFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzYmcge1xuICBtYXJnaW4tdG9wOiAxMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cblxuLnNraWxsY2FyZCB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICAvLyBtYXJnaW4tbGVmdDogMS4zJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICAvL2JvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMTgwLCAxNDAsIDE0MCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDI4cHggMjhweCAyOHB4IHJnYmEoMC4yMiwgMC4yMiwgMC4yMiwgMC4yMiksXG4gICAgICAyMHB4IDIwcHggMjBweCByZ2JhKDAuMjIsIDAuMjIsIDAuMjIsIDAuMjIpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigxLCAxLCAxLCAxKTtcbiAgfVxufVxuXG4uc2tpbGxUaXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2tpbGxzVGFibGUge1xuICAvLyBtYXJnaW4tbGVmdDogMTUlO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLm1hdC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbiAgJjpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxudGgsXG50ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxudGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuIiwiLnNraWxsc2JnIHtcbiAgbWFyZ2luLXRvcDogMTIlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbi5za2lsbGNhcmQge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiA0MjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgxODAsIDE0MCwgMTQwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uc2tpbGxjYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMjhweCAyOHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjIyKSwgMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKDEsIDEsIDEsIDEpO1xufVxuXG4uc2tpbGxUaXRsZSB7XG4gIHBhZGRpbmctdG9wOiAyJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uc2tpbGxzVGFibGUge1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cblxuLm1hdC1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDg2KTtcbn1cbi5tYXQtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40ODYpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnRoLFxudGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbnRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profile/skills/skills.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/profile/skills/skills.component.ts ***!
    \****************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppProfileSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SkillsComponent = /*#__PURE__*/function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/skills/skills.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/profile/skills/skills.component.scss"))["default"]]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/assets/js/smtp.js":
  /*!*******************************!*\
    !*** ./src/assets/js/smtp.js ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function srcAssetsJsSmtpJs(module, exports) {
    /* SmtpJS.com - v3.0.0 */
    var Email = {
      send: function send(a) {
        return new Promise(function (n, e) {
          a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function ajaxPost(e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }, a.send(n);
      },
      ajax: function ajax(e, n) {
        var t = Email.createCORSRequest("GET", e);
        t.onload = function () {
          var e = t.responseText;
          null != n && n(e);
        }, t.send();
      },
      createCORSRequest: function createCORSRequest(e, n) {
        var t = new XMLHttpRequest();
        return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest()).open(e, n) : t = null, t;
      }
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var ng_snotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng-snotify */
    "./node_modules/ng-snotify/index.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      //baseUrl : `${window.location.protocol}//${window.location.hostname}/portfolio/`,
      //baseUrl : `http://localhost:4200/`,
      snotifyConfig: {
        showProgressBar: true,
        position: ng_snotify__WEBPACK_IMPORTED_MODULE_1__["SnotifyPosition"].rightTop
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Sanjeev MD\Downloads\Portfolio-master\Portfolio-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map