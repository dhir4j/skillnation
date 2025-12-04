export interface Course {
  id: number;
  title: string;
  description: string;
  short_description: string;
  price: number;
  duration: string;
  level: string;
  image_url: string;
  category: string;
  instructor: string;
  students: number;
  rating: number;
  features: string[];
}

export const dummyCourses: Course[] = [
  {
    id: 1,
    title: 'Full Stack Web Development',
    short_description: 'Master modern web development with React, Node.js, and MongoDB',
    description: `Become a full-stack web developer with this comprehensive course covering both frontend and backend technologies.

What You'll Learn:
• HTML5, CSS3, and Modern JavaScript (ES6+)
• React.js with Hooks and Context API
• Node.js and Express.js backend development
• MongoDB database design and integration
• RESTful API development
• Authentication and Authorization
• Deployment on cloud platforms

This course includes 50+ hours of video content, 20+ hands-on projects, and lifetime access to course materials. Perfect for beginners and intermediate developers looking to master full-stack development.`,
    price: 4999,
    duration: '12 weeks',
    level: 'Beginner to Advanced',
    image_url: '',
    category: 'Web Development',
    instructor: 'Dr. Alex Kumar',
    students: 2840,
    rating: 4.8,
    features: [
      '50+ hours of video content',
      '20+ hands-on projects',
      'Lifetime access',
      'Certificate of completion',
      'Live Q&A sessions',
      'Community support'
    ]
  },
  {
    id: 2,
    title: 'Mobile App Development with React Native',
    short_description: 'Build cross-platform mobile apps for iOS and Android',
    description: `Learn to build professional mobile applications that work on both iOS and Android using React Native.

What You'll Learn:
• React Native fundamentals and components
• Navigation and routing in mobile apps
• State management with Redux
• Native device features (Camera, GPS, etc.)
• Push notifications and background tasks
• API integration and data persistence
• App deployment to App Store and Play Store

Build 10+ real-world mobile applications and learn best practices for performance optimization. This course is perfect for web developers transitioning to mobile development.`,
    price: 5499,
    duration: '10 weeks',
    level: 'Intermediate',
    image_url: '',
    category: 'Mobile Development',
    instructor: 'Sarah Martinez',
    students: 1920,
    rating: 4.7,
    features: [
      '45+ hours of content',
      '10+ mobile app projects',
      'iOS & Android deployment',
      'Lifetime updates',
      'Mobile UI/UX best practices',
      'Code review sessions'
    ]
  },
  {
    id: 3,
    title: 'Cybersecurity and Ethical Hacking',
    short_description: 'Learn to identify and prevent security vulnerabilities',
    description: `Master cybersecurity fundamentals and ethical hacking techniques to protect systems and networks.

What You'll Learn:
• Network security and protocols
• Penetration testing methodologies
• Web application security (OWASP Top 10)
• Cryptography and encryption
• Malware analysis and reverse engineering
• Security tools (Metasploit, Burp Suite, Wireshark)
• Incident response and forensics

This hands-on course includes real-world scenarios, capture the flag (CTF) challenges, and prepares you for certifications like CEH and OSCP.`,
    price: 6999,
    duration: '14 weeks',
    level: 'Intermediate to Advanced',
    image_url: '',
    category: 'Cybersecurity',
    instructor: 'James Chen',
    students: 1560,
    rating: 4.9,
    features: [
      '60+ hours of training',
      'Real-world hacking labs',
      'CTF challenges',
      'Security tools mastery',
      'CEH exam preparation',
      'Career guidance'
    ]
  },
  {
    id: 4,
    title: 'Cloud Computing with AWS',
    short_description: 'Master Amazon Web Services and cloud architecture',
    description: `Become an AWS expert and learn to design, deploy, and manage scalable cloud applications.

What You'll Learn:
• AWS core services (EC2, S3, RDS, Lambda)
• Cloud architecture and design patterns
• Infrastructure as Code with Terraform
• Container orchestration with ECS and EKS
• Serverless architecture and microservices
• Cloud security and compliance
• Cost optimization strategies

Prepare for AWS Solutions Architect certification with hands-on labs and real-world projects deploying production-grade applications.`,
    price: 5999,
    duration: '12 weeks',
    level: 'Intermediate',
    image_url: '',
    category: 'Cloud Computing',
    instructor: 'Dr. Alex Kumar',
    students: 2340,
    rating: 4.8,
    features: [
      '55+ hours of content',
      'AWS certification prep',
      'Real cloud projects',
      'Free AWS credits included',
      'Architecture workshops',
      'Job interview preparation'
    ]
  },
  {
    id: 5,
    title: 'Data Science & Machine Learning',
    short_description: 'Learn Python, ML algorithms, and data analysis',
    description: `Master data science and machine learning with Python, from basics to advanced AI applications.

What You'll Learn:
• Python programming for data science
• Data analysis with Pandas and NumPy
• Data visualization with Matplotlib and Seaborn
• Machine learning algorithms (supervised & unsupervised)
• Deep learning with TensorFlow and Keras
• Natural Language Processing (NLP)
• Real-world ML project deployment

Work on 15+ data science projects including predictive modeling, recommendation systems, and computer vision applications.`,
    price: 6499,
    duration: '16 weeks',
    level: 'Beginner to Advanced',
    image_url: '',
    category: 'Data Science',
    instructor: 'James Chen',
    students: 3120,
    rating: 4.9,
    features: [
      '70+ hours of content',
      '15+ ML projects',
      'Kaggle competitions',
      'Python libraries mastery',
      'Portfolio development',
      'Industry mentorship'
    ]
  },
  {
    id: 6,
    title: 'DevOps Engineering Bootcamp',
    short_description: 'Master CI/CD, Docker, Kubernetes, and automation',
    description: `Become a DevOps engineer and learn to automate, deploy, and manage modern infrastructure.

What You'll Learn:
• Linux system administration
• Git and version control workflows
• CI/CD pipelines with Jenkins and GitLab
• Containerization with Docker
• Kubernetes orchestration
• Infrastructure as Code (Terraform, Ansible)
• Monitoring and logging (Prometheus, Grafana)

Build production-grade DevOps pipelines and learn industry best practices for continuous delivery and infrastructure automation.`,
    price: 6499,
    duration: '14 weeks',
    level: 'Intermediate to Advanced',
    image_url: '',
    category: 'DevOps',
    instructor: 'Sarah Martinez',
    students: 1890,
    rating: 4.8,
    features: [
      '65+ hours of training',
      'Real DevOps projects',
      'Kubernetes certification prep',
      'Cloud platform integration',
      'Automation scripts library',
      'Career placement support'
    ]
  },
  {
    id: 7,
    title: 'Blockchain Development',
    short_description: 'Build decentralized applications and smart contracts',
    description: `Learn blockchain technology and develop decentralized applications (dApps) with Ethereum and Solidity.

What You'll Learn:
• Blockchain fundamentals and cryptography
• Ethereum and smart contract development
• Solidity programming language
• Web3.js and DApp development
• NFT creation and marketplaces
• DeFi protocols and applications
• Security best practices for smart contracts

Create your own cryptocurrency, NFT marketplace, and DeFi applications in this hands-on blockchain course.`,
    price: 7999,
    duration: '12 weeks',
    level: 'Advanced',
    image_url: '',
    category: 'Blockchain',
    instructor: 'Dr. Alex Kumar',
    students: 980,
    rating: 4.7,
    features: [
      '50+ hours of content',
      'Smart contract projects',
      'NFT & DeFi development',
      'Blockchain security',
      'Crypto wallet integration',
      'Industry connections'
    ]
  },
  {
    id: 8,
    title: 'UI/UX Design Masterclass',
    short_description: 'Design beautiful and user-friendly interfaces',
    description: `Master UI/UX design principles and tools to create stunning digital experiences.

What You'll Learn:
• Design thinking and user research
• Wireframing and prototyping
• Figma and Adobe XD mastery
• User interface design principles
• Responsive and mobile design
• Design systems and component libraries
• User testing and iteration

Complete 12+ design projects for web and mobile applications, building a professional portfolio that stands out to employers.`,
    price: 4499,
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    image_url: '',
    category: 'Design',
    instructor: 'Sarah Martinez',
    students: 2650,
    rating: 4.8,
    features: [
      '40+ hours of content',
      '12+ design projects',
      'Figma masterclass',
      'Portfolio building',
      'Design critique sessions',
      'Industry tools & resources'
    ]
  },
  {
    id: 9,
    title: 'Python Programming for Beginners',
    short_description: 'Start your coding journey with Python',
    description: `Learn Python from scratch and build a strong programming foundation for your tech career.

What You'll Learn:
• Python basics and syntax
• Data structures and algorithms
• Object-oriented programming
• File handling and databases
• Web scraping and automation
• Building command-line applications
• Testing and debugging

Perfect for complete beginners with no prior programming experience. Includes 50+ coding exercises and 10+ mini-projects.`,
    price: 2999,
    duration: '8 weeks',
    level: 'Beginner',
    image_url: '',
    category: 'Programming',
    instructor: 'James Chen',
    students: 4320,
    rating: 4.9,
    features: [
      '35+ hours of content',
      '50+ coding exercises',
      '10+ projects',
      'Beginner-friendly',
      'Code review & feedback',
      'Python certification'
    ]
  },
  {
    id: 10,
    title: 'Digital Marketing & SEO',
    short_description: 'Master online marketing and search engine optimization',
    description: `Learn digital marketing strategies to grow businesses and boost online presence.

What You'll Learn:
• SEO fundamentals and advanced techniques
• Google Ads and PPC campaigns
• Social media marketing
• Content marketing and copywriting
• Email marketing automation
• Analytics and conversion optimization
• Marketing strategy and planning

Includes real client projects, Google Analytics certification prep, and proven strategies used by top marketers.`,
    price: 3999,
    duration: '10 weeks',
    level: 'Beginner to Intermediate',
    image_url: '',
    category: 'Marketing',
    instructor: 'Sarah Martinez',
    students: 2180,
    rating: 4.7,
    features: [
      '45+ hours of training',
      'Real marketing campaigns',
      'Google Ads certification',
      'SEO tools mastery',
      'Portfolio case studies',
      'Marketing templates'
    ]
  }
];
