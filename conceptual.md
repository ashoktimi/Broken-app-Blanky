### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
    A JWT is a JSON object that is encoded and then signed.JWT is used for user authentication and authorization, it is usually sent in the headers of the HTTP requests and it can be used to securely transmit information between parties.

- What is the signature portion of the JWT?  What does it do?
    The signature portion of a JWT is a hash value that is generated using a secret key and the header and payload of the JWT. The purpose of the signature is to ensure the integrity and authenticity of the JWT.

- If a JWT is intercepted, can the attacker see what's inside the payload?
    If a JWT is intercepted by an attacker, they would be able to see the contents of the payload, which typically contains information about the user and any additional claims. However, the attacker would not be able to modify the contents of the JWT without also being able to generate a new signature that matches the contents of the JWT, this would be impossible without the secret key used to sign the token.

- How can you implement authentication with a JWT?  Describe how it works at a high level.


    The user enters their credentials (e.g. username and password) into a login form and submits it to the server.

    The server verifies the credentials by checking them against a database or other authentication mechanism, and if the credentials are valid, the server generates a JWT and sends it back to the client.

    The client receives the JWT and stores it in the browser's memory or local storage, it will be used to authenticate future requests.

    On subsequent requests, the client sends the JWT in the headers of the HTTP request, typically in the "Authorization" header.

    The server receives the request and extracts the JWT from the headers. It then verifies the signature of the JWT using the secret key that was used to sign it, to confirm that the JWT was indeed issued by the server.

    If the signature is valid, the server can trust that the JWT was issued by the server and can use the information in the JWT to authenticate the user and authorize the request.
    If the signature is not valid, the server will return an error message and the client will have to re-authenticate.




- Compare and contrast unit, integration and end-to-end tests.

    Unit tests, integration tests, and end-to-end tests are all types of testing that are used to ensure the quality of software. Each type of test serves a different purpose and has different characteristics.

    Unit tests are focused on individual units of code, such as functions or classes. They test the smallest unit of code in isolation, without any dependencies on external components. Unit tests are fast, easy to write and easy to maintain, they are typically written by developers.

    Integration tests are focused on testing the interaction between different units of code and external components. They test how different parts of the system work together. Integration tests can be used to test how different modules interact, or how the system interacts with external dependencies like databases or APIs. They are slower than unit tests, but still relatively fast.

    End-to-end tests are focused on testing the entire system from the user's perspective. They test the system as a whole and typically involve simulating user interactions, like clicking buttons or filling out forms. End-to-end tests are slower than unit and integration tests and are typically written by QA engineers.

    In summary, Unit tests focus on individual units of code and test in isolation, Integration tests focus on testing the interaction between different units of code and external dependencies, End-to-end tests focus on testing the entire system from the user's perspective. Each type of test is useful in its own right and should be used in conjunction with the others to ensure a comprehensive test coverage.

- What is a mock? What are some things you would mock?
    A mock, in the context of testing, is a simulated or "fake" version of a component or object that mimics the behavior of the real component or object. Mocks are used to isolate the unit of code being tested and to control its environment.

    Mocks are often used to replace real objects or components that are difficult or expensive to set up, like databases, APIs, or external services. Mocks can also be used to simulate error conditions or edge cases that are difficult or impossible to reproduce in a test environment.

    Here are some examples of things that can be mocked in a test:

    External APIs or services that the system interacts with.
    Databases or other storage systems.
    File systems.
    Network connections.
    Time-related functionality, like the current time or timers.
    Random number generators.
    Objects or components that are difficult or expensive to set up in a test environment.
    Functions or methods that have side effects.
    In summary, Mocks are a way to simulate objects or components that the system interacts with, they are useful to isolate the unit of code being tested, to control its environment and to simulate error conditions or edge cases.

- What is continuous integration?

    Continuous integration is a software development practice where developers integrate their code changes regularly, automated tests are run to ensure that the code changes do not break the existing functionality and if the tests pass the code changes are merged into the main branch, this helps to catch and resolve conflicts and bugs early in the development process.

- What is an environment variable and what are they used for?
     Environment variables are values that can be passed to the operating system or a process at runtime, they are used to configure the behavior of various programs and applications and can be used for many purposes, like storing configuration information, setting runtime options, specifying the location of external resources, setting the PATH variable, setting the environment in which an application runs.

     Storing configuration information: 
      such as the database connection strings, API keys, or other sensitive information.
    Setting runtime options: 
      such as debugging or logging options.
    Specifying the location of external resources: 
      such as data files or libraries.
    Setting the PATH variable: 
      This allows you to run commands without specifying the full path to the executable.
    Setting the environment: 
      such as development, staging, or production.


