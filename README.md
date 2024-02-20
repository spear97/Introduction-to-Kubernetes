# Introduction to Kubernetes

The project demonstartes how a Dockerfile can be used to create a Kubernetes Pod to be deployed. 

## Containerization

Containerization is a lightweight, portable, and efficient approach to software development and deployment that encapsulates applications and their dependencies into isolated environments called containers. Containers are self-contained units that package everything an application needs to run, including code, runtime, libraries, and dependencies, enabling consistent and reliable application deployment across different computing environments. Overall, containerization revolutionizes software development and deployment by providing a consistent, efficient, and portable way to package, distribute, and run applications, making it easier to build, deploy, and manage modern applications in cloud-native environments.

### Key Features
- `Isolation`: Containers provide process and resource isolation, ensuring that each application runs independently without interfering with other applications or the underlying host system.
- `Portability`: Containers are portable across different operating systems and environments, allowing developers to build and deploy applications consistently across development, testing, and production environments.
- `Efficiency`: Containers share the host operating system's kernel and resources, making them lightweight and efficient compared to virtual machines (VMs). They start quickly and consume fewer system resources, enabling efficient resource utilization and faster deployment times.
- `Consistency`: Containerization ensures consistency between development, testing, and production environments by packaging applications and dependencies into a single, standardized unit that behaves the same way across different environments.
- `Scalability`: Containers enable horizontal scaling of applications by creating multiple instances of the same containerized application and distributing traffic across them, providing scalability and elasticity to handle varying workloads.
- `DevOps Integration`: Containerization aligns with DevOps practices by facilitating continuous integration, continuous delivery (CI/CD), and automated deployment pipelines. Containers streamline the development and deployment process, enabling faster release cycles and improved collaboration between development and operations teams.
  
## Kubernetes

Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google and now maintained by the Cloud Native Computing Foundation (CNCF), Kubernetes provides a platform for deploying, scaling, and managing containerized applications across clusters of hosts. It abstracts the underlying infrastructure and provides a consistent API for managing containerized workloads and services. Overall, Kubernetes simplifies the deployment and management of containerized applications, making it easier to build, deploy, and scale applications in a cloud-native environment.

### Key Features

Key features of Kubernetes include:
- `Container Orchestration`: Kubernetes automates the deployment, scaling, and management of containerized applications, allowing users to define desired states and Kubernetes handles the rest.
- `Scalability`: Kubernetes enables horizontal scaling of applications by adding or removing instances based on demand, ensuring efficient resource utilization.
- `High Availability`: Kubernetes ensures high availability of applications by automatically restarting containers that fail, scheduling containers on healthy nodes, and distributing traffic evenly across healthy instances.
- `Service Discovery and Load Balancing`: Kubernetes provides built-in service discovery and load balancing mechanisms to distribute traffic to containers running in the cluster.
- `Storage Orchestration`: Kubernetes supports various storage solutions and provides storage orchestration capabilities, enabling applications to dynamically provision storage resources as needed.
- `Self-healing`: Kubernetes automatically detects and replaces unhealthy containers, ensuring that applications remain available and responsive.

# What the Lab Covered

- How to utilize the kubectl CLI
- How to Create a Kubernets Pod
- How Kubernetes is Deployed on the Cloud
- How a ReplicatSet is created and maintains a set number of replicas
- How Kubernetes load balancing works
