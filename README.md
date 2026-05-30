# Answers to Technical Questions

## 1. How long did you spend on the coding test? What would you add to your solution if you had more time?

I spent approximately **10-12 hours** completing the coding test, including planning, development, debugging, responsive design implementation, and data integration.

Given additional time, I would further enhance the solution by:

* Implementing a more structured MVC architecture to improve maintainability and scalability.
* Adding full CRUD functionality through an administration interface rather than relying solely on database scripts.
* Introducing form validation on both the client and server sides.
* Adding smooth slide transitions and animations to improve the user experience.
* Implementing caching strategies for database queries and static assets.
* Adding comprehensive error handling and logging.
* Improving mobile interactions by enhancing the accordion and touch gestures.

My primary focus during the test was ensuring that the core functionality matched the provided design requirements while maintaining clean, readable, and maintainable code.

---

## 2. How would you track down a performance issue in production? Have you ever had to do this?

When investigating a performance issue in production, I typically follow a structured approach:

### 1. Gather Information

* Identify the symptoms and affected functionality.
* Determine whether the issue impacts all users or a subset of users.
* Review application logs, error logs, and monitoring dashboards.

### 2. Measure and Isolate

* Use profiling and monitoring tools to identify bottlenecks.
* Analyze database query execution times.
* Check API response times and server resource utilization (CPU, memory, disk I/O, and network usage).
* Compare current metrics against historical baselines.

### 3. Investigate Common Bottlenecks

* Slow database queries or missing indexes.
* Excessive API calls.
* Memory leaks.
* Inefficient loops or algorithms.
* Large asset downloads or unoptimized images.
* Third-party service latency.

### 4. Reproduce the Issue

* Attempt to recreate the problem in a staging environment.
* Use profiling tools and browser developer tools to identify slow operations.

### 5. Implement and Validate Fixes

* Apply targeted optimizations.
* Verify improvements through testing and monitoring.
* Deploy carefully and continue monitoring after release.

Yes, I have worked on production performance issues. One example involved a legacy web application where page load times increased significantly due to inefficient database queries and missing indexes. By analyzing query execution plans, adding appropriate indexes, and reducing redundant database calls, the response time was reduced considerably and the overall user experience improved.

---

## 3. Please describe yourself using JSON

```json
{
  "name": "Bimal K P",
  "role": "Full Stack Developer",
  "experience": {
    "frontend": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery"
    ],
    "backend": [
      "PHP",
      "Laravel",
      "Node.js"
    ],
    "database": [
      "MySQL",
      "SQL"
    ]
  },
  "strengths": [
    "Problem Solving",
    "Full Stack Development",
    "Debugging",
    "Database Design",
    "Responsive Web Design"
  ],
  "values": [
    "Code Quality",
    "Collaboration",
    "Ownership",
    "Adaptability"
  ],
  "interests": [
    "Software Engineering",
    "Game Development",
    "Cloud Technologies",
    "System Design"
  ]
}
```
