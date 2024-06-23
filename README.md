<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/lucaSartore/MindMerge">
    <img src="images/readme.png" alt="Logo" width="160" height="160">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
  </p>
</div>


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Mindmerge is a web application focused on optimizing workflow. 
The app allows users to create work schedules and tasks to assist businesses in dividing workloads. 
The flagship feature is the system - integrated with modern language models - that provides ***fully automated reports*** on personnel productivity, based on notes and comments provided by employees themselves in an easy and flexible manner.

For more information about the project, check out:

[Deliverable 1](https://github.com/lucaSartore/MindMerge/blob/main/deliverable_1/Deliverable_1.pdf)

[Deliverable 2](https://github.com/lucaSartore/MindMerge/blob/main/deliverable_2/Deliverable2.pdf)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![MongoDB][MongoDB]][MongoDB-url]
* [![Vue][Vue.js]][Vue-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

NodeJS is the only prerequisite required to test the platform


### Installation


1. Clone the repo and inizialize the submodules:
    ```sh
    git clone https://github.com/github_username/repo_name.git &&
    cd Mindmerge &&
    git submodule update --init --recursive
    ```

2. Install NPM packages both in backend and frontend:
    ```sh
    (cd backend/ && npm install .) &
    (cd frontend/ && npm install . && npm run convert) &
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
From the main folder ```Mindmerge```, launch the following command on the shell to start both the frontend and the backend:
``` shell
(cd backend/ && npm run dev) & (cd front_end/ && npm run dev) &
```

Here is a brief list of the command available via ```npm run```:

***Frontend***
- *npm run test*:  
    Launch the automated tests via `Jest`
- *npm run dev*:  
    Launch the application for development purpose
- *npm run generate-api*:  
    Generates the internal API documentation, based on the `JSdoc` comments within the files
- *npm run documentation*:  
    Generates the automated documentation

***Backend***
- *npm run convert*:  
    Required to convert the syntax from common js to ES6
- *npm run dev*:  
    Same as the backend counterpart
- *npm run preview*:  
    Starts the application and automatically launches the browser on the starting page


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ROADMAP -->


<!-- CONTRIBUTING -->


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Node.js]: https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/Express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB
[Express-url]: https://expressjs.com/
[MongoDB]: https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white
[MongoDB-url]: https://www.mongodb.com/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/

