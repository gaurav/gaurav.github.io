(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/H/W":function(e){e.exports=JSON.parse('{"@context":{"schema":"http://schema.org/","subjectOf":"schema:subjectOf","hasRole":"example:hasRole","name":"schema:name","location":"schema:location"},"@type":"schema:Person","@id":"https://www.ggvaidya.com/","projects":[{"@type":"schema:Project","role":"#Semantics-web-technologist-the-Renaissance-Computing-Institute-(RENCI)-at-Chapel-Hill-North-Carolina-USA","startDate":"2019-10-21","endDate":"2020-12-20","name":"Center for Cancer Data Harmonization (CCDH)","description":"I work on the CCDH Tools and Data Quality team at RENCI. We aim to develop software tools that will allow the validation of biomedical data against the CRDC-H data model to store cancer-related biomedical data, to publish and transform the data model into different formats as needed, and to fulfil any other software development tasks that are needed to complete this project.","products":[{"@id":"https://github.com/cancerDHC/csv2caDSR","@type":"schema:SoftwareSourceCode","startDate":"2020-07-28","endDate":"2020-12-04","name":"csv2caDSR","description":"A tool for harmonizing biomedical data using the Cancer Data Standards Registry and Repository (caDSR) as a source of validation information.","codeRepository":"https://github.com/cancerDHC/csv2caDSR","technologies":["Scala","caDSR","PFB","CEDAR Workbench"],"features":["Harmonize input data against the caDSR.","Store harmonization information (such as mappings from values in data files to concepts in vocabularies) in a JSON format that can be converted into other mapping formats if needed.","Export harmonized data in a variety of formats, such as the Portable Format for Biomedical Data (PFB) and the CEDAR Instance format."]},{"@id":"https://github.com/cancerDHC/umls-rrf-scala","@type":"schema:SoftwareSourceCode","startDate":"2020-03-30","endDate":"2020-11-04","name":"UMLS-RRF-Scala","description":"A set of tools for identifying mappings from terms in one vocabulary to others, intending to be used to provide mappings from closed-source vocabularies to open-access vocabularies.","codeRepository":"https://github.com/cancerDHC/umls-rrf-scala","technologies":["Scala","UMLS","SSSOM"],"features":["Extract individual mappings from the Unified Medical Language System (UMLS) Metathesaurus as SSSOM files.","Use web services (such as BioPortal and the EMBL-EBI Ontology Lookup Service) to find additional mappings between vocabularies."]}]},{"@type":"schema:Project","role":"#Semantics-web-technologist-the-Renaissance-Computing-Institute-(RENCI)-at-Chapel-Hill-North-Carolina-USA","startDate":"2019-10-21","endDate":"2020-12-20","name":"Small projects at RENCI","description":"While working as a Semantic Web technologist at RENCI, I developed a number of ad-hoc software tools to meet various needs from other RENCI teams.","products":[{"@id":"http://shacli.org/","@type":"schema:SoftwareSourceCode","startDate":"2019-10-30","endDate":"2020-05-26","name":"SHACLI","description":"A command-line interface (CLI) for the Shapes Constraint Language (SHACL) to validate RDF data against SHACL shapes with improved error messages. This was part of a project to simplify data model creation, so that one document can be used to produce both the documentation and can be used to validate input data.","codeRepository":"https://github.com/gaurav/shacli","technologies":["Scala","Apache Maven","Coursier","SHACL","RDF","web APIs"],"features":["Validate RDF data against SHACL shapes.","Improved error messages as compared to other SHACL validators.","Published to the Maven repository, so that it is easy to install via Coursier or other Maven tools."]},{"@id":"https://github.com/NCATS-Gamma/omnicorp","@type":"schema:SoftwareSourceCode","startDate":"2019-10-23","endDate":"2020-11-08","name":"Omnicorp and OmniCORD","description":"I built upon the existing Omnicorp tool to improve the RDF data being produced by it, such as authorship information. I also wrote OmniCORD, a variant of Omnicorp for extracting entities from the COVID-19 Open Research Dataset (CORD-19).","codeRepository":"https://github.com/NCATS-Gamma/omnicorp","technologies":["Scala","RDF","SHACL"],"features":["Extract terminologies from the MEDLINE/PubMed Baseline Repository and export them as RDF.","Extract terminologies from the COVID-19 Open Research Dataset (CORD-19) and export them as RDF.","Validate produced RDF information against SHACL shapes using SHACLI."]},{"@id":"https://doi.org/10.1093/bioinformatics/btaa718"}]},{"@type":"schema:Project","role":"#Postdoctoral-associate-the-Florida-Museum-of-Natural-History-at-Gainesville-Florida-USA","startDate":"2018-01-02","endDate":"2019-10-11","name":"The Phyloreferencing Project","description":"The Phyloreferencing project aims to digitize definitions of clades (groups of related taxa that are a key concept in evolutionary biology) as semantically rich OWL ontologies, which are both human-readable and computer-interpretable.","products":[{"@id":"https://github.com/phyloref/phyx.js","@type":"schema:SoftwareSourceCode","startDate":"2019-01-18","name":"Phyx.js","description":"A software library for reading and validating Phyx files for storing clade definitions, which can convert them into OWL ontologies for publication and reasoning.","codeRepository":"https://github.com/phyloref/phyx.js","technologies":["JavaScript","NPM","Web Ontology Language","JSON","JSON-LD"],"features":["Read and validate Phyx files.","Convert Phyx files into OWL ontologies for publication and reasoning.","Includes a test of phyloreferences on every possible topology up to 6 leaf nodes."]},{"@id":"https://github.com/phyloref/jphyloref","@type":"schema:SoftwareSourceCode","startDate":"2017-09-25","endDate":"2020-05-18","name":"JPhyloRef","description":"A Java-based command line tool for reasoning over and testing ontologies that include phyloreferences.","codeRepository":"https://github.com/phyloref/jphyloref","technologies":["Java","Web Ontology Language","JSON-LD","Software testing","web APIs"],"features":["Reason over ontologies containing phyloreferences and phylogenies to report on which nodes each phyloreference resolves to.","Test whether ontologies containing phyloreferences and reference phylogenies resolve as expected.","Run as a web server to serve a web API as a backend for Klados and other services."]},{"@id":"https://github.com/phyloref/klados","name":"Klados","@type":"schema:SoftwareSourceCode","startDate":"2020-08-02","endDate":"2017-10-12","technologies":["JavaScript","Vue.js","JSON","web APIs"],"description":"A single-page application for curating, testing and resolving phyloreferences.","features":["Provides a graphical user interface for reading and writing Phyx files describing phyloreferences.","Allows users to add and visualize phylogenies, and test resolution of phyloreferences on those phylogenies.","Export Phyx files as OWL ontologies."]},{"@id":"https://github.com/phyloref/open-tree-resolver","name":"Open Tree Resolver","@type":"schema:SoftwareSourceCode","startDate":"2020-09-07","endDate":"2019-02-22","technologies":["JavaScript","Vue.js","web APIs"],"description":"A single-page application for testing phyloreference resolution on the Open Tree of Life.","features":["Upload OWL ontologies representing phyloreferences as JSON-LD files.","Reason over the phyloreferences to resolve them on the relevant section of the Synthetic Tree as downloaded via Open Tree of Life APIs."]},{"@id":"https://github.com/phyloref/phyloref-ontology","name":"Phyloref Ontology","@type":"schema:SoftwareSourceCode","startDate":"2013-06-12","endDate":"2020-11-19","technologies":["Web Ontology Language","ontologies"],"description":"An ontology containing terms used to concisely and precisely define phyloreferences.","features":["My contribution here was mainly to suggest some additional terms."]},{"@id":"https://github.com/phyloref/clade-ontology","name":"Clade Ontology","@type":"schema:SoftwareSourceCode","startDate":"2017-06-20","endDate":"2020-05-22","technologies":["JavaScript","Web Ontology Language","ontologies"],"description":"An ontology containing phyloreferences translated from published clade definitions.","features":["A Node.js-based workflow for converting folders of Phyx files into a single large OWL ontology.","Includes tools for testing resolution of all included Phyx files."]}]},{"@type":"schema:Project","role":"#Graduate-teaching-assistant-Ecology-and-Evolutionary-Biology-(EBIO)-at-Boulder-Colorado-USA","startDate":"2015-01","endDate":"2015-05","name":"Evolutionary Biology (EBIO 3080)","description":"I led three lab sections of twenty students each, teaching evolutionary biology through R-based statistics and modeling labs, measurements and phylogenetics."},{"@type":"schema:Project","role":"#Graduate-teaching-assistant-Ecology-and-Evolutionary-Biology-(EBIO)-at-Boulder-Colorado-USA","startDate":"2015-08","endDate":"2015-12","name":"General Biology Labs 1 (EBIO 1230)","description":"I led three lab sections of eighteen students each, teaching the philosophical underpinings of science through hands-on experiments in cellular and molecular biology."},{"@type":"schema:Project","role":"#Graduate-teaching-assistant-Ecology-and-Evolutionary-Biology-(EBIO)-at-Boulder-Colorado-USA","startDate":"2016-01","endDate":"2016-05","name":"General Biology Labs 2 (EBIO 1240)","description":"I led three lab sections of eighteen students each, taking my students on a tour of the tree of life while reinforcing concepts in evolutionary biology, ecology, anatomy and physiology."},{"@type":"schema:Project","role":"#PhD-in-Ecology-and-Evolutionary-Biology-Ecology-and-Evolutionary-Biology-(EBIO)-at-Boulder-Colorado-USA","startDate":"2011-08-22","endDate":"2020-12-20","name":"PhD dissertation","description":"In my PhD dissertation, I developed methods for quantifying the rate of change with taxonomic checklists, and the effect such changes can have on the interpretation of biodiversity data.","products":[{"@id":"https://github.com/gaurav/scinames","@type":"schema:SoftwareSourceCode","startDate":"2019-05-26","endDate":"2017-04-30","name":"SciNames","description":"A graphical user interface (GUI) for processing changes among taxonomic checklists. SciNames imports multiple taxonomic checklists into a single XML file, and then generates lists of changes between those checklists. Users can then use the GUI to annotate these changes, recording why each change had occurred and what sort of change it was. SciNames can then calculate some statistics on the changes.","codeRepository":"https://github.com/gaurav/scinames","technologies":["Java","Java Swing","XML"],"features":["Convert taxonomic checklists into XML representations that store both multiple taxonomic checklists as well as annotated changes between them.","Provides a graphical user interface (GUI) showing changes between checklists and allowing those changes to be modified or annotated.","Calculates measures of stability among a series of checklists over time and exports data in formats amenable for rendering as graphs."]},{"@id":"https://doi.org/10.31237/osf.io/n2kh5"},{"@id":"https://doi.org/10.1371/journal.pone.0195736"},{"@id":"https://doi.org/10.3897/zookeys.420.7089"}]},{"@type":"schema:Project","role":"#Graduate-research-assistant-the-University-of-Colorado-Museum-of-Natural-History-at-Boulder-Colorado-USA","startDate":"2011","endDate":"2015","name":"Map of Life","description":"An NSF-funded project to synthesize different kinds of biodiversity data — from occurrences to rangemaps — into a single, easy-to-use tool. I worked on the Map of Life project, usually during summer holidays, under the supervision of my PhD advisor, Rob Guralnick.","products":[{"@id":"https://github.com/MapofLife/vernacular-names","@type":"schema:SoftwareSourceCode","startDate":"2014-02-28","endDate":"2015-07-24","name":"Vernacular Names","description":"A web application for managing the synthesis and verification of vernacular name information for Map of Life.","codeRepository":"https://github.com/MapofLife/vernacular-names","technologies":["Python","PostgreSQL"],"features":["Lists all vernacular names across multiple languages for each taxonomic name.","Includes scripts for importing particular vernacular name databases into this system.","Allow curators to improve vernacular names.","Produce reports on vernacular name coverage across important languages.","Use regular expressions to make multiple simulatenous changes."]},{"@id":"https://github.com/gaurav/taxrefine","@type":"schema:SoftwareSourceCode","startDate":"2013-06-17","endDate":"2014-05-28","name":"TaxRefine","description":"Provides an OpenRefine reconcilation service API for matching taxonomic names against several services.","codeRepository":"https://github.com/gaurav/taxrefine","technologies":["Perl","OpenRefine","web APIs"],"features":["Queries multiple taxonomic name resolution services to provide several possible resolutions to a user."]},{"@id":"https://blog.vertnet.org/post/56169017224/taxonomic-validation-vaidya","startDate":"2013-07-22","endDate":"2013-07-22","name":"Validating scientific names with the GBIF Checklist Bank","description":"A blog post describing TaxRefine."}]},{"@type":"schema:Project","role":"#Student-developer-DBpedia-at-Boulder-Colorado-USA","startDate":"2014-05-19","endDate":"2014-08-22","name":"DBpedia Commons at Google Summer of Code","description":"For a Google Summer of Code project in summer 2014, I worked on extending the DBpedia Extraction Framework to be able to extract information from the Wikimedia Commons database dumps and make them available as RDF.","products":[{"@id":"https://github.com/dbpedia/extraction-framework","@type":"schema:SoftwareSourceCode","startDate":"2014-05-31","endDate":"2014-08-18","name":"DBpedia Extraction Framework","description":"I made some improvements to the DBpedia Extraction Framework to allow them to extract information from the Wikimedia Commons.","codeRepository":"https://github.com/dbpedia/extraction-framework/commits?author=gaurav","technologies":["Scala","RDF"],"features":["Added support for extracting metadata regarding media files in the Wikimedia Commons, including links to the raw files themselves.","Added support for identifying templates that indicated open access licenses so that these could be included in the RDF generated.","Added support for extracting annotations for parts of an image and exporting those in RDF."]},{"@id":"https://doi.org/10.1007/978-3-319-25010-6_17"},{"@id":"https://www.google-melange.com/archive/gsoc/2014/orgs/dbpediaspotlight/projects/gaurav.html","name":"Project description on Google Summer of Code\'s website"},{"@id":"https://commons.wikimedia.org/wiki/User:Gaurav/DBpedia","name":"Project report on the Wikimedia Commons"}]},{"@id":"https://about.biodiversitylibrary.org/projects/past-projects/art-of-life/","@type":"schema:Project","role":"#Graduate-research-assistant-the-University-of-Colorado-Museum-of-Natural-History-at-Boulder-Colorado-USA","startDate":"2012-05","endDate":"2015-04","name":"Art of Life","description":"A project organized by the Biodiversity Heritage Library (BHL) to identical and annotate hundreds of thousands of illustrations from the documents in this digital library.","products":[{"@id":"https://docs.google.com/document/d/1jjHMjWWnsErTLtms5MVuBg2wE6wtOuGmA0-UVSk5_Ts/edit","startDate":"2015-04-30","endDate":"2015-04-30","name":"Art of Life Schema","description":"I worked with my PhD advisor and some librarians at the BHL to develop a data schema for annotating biological illustrations in a way that would make them useful for biodiversity researchers."}]},{"@type":"schema:Project","role":"#Software-architect-Paper-Terminal-Pte-Ltd-at-Singapore","startDate":"2008","endDate":"2011","name":"OCR Terminal","description":"A start-up that focussed on providing services around optical character recognition (OCR) technology.","products":[{"@id":"http://www.ocrterminal.com/","@type":"schema:SoftwareSourceCode","startDate":"2008","endDate":"2011","name":"OCR Terminal","description":"OCR Terminal was an online optical character recognition (OCR) service: it read text from uploaded images and provided the image files in an editable format such as Microsoft Word, Adobe PDF or plain text. Between mid-2008 and 2011, tens of thousands of user accounts have been created and over 100,000 documents had been processed on this website. Apart from the website itself, the service featured a simple API which can be used to submit documents for processing programmatically.\\nI was lead developer of OCR Terminal right from project inception. I have written all of OCR Terminal\'s underlying code, first as a Perl/CGI application, and later as a Perl/Catalyst application. I am particularly proud of designing the public API, which is used by our own desktop client, several in-house tools, and several clients of ours who use it for both bulk processing and as a backend for their own software.\\nI also manage OCR Terminal\'s main server administrator, responsible for maintaining all the servers and backend components. I was able to learn about server monitoring with tools such as Munin. Since early 2009, OCR Terminal has been hosted on the Amazon EC2 processing cloud, giving me experience with setting up, bundling and managing EC2 instances.</p>","technologies":["Perl","Amazon Web Services","web APIs"],"features":["A web application allowing users to register an account, OCR a small number of documents for free, and then pay to OCR additional images.","Included a job management system, allowing jobs uploaded to OCR Terminal to be processed by the ABBYY OCR Engine we used for OCR.","Included a web API, allowing customers to batch submit multiple jobs by processing."]}]},{"@type":"schema:Project","role":"#Bachelor-of-Science-(with-Merit)-in-Life-Sciences-with-minors-in-Computational-Science-and-Economics-Department-of-Biological-Sciences-at-Singapore","startDate":"2003","endDate":"2006","name":"Species Identifier","description":"This project came about in response to a need for a series of projects by the Evolutionary Biology lab to investigate whether genetic distance methods could be used to correctly identify the species that a genetic sequence had been sequenced from. The tool we built allowed us to compare several different approaches to investigate this approach, and then to replicate these analyses on larger datasets than we had originally envisioned.","products":[{"@id":"http://taxondna.sf.net/","@type":"schema:SoftwareSourceCode","startDate":"2006-08-20","endDate":"2015-06-22","name":"Species Identifier","description":"Species Identifier provides a set of tools for exploring intra- and interspecific genetic distances, matching sequences, and clustering sequences based on pairwise distances. It helps determine whether two sequences are likely conspecific based on pairwise distances, and can calculate pairwise distances for large datasets. It was designed to provide the analyses presented in Meier et al, 2006 (Best match, Best close match and All Species Barcodes).","codeRepository":"http://github.com/gaurav/taxondna","license":"https://www.wikidata.org/wiki/Q27016752","technologies":["Java","Apache Ant"],"features":["Replicate the techniques used in Meier et al. 2006 on your own datasets."]},{"@id":"https://doi.org/10.1080/10635150600969864"}]},{"@type":"schema:Project","role":"#Lab-officer-the-Evolutionary-Biology-Laboratory-at-Singapore","startDate":"2009-04","endDate":"2010-11-13","name":"SequenceMatrix","description":"Genetic analysis softwares at this time were designed to compare a single genetic or protein sequence between different taxa to perform comparative analyses. In the Evolutionary Biology lab, we would often perform multi-gene analyses, requiring aligned genetic sequences to be concatenated together. Modifying such datasets after concatenation could be problematic, especially if one of the constituent sequences turned out to be contamination. Sequence Matrix was intended to simplify the process of contatenation such that preserved gene boundaries could be unconcatenated if necessary, and included some tools for detecting and removing contamination from multi-gene, multi-taxon datasets.","products":[{"@id":"http://gaurav.github.io/taxondna/","@type":"schema:SoftwareSourceCode","startDate":"2009-04-10","endDate":"2015-06-22","name":"SequenceMatrix","description":"Sequence Matrix facilitates the assembly of phylogenetic data matrices with multiple genes. Files for individual genes are dragged and dropped into a window and the sequences are concatenated. A table provides an overview over how much sequence information is available for the different genes and species. The user can request Sequence Matrix generate a wide variety of character and taxon sets (e.g. a taxon set with all species that have more than a specified number of genes or basepairs). The concatenated sequences can be exported in NEXUS or TNT format. Individual sequences can be excluded from being exported.","codeRepository":"http://github.com/gaurav/taxondna","license":"https://www.wikidata.org/wiki/Q27016752","technologies":["Java","Apache Ant","Java Swing"],"features":["Concatenating sequences from multiple genes for multiple taxa.","Records sequence start and end points so that they can be un-concatenated later if needed.","Includes tools for identifying unusual sequences and suppress them on export."]},{"@id":"https://doi.org/10.1111/j.1096-0031.2010.00329.x"}]}]}')},"/b8u":function(e,t,a){var o=a("STAE");e.exports=o&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"6VoE":function(e,t,a){var o=a("tiKp"),n=a("P4y1"),i=o("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||r[i]===e)}},"7JVC":function(e){e.exports=JSON.parse('{"@context":{"schema":"http://schema.org/","example":"http://example.org/","subjectOf":"schema:subjectOf","hasRole":"example:hasRole","name":"schema:name","location":"schema:location","authored":"example:authored","authors":{"@id":"example:author","@container":"@list"}},"@type":"schema:Person","@id":"https://www.ggvaidya.com/","cites":[]}')},"7ySY":function(e){e.exports=JSON.parse('{"Scala":{"id":"Scala","@id":"https://www.scala-lang.org/","name":"Scala programming language","description":"A functional and object-oriented programming language built upon the Java Virtual Machine (JVM).","urls":["https://en.wikipedia.org/wiki/Scala_(programming_language)"]},"Java":{"id":"Java","@id":"https://java.com/","name":"Java programming language","description":"An object-oriented programming language.","urls":["https://en.wikipedia.org/wiki/Java_(programming_language)"]},"Python":{"id":"Python","@id":"https://python.org/","name":"Python programming language","description":"A general-purpose object-oriented programming language.","urls":["https://en.wikipedia.org/wiki/Python_(programming_language)"]},"Perl":{"id":"Perl","@id":"https://www.perl.org/","name":"Perl programming language","description":"A multi-paradigm programming language.","urls":["https://en.wikipedia.org/wiki/Perl"]},"Java virtual machine":{"id":"Java virtual machine","@id":"https://en.wikipedia.org/wiki/Java_virtual_machine","name":"Java virtual machine","description":"A virtual machine for running Java programs. Many other languages, such as Scala, compile programs into Java bytecode so that they can run on the Java virtual machine.","seeAlso":["Java","Scala"]},"Apache Maven":{"id":"Apache Maven","@id":"https://maven.apache.org/","name":"Apache Maven","description":"A software packaging system for Java and Scala packages.","urls":["https://en.wikipedia.org/wiki/Apache_Maven"]},"Coursier":{"id":"Coursier","@id":"https://get-coursier.io/","name":"Coursier","description":"A tool for running Java virtual machine programs directly from Apache Maven repositories.","seeAlso":["Apache Maven","Java virtual machine"]},"Apache Ant":{"id":"Apache Ant","@id":"https://ant.apache.org/","name":"Apache Ant","description":"A build tool for Java.","urls":["https://en.wikipedia.org/wiki/Apache_Ant"],"seeAlso":["Java"]},"Java Swing":{"id":"Java Swing","@id":"https://en.wikipedia.org/wiki/Swing_(Java)","name":"Java Swing","description":"A graphical user interface (GUI) library for Java.","urls":[],"seeAlso":["Java"]},"JavaScript":{"id":"JavaScript","@id":"https://en.wikipedia.org/wiki/JavaScript","name":"JavaScript programming language","description":"A programming language often used to add interactivity to websites, but also capable of being used for any purpose through the Node.js runtime.","urls":["https://nodejs.org/"]},"NPM":{"id":"NPM","@id":"https://www.npmjs.com/","name":"NPM","description":"A package manager for the JavaScript programming language.","urls":["https://en.wikipedia.org/wiki/Npm_(software)"],"seeAlso":["JavaScript"]},"caDSR":{"id":"caDSR","@id":"https://datascience.cancer.gov/resources/metadata","name":"Cancer Data Standards Registry and Repository","description":"A database of field definitions used in cancer data.","seeAlso":["NCI Thesaurus","UMLS"]},"UMLS":{"id":"UMLS","@id":"https://www.nlm.nih.gov/research/umls/index.html","name":"Unified Medical Language System","description":"A database of mappings between multiple medical vocabularies.","urls":["https://en.wikipedia.org/wiki/Unified_Medical_Language_System"],"seeAlso":["NCI Thesaurus","caDSR"]},"RDF":{"id":"RDF","@id":"https://www.w3.org/RDF/","name":"Resource Description Framework","description":"A simple and flexible data model that forms the basis of technologies such as OWL.","urls":["https://en.wikipedia.org/wiki/Resource_Description_Framework"],"seeAlso":["Web Ontology Language"]},"Web Ontology Language":{"id":"Web Ontology Language","@id":"https://www.w3.org/OWL/","name":"Web Ontology Language","description":"An RDF-based language for authoring ontologies.","urls":["https://en.wikipedia.org/wiki/Web_Ontology_Language"],"seeAlso":["RDF","ontologies"]},"ontologies":{"id":"ontologies","@id":"https://en.wikipedia.org/wiki/Ontology_(information_science)","name":"ontologies","description":"An ontology is a formal representation of knowledge.","seeAlso":["Web Ontology Language"]},"SHACL":{"id":"SHACL","@id":"https://www.w3.org/TR/shacl/","name":"Shapes Constraint Language","description":"A W3 specification for describing and validating graph-based data.","seeAlso":["RDF","ShEx"]},"ShEx":{"id":"ShEx","@id":"https://shex.io/","name":"Shape Expressions","description":"A W3 specification for describing and validating graph-based data.","urls":["https://en.wikipedia.org/wiki/ShEx"],"seeAlso":["RDF","SHACL"]},"XML":{"id":"XML","@id":"https://www.w3.org/XML/","name":"Extensible Markup Language","description":"A simple, standard compliant data format for transfering data. Can be validated using the XML Schema language.","urls":["https://en.wikipedia.org/wiki/XML"]},"JSON":{"id":"JSON","@id":"https://www.json.org/","name":"JavaScript Object Notation","description":"A simple, standard compliant data format for transfering data. Can be validated using the JSON Schema language.","urls":["https://en.wikipedia.org/wiki/JSON"]},"JSON-LD":{"id":"JSON-LD","@id":"https://www.w3.org/XML/","name":"JavaScript Object Notation for Linked Data","description":"A specification for JSON documents that allows them to be read as RDF.","urls":["https://en.wikipedia.org/wiki/JSON-LD"],"seeAlso":["JSON","RDF"]},"PFB":{"id":"PFB","@id":"https://github.com/uc-cdis/pypfb","name":"Portable Format for Biomedical data","description":"An Apache Avro-based format for publishing biomedical data."},"CEDAR Workbench":{"id":"CEDAR Workbench","@id":"https://metadatacenter.org/","name":"CEDAR Workbench","description":"A software tool and associated formats for collecting and validating medical metadata."},"SSSOM":{"id":"SSSOM","@id":"https://github.com/OBOFoundry/SSSOM","name":"A Simple Standard for Sharing Ontology Mappings","description":"A simple TSV-based format for sharing mappings between concepts in different ontologies."},"Slurm Workload Manager":{"id":"Slurm Workload Manager","@id":"https://slurm.schedmd.com/","name":"Slurm Workload Manager","description":"A tool for managing jobs on a computer cluster.","urls":["https://en.wikipedia.org/wiki/Slurm_Workload_Manager"]},"Vue.js":{"id":"Vue.js","name":"Vue.js","@id":"https://vuejs.org/","description":"A JavaScript software library for creating and maintaining single-page web applications.","urls":["https://en.wikipedia.org/wiki/Vue.js"],"seeAlso":["JavaScript","NPM"]},"Software testing":{"id":"Software testing","@id":"https://en.wikipedia.org/wiki/Software_testing","name":"Software testing","description":"Software tools and techniques used to test whether other software tools are functioning correctly."},"web APIs":{"id":"web APIs","@id":"https://en.wikipedia.org/wiki/Web_API","name":"web APIs","description":"Any application programming interface (API) designed to be used over the World Wide Web, usually via the HTTP protocol."},"PostgreSQL":{"id":"PostgreSQL","@id":"https://www.postgresql.org/","name":"PostgreSQL","description":"An open-source, highly-scalable and standards-compliant database management system.","urls":["https://en.wikipedia.org/wiki/PostgreSQL"]},"OpenRefine":{"id":"OpenRefine","@id":"https://openrefine.org/","name":"OpenRefine","description":"An open-source web application for cleaning up messy spreadsheet-like data.","urls":["https://en.wikipedia.org/wiki/OpenRefine"]},"Amazon Web Services":{"id":"Amazon Web Services","@id":"https://aws.amazon.com/","name":"Amazon Web Services","description":"A widely-used cloud infrastructure provider.","urls":["https://en.wikipedia.org/wiki/Amazon_Web_Services"]}}')},"9d/t":function(e,t,a){var o=a("AO7/"),n=a("xrYK"),i=a("tiKp")("toStringTag"),r="Arguments"==n(function(){return arguments}());e.exports=o?n:function(e){var t,a,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(a){}}(t=Object(e),i))?a:r?n(t):"Object"==(o=n(t))&&"function"==typeof t.callee?"Arguments":o}},A2ZE:function(e,t,a){var o=a("HAuM");e.exports=function(e,t,a){if(o(e),void 0===t)return e;switch(a){case 0:return function(){return e.call(t)};case 1:return function(a){return e.call(t,a)};case 2:return function(a,o){return e.call(t,a,o)};case 3:return function(a,o,n){return e.call(t,a,o,n)}}return function(){return e.apply(t,arguments)}}},"AO7/":function(e,t,a){var o={};o[a("tiKp")("toStringTag")]="z",e.exports="[object z]"===String(o)},GROH:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return r}));var o=a("q1tI"),n=a.n(o);function i(e){if(e){var t=e.addThe,a=e["@id"],o=e.name,i=e.location;if(o||a)return o?i?n.a.createElement("span",null,t&&"the ",n.a.createElement("a",{href:a,title:"Located at "+i},o)):n.a.createElement("span",null,t&&"the ",n.a.createElement("a",{href:a},o)):n.a.createElement("span",null,t&&"the ",n.a.createElement("a",{href:a},a));throw new Error("Organization "+e+" has neither a name nor a URL.")}}function r(e){if(!e)return"";var t=e.addThe,a=(e["@id"],e.name),o=e.location;if(a)return o?(t?"the ":"")+a+" at "+o:(t?"the ":"")+a;throw new Error("Organization "+e+" does not have a name.")}},ImZN:function(e,t,a){var o=a("glrk"),n=a("6VoE"),i=a("UMSQ"),r=a("A2ZE"),s=a("NaFW"),c=a("KmKo"),l=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,a){var d,p,h,u,m,g,f,w=a&&a.that,y=!(!a||!a.AS_ENTRIES),b=!(!a||!a.IS_ITERATOR),v=!(!a||!a.INTERRUPTED),S=r(t,w,1+y+v),A=function(e){return d&&c(d),new l(!0,e)},D=function(e){return y?(o(e),v?S(e[0],e[1],A):S(e[0],e[1])):v?S(e,A):S(e)};if(b)d=e;else{if("function"!=typeof(p=s(e)))throw TypeError("Target is not iterable");if(n(p)){for(h=0,u=i(e.length);u>h;h++)if((m=D(e[h]))&&m instanceof l)return m;return new l(!1)}d=p.call(e)}for(g=d.next;!(f=g.call(d)).done;){try{m=D(f.value)}catch(k){throw c(d),k}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},KmKo:function(e,t,a){var o=a("glrk");e.exports=function(e){var t=e.return;if(void 0!==t)return o(t.call(e)).value}},NaFW:function(e,t,a){var o=a("9d/t"),n=a("P4y1"),i=a("tiKp")("iterator");e.exports=function(e){if(null!=e)return e[i]||e["@@iterator"]||n[o(e)]}},P4y1:function(e,t){e.exports={}},STAE:function(e,t,a){var o=a("0Dky");e.exports=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())}))},"T/XA":function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return u}));var o=a("q1tI"),n=a.n(o),i=a("ExVU"),r=a("NmYn"),s=a.n(r),c=a("+0Gm"),l=a("uKGf"),d=a("snnE"),p=a("U1hp");function h(e,t){return void 0===t&&(t="creative-work"),u(e,t,!1)}function u(e,t,a){if(void 0===t&&(t="creative-work"),void 0===a&&(a=!0),e){var o=e["@id"]||e.url,r=e.name||"Unnamed creative work",h=e["@type"],u=t+"-"+s()(e.name||o),m=e.startDate?i.DateTime.fromISO(e.startDate):void 0,g=e.endDate?i.DateTime.fromISO(e.endDate):void 0;switch(h){case"schema:SoftwareSourceCode":return n.a.createElement(n.a.Fragment,null,n.a.createElement("strong",null,"Software"),": ",n.a.createElement("a",{id:u,href:o},r),a&&n.a.createElement("a",{class:"section-link",href:"#"+u},"§"),(m||g)&&n.a.createElement(n.a.Fragment,null," (",l.a(m,g),")"),e.description&&n.a.createElement(n.a.Fragment,null,": ",d.a(e.description)),a&&n.a.createElement("ul",{class:"compressed"},e.technologies&&n.a.createElement("li",null,"Technologies used: "," ",e.technologies.map((function(t,a){return n.a.createElement(n.a.Fragment,null,Object(p.a)(t),a<e.technologies.length-1&&", ")})),"."),e.features&&n.a.createElement("li",null,"Provides the following features:",n.a.createElement("ul",{class:"compressed"},e.features.map((function(e){return n.a.createElement("li",null,e)})))),e.codeRepository&&n.a.createElement("li",null,"Source code available at ",n.a.createElement("a",{href:e.codeRepository},e.codeRepository),"."),e.license&&n.a.createElement("li",null,"Released under the ",function(e){var t="object"==typeof e&&e["@id"]||e,a="object"==typeof e&&e.name||e;switch(t){case"https://www.wikidata.org/wiki/Q10513450":return n.a.createElement("a",{href:"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"},"GNU General Public License, version 2.0");case"https://www.wikidata.org/wiki/Q27016752":return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"},"GNU General Public License, version 2.0")," or later");case"https://www.wikidata.org/wiki/Q10513445":return n.a.createElement("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License, version 3.0");case"https://www.wikidata.org/wiki/Q27016754":return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License, version 3.0")," or later");default:return n.a.createElement("a",{href:e},a)}}(e.license),".")));case"http://okfnlabs.org/bibjson/":return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{class:"section-link",href:"#"+u},"§"),n.a.createElement("strong",{id:u},"Citation"),": ",c.a(e));default:if(!o)throw new Error("Unable to render creative work without an '@id': "+e);return n.a.createElement(n.a.Fragment,null,n.a.createElement("a",{class:"section-link",href:"#"+u},"§"),n.a.createElement("strong",null,"Link"),": ",n.a.createElement("a",{id:u,href:o},r),(m||g)&&n.a.createElement(n.a.Fragment,null," (",l.a(m,g),")"),e.description&&n.a.createElement(n.a.Fragment,null,": ",e.description))}}}},U1hp:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var o=a("q1tI"),n=a.n(o),i=a("Wbzz"),r=a("7ySY");function s(e){var t=e;if(!r[e])throw new Error("Tag '"+e+"' referenced but not defined in 'data/tags.json'!");return n.a.createElement(i.Link,{to:"/tag/"+e},t)}},hBjN:function(e,t,a){"use strict";var o=a("wE6v"),n=a("m/L8"),i=a("XGwC");e.exports=function(e,t,a){var r=o(t);r in e?n.f(e,r,i(0,a)):e[r]=a}},snnE:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a("q1tI"),n=a.n(o);function i(e){var t=e.split("\n");return 0===t.length?"":1===t.length?t[0]:t.map((function(e){return n.a.createElement("p",null,e)}))}},tiKp:function(e,t,a){var o=a("2oRo"),n=a("VpIT"),i=a("UTVS"),r=a("kOOl"),s=a("STAE"),c=a("/b8u"),l=n("wks"),d=o.Symbol,p=c?d:d&&d.withoutSetter||r;e.exports=function(e){return i(l,e)||(s&&i(d,e)?l[e]=d[e]:l[e]=p("Symbol."+e)),l[e]}},trxo:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("wfmh");var o=function(){function e(){this.knownEntities={}}var t=e.prototype;return t.addEntitiesFromData=function(e){var t=this;if("object"==typeof e){var a=e["@id"];a&&(console.log("Found entity '",a,"': ",e),this.knownEntities[a]=e),Object.keys(e).map((function(a){return t.addEntitiesFromData(e[a])}))}},t.fillReferences=function(e){var t=this;if(Array.isArray(e))return e.map((function(e){return t.fillReferences(e)}));if("object"!=typeof e)return e;var a=Object.keys(e);return 1===a.length&&"@id"===a[0]&&(console.log("Found substitutable entity: ",e["@id"]),this.knownEntities[e["@id"]])?this.knownEntities[e["@id"]]:Object.fromEntries(a.map((function(a){return[a,t.fillReferences(e[a])]})))},e}()},wfmh:function(e,t,a){var o=a("I+eb"),n=a("ImZN"),i=a("hBjN");o({target:"Object",stat:!0},{fromEntries:function(e){var t={};return n(e,(function(e,a){i(t,e,a)}),{AS_ENTRIES:!0}),t}})}}]);
//# sourceMappingURL=f0d9b79f24a0985e3f3911e871f5374fd763bbdf-c2200d2e48ad1988befe.js.map