import React from 'react';
import './style.css';
import pyhton from '../images/Python.svg.png';
import docker from '../images/docker3.png';
import java from '../images/java1.webp';
import js from '../images/js3.png';
import mongo from '../images/mongo2.png';
import sql from '../images/sql1.jpg';
import react from '../images/react.webp';

function HomePage() {
  return (
   <div>
    {/* <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> */}
<h1>Welcome to our course webpage! </h1>
<div class="cards">
  <div class="card">
    <h2 class="card-title">Python</h2>
    <img src={pyhton} alt='python' />
    <p class="card-desc">Python is a high-level programming language that is widely used for web development, scientific computing, data analysis, artificial intelligence, and other fields. Its simple and easy-to-learn syntax makes it a great choice for beginners, while its flexibility and vast ecosystem of libraries and frameworks make it a popular choice for experienced developers as well. Python is an interpreted language, meaning that the code is executed line by line, rather than needing to be compiled first. This makes it easy to test and debug code, and also allows for interactive programming. Popular frameworks and libraries for Python include Django, Flask, and TensorFlow.</p>
  </div>  
  <div class="card">
    <h2 class="card-title">Docker</h2>
    <img src={docker} alt='python' />
    <p class="card-desc">Docker is a platform that enables developers to easily create, deploy, and run applications in containers. A container is a lightweight, standalone, and executable package of software that includes everything needed to run a piece of code, including the code itself, a runtime, system tools, libraries, and settings. Containers provide a consistent and reproducible environment, making it easy to move a project from development to production without worrying about dependencies and configuration issues.
Docker allows developers to package their application and dependencies into a container, which can then be easily run on any host machine that has Docker installed. This makes it easy to deploy and scale applications, as containers are lightweight and require minimal resources to run. Additionally, Docker also provides a centralized hub, called Docker Hub, where developers can share and find ready-made containers to use in their projects.
Docker is widely used in the development and deployment of microservices and in cloud infrastructure, and it's supported by many cloud providers such as AWS, Google Cloud, and Microsoft Azure.</p>
  </div>
  <div class="card">
    <h2 class="card-title">java</h2>
    <img src={java} alt='python' />
    <p class="card-desc">Java is a popular, high-level programming language that is known for its "write once, run anywhere" (WORA) capability. Java is designed to be platform-independent, meaning that the same Java code can run on a wide range of devices and operating systems, including Windows, Mac, Linux, and mobile devices.
Java is an object-oriented programming language, which means that it focuses on creating objects, or instances of a class, that contain both data and methods. It also supports other programming concepts such as inheritance, polymorphism, and encapsulation.
Java is widely used in enterprise software development, particularly for building large-scale, distributed systems. It is also used in web development, Android mobile app development, and scientific computing. The language is supported by a large ecosystem of libraries and frameworks, including Spring, Hibernate, and Apache Tomcat.
Java also has a robust tooling ecosystem, including IDEs such as Eclipse and IntelliJ IDEA and build tools like Maven and Gradle, which helps developers to write, test, and deploy Java applications with ease.</p>
  </div>
  <div class="card">
    <h2 class="card-title">Javascript</h2>
    <img src={js} alt='python' />
    <p class="card-desc">JavaScript is a high-level, dynamic, and interpreted programming language that is widely used to create interactive and responsive web pages. It is primarily used to add interactivity and other dynamic features to websites, such as creating responsive forms, animations, and creating dynamic user interfaces. JavaScript is primarily executed by web browsers, but it can also be run on the server-side using technologies such as Node.js.
JavaScript is a versatile language and can be used to create a wide range of applications, including web and mobile apps, desktop apps, and server-side applications. It is also used to create interactive and dynamic user interfaces, real-time applications, and browser extensions.</p>
  </div>
  <div class="card">
    <h2 class="card-title">Mongo</h2>
    <img src={mongo} alt='python' />
    <p class="card-desc">MongoDB is a popular, open-source, NoSQL database management system that is based on the document data model. Unlike traditional relational databases which store data in tables, MongoDB stores data in semi-structured BSON (Binary JSON) format, which makes it more flexible and allows for easy scaling of data.

MongoDB is designed to handle large amounts of unstructured data and is well suited for use cases such as big data, real-time analytics, content management, and e-commerce. It also provides high performance, scalability and automatic sharding, which allows the database to automatically distribute data across multiple servers as the size of the data grows.</p>
  </div>
  <div class="card">
    <h2 class="card-title">SQL</h2>
    <img src={sql} alt='python' />
    <p class="card-desc">SQL (Structured Query Language) is a programming language used to manage and manipulate relational databases. It is used to create, modify, and query databases, as well as to control access to the data stored within them. SQL is the standard language used to interact with relational databases, and it is supported by most relational database management systems (RDBMS) such as MySQL, PostgreSQL, Oracle and Microsoft SQL Server.</p>
  </div>
  <div class="card">
    <h2 class="card-title">React</h2>
    <img src={react} alt='python' />
    <p class="card-desc">React is a JavaScript library for building user interfaces (UI). It was developed and is maintained by Facebook and is now widely adopted by developers for building web and mobile applications. React is based on a concept called "components," which allow developers to build reusable UI elements that can be easily composed to create complex user interfaces.</p>
  </div>
</div>
   </div>
  );
}

export default HomePage;
