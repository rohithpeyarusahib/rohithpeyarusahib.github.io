export const personalInfo = {
  name: "Rohith Peyarusahib",
  title: "Database Consultant | Optimizing, Migrating & Implementing MySQL, MongoDB & PostgreSQL Solutions",
  tagline: "",
  summary: "Dynamic and detail-oriented Database administrator with hands-on experience in MySQL, MongoDB, and PostgreSQL database administration, optimization, and large-scale migrations. Adept at managing over 500+ databases in cloud and on-prem environments with a strong focus on availability, performance tuning, automation, and troubleshooting. Certified in MongoDB, Nutanix, and MySQL 8.0 Administration, with a solid academic foundation in AI and Machine Learning.",
  email: "rohithpeyarusahib@gmail.com",
  phone: "+91 6374123576",
  linkedin: "linkedin.com/in/rohithpeyarusahib",
  resumeUrl: "/resume.pdf", // Add resume file to public
};

export const education = {
  degree: "B.E. in Computer Science and Engineering (AI & ML)",
  university: "Annamalai University",
  cgpa: "8.76",
  period: "Aug 2019 – May 2023",
};

export const experience = [
  {
    company: "Geo Platinum IT Services (GeoPITS)",
    role: "DBA Lead",
    period: "Jul 2025 – Present",
    location: "Bengaluru, India",
    responsibilities: [
      "Lead a team of DBAs, ensuring **high-performance, reliable, and scalable database operations**.",
      "Implemented **automation and performance tuning**, reducing system downtime and improving efficiency.",
      "Established **best practices and operational frameworks**, boosting team productivity.",
      "Achievements: Built a **high-performing DBA team** managing **hundreds of database instances** across cloud and on-prem environments.",
      "Technologies: MySQL, MongoDB, PostgreSQL, Cloud Platforms, Automation",
    ],
  },
  {
    company: "Geo Platinum IT Services (GeoPITS)",
    role: "Data Engineer",
    period: "Mar 2023 – Jun 2025",
    location: "Bengaluru, India",
    responsibilities: [
      "Executed **complex database migrations**: MySQL 5→8, private cloud → AWS RDS, MSSQL → PostgreSQL, with **minimal downtime**.",
      "Optimized **dashboard queries and reporting**, reducing execution time and improving end-user experience.",
      "Developed **real-time monitoring & alerting systems** using Bash scripts, PMM, and Grafana for proactive incident management.",
      "Achievements: Ensured **seamless migration and monitoring** across multiple platforms, improving reliability and performance.",
      "Technologies: MySQL, PostgreSQL, MongoDB, AWS RDS, DMS, Bash, PMM, Grafana",
    ],
  },
];

export const projects = [
  {
    title: "MySQL 5 → 8 Migration",
    description: "Led MySQL data migration project from MySQL 5 to MySQL 8 for a major News channel, successfully executing on-premise to on-premise migration with minimal downtime. Implemented performance optimizations, resulting in a 40% reduction in query execution time. Developed comprehensive documentation for the migration process and best practices.",
  },
  {
    title: "MongoDB Cross-Platform Migration",
    description: "Migrated a 500+ GB MongoDB 6.0 databases from Windows Server to Linux with just 20 minutes of downtime. Executed the migration using the datafile copy method, ensuring accurate transfer and database consistency. Performed thorough pre-checks, validation, and post-migration steps to ensure seamless production cutover.",
  },
  {
    title: "Automated DB Alerting & Monitoring",
    description: "Developed and deployed a Bash-based alerting system for MySQL and MongoDB across 50+ servers. Monitored replication lag, high connections, long-running queries, disk usage, and replication breaks. Integrated real-time alerts via email and Slack, improving incident response and reducing downtime. Complemented existing tools (PMM, CloudWatch) by adding custom, lightweight, real-time monitoring on critical workloads.",
  },
  {
    title: "PITR Recovery",
    description: "Recovered 1,000,000+ records deleted accidentally by the client from a critical MySQL table. Identified exact deletion timestamp and extracted relevant binary logs using mysqlbinlog. Restored full backup and replayed binlogs up to the point just before deletion using GTID-based recovery. Ensured zero data loss with minimal downtime through point-in-time recovery (PITR).",
  },
  {
    title: "AWS RDS Migration using DMS",
    description: "Migrated large MySQL on-premise databases to Amazon RDS using AWS Database Migration Service (DMS) with minimal downtime. Configured replication tasks (full load + CDC) to ensure near real-time sync between source and target. Validated schema, data consistency, and optimized RDS performance post-migration. Implemented monitoring and cutover strategy to achieve a seamless production migration.",
  },
  {
    title: "MySQL 5.7 to MySQL 8.0 Migration with ProxySQL",
    description: "Migrated production databases from MySQL 5.7 to 8.0 using replication, ensuring minimal downtime. Implemented ProxySQL for query routing, read/write split, and smooth application cutover. Conducted schema compatibility checks, resolved deprecated features, and optimized configurations for MySQL 8.0. Managed end-to-end migration lifecycle including cutover, validation, performance tuning, and decommissioning of legacy server. Post-migration support to ensure the server performance.",
  },
  {
    title: "MongoDB Replica Set High Availability Deployment",
    description: "Configured a 3-node replica set (1 primary, 2 secondary) to ensure high availability and disaster recovery. Simulated primary crash and validated automatic failover through replica set election. Implemented read preferences (primary, secondaryPreferred) for optimized workload distribution. Ensured data consistency, replication reliability, and minimal downtime in production scenarios.",
  },
  {
    title: "Query Optimization and Performance Tuning",
    description: "Analyzed slow and deadlock-prone queries using EXPLAIN and performance schema in MySQL. Implemented proper indexing strategies and rewrote queries to reduce full table scans. Optimized long-running queries, improving response time by over 60%. Collaborated with application teams to validate query changes and ensure performance stability.",
  },
];

export const skills = {
  databases: ["MySQL (5.7/8.0)", "MongoDB", "PostgreSQL"],
  performanceTuning: ["Query Optimization", "Indexing Strategies", "Execution Plan Analysis", "Locking/Deadlocks Resolution"],
  automation: ["Bash", "Python"],
  monitoring: ["PMM", "Percona Toolkit", "MySQL Workbench", "MongoDB Compass", "CloudWatch"],
  cloud: ["AWS (RDS, EC2, DMS)", "Azure Database Services", "Nutanix Cloud"],
};

export const certifications = [
  "MongoDB Associate Database Administrator",
  "Nutanix Certified Professional – Database Automation 6",
  "MySQL 8.0 Database Administrator Certificate",
  "MongoDB SI Architect Certification",
];

export const skillProficiency = {
  MySQL: 95,
  MongoDB: 90,
  "Performance Tuning": 85,
  Automation: 80,
  Monitoring: 85,
  Cloud: 75,
};