- What is TDD? What are some benefits and drawbacks?
    TDD stands for Test-Driven Development, it is a software development process where the developer writes test cases before writing the actual code. The idea behind TDD is that by writing tests first, the developer can ensure that the code they are writing is correct and meets the requirements of the project.

    The process of TDD can be described as follows:

    Write a test case for a specific feature or behavior of the software.
    Run the test and observe that it fails, since the code for that feature does not exist yet.
    Write the minimum amount of code needed to make the test pass.
    Refactor the code if needed, making sure that the test still passes.
    Repeat the process for each feature or behavior of the software.
    Some benefits of TDD include:

    It helps to ensure that the code is correct and meets the requirements of the project.
    It makes it easier to catch and fix bugs early in the development process.
    It improves the design of the code, as the developer is forced to think about how the code will be used before writing it.
    It makes it easier to add new features or make changes to the code, as the tests provide a safety net that ensures that the changes do not break existing functionality.
    Some drawbacks of TDD include:

    It can take longer to write tests than to write the code itself, which can make the development process slower.
    It can be difficult to write tests for complex or ill-defined requirements.
    It can be difficult to know when to stop writing tests, as it is easy to fall into the trap of testing everything.
    It can be difficult to know how to test certain types of code, such as code that deals with random numbers or other non-deterministic behavior.

- What is the value of using JSONSchema for validation?

  JSONSchema is a way to validate the structure and content of a JSON document, it provides a clear and standardized way to define the expected format of a JSON document.
  It helps to ensure data integrity:
    define the structure and content of a JSON document, which helps to ensure that the data is valid and conforms to a specific format.
  It helps to catch errors early:
    JSONSchema validation can be performed early in the development process, which makes it easier to catch and fix errors before they cause problems in the production environment.

- What are some ways to decide which code to test?

  There are several ways to decide which code to test:

  Test critical functionality: Test the functionality that is critical to the application, such as code that handles user input, data validation, or business logic. This will help to ensure that the application is working correctly and that important features are not broken by changes to the code.
  
  Test frequently used code: Test the code that is frequently used by the application, such as code that is used in a loop or code that is called many times. This will help to ensure that performance is not affected by changes to the code.
  
  Test new code: Test the code that is newly added to the application, as it is more likely to contain bugs. This will help to catch and fix errors early in the development process.
  
  Test code with complex logic: Test the code that has complex logic, such as code that uses multiple conditions or code that performs calculations. This will help to ensure that the logic is correct and that the code is working as expected.
  
  Test code that interacts with external systems: Test the code that interacts with external systems, such as databases, APIs, or other services. This will help to ensure that the code is working correctly and that there are no issues with the external systems.
  
  Test code that has been changed recently : Test the code that has been changed recently, this will help to ensure that recent changes have not broken existing functionality.
  
  Test code that has been reported as a bug : Test the code that has been reported as a bug, this will help to ensure that the bug is fixed and that it does not occur again.

- What does `RETURNING` do in SQL? When would you use it?

  In SQL, the RETURNING clause is used with the INSERT, UPDATE, and DELETE statements to return data from the affected rows. 

  You would use the RETURNING clause when you want to return the affected data after the statement has been executed.

  For example, you might use it to return the new values of a row after an update statement has been executed.
  If you are using INSERT statement and you want to return the unique id of the newly inserted row.
  If you are using DELETE statement and you want to return the deleted data for future reference.

- What are some differences between Web Sockets and HTTP?
  Web Sockets and HTTP are both protocols used for communication on the web.

  Connection: Web Sockets use a full-duplex, persistent connection between the client and the server, while HTTP uses a request-response model. This means that once a WebSocket connection is established, both the client and the server can send data at any time, without the need for a new request.

  Latency: Because WebSockets use a persistent connection, there is less latency when compared to HTTP, as the connection does not need to be established for each request. This makes WebSockets suitable for real-time applications such as gaming, chat, and live data feeds.
  
  Message-based: Web Sockets use a message-based communication model, while HTTP uses a request-response model. This means that WebSockets can send messages at any time, while HTTP requests require a response before sending another request.
  
  Security: WebSockets use the same security model as HTTPS, so the connection is encrypted and secure. HTTP, on the other hand, can be used with or without encryption.
  
  Bandwidth: WebSockets are more efficient with bandwidth when compared to HTTP, because it sends data in smaller packets, rather than sending a new request for each piece of data.
  
  Proxy: WebSockets can't be easily proxied through standard HTTP servers, while HTTP can be easily proxied.
  
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  Flask is a lightweight framework and is easy to get started with. It is perfect for small to medium-sized projects and has a simple, intuitive API. Flask also has a large community and a wide range of third-party libraries available.

  Express is widely used and has a large ecosystem of middlewares and libraries, which makes it easy to add new functionality to the application. Express is perfect for building web applications that need to handle a large number of concurrent connections.

  The decision should be based on the specific requirements and the language you are more comfortable working with (Python or JavaScript)

  



