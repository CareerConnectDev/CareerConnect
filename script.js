// Sample job data (you'd get this from the server in a real application)
const jobData = [
    { company: 'Company A', position: 'Web Developer Intern', location: 'City A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { company: 'Company B', position: 'Marketing Intern', location: 'City B', description: 'Sed aliquet elit nec felis congue, non mollis nisi pellentesque.' },
    // Add more job opportunities here
  ];
  
  // Function to display job opportunities on the page
  function displayJobs(jobs) {
    const jobsList = document.getElementById('jobsList');
  
    jobsList.innerHTML = '';
  
    jobs.forEach(job => {
      const jobCard = document.createElement('div');
      jobCard.classList.add('job-card');
  
      const jobTitle = document.createElement('h2');
      jobTitle.textContent = job.position + ' at ' + job.company;
  
      const jobLocation = document.createElement('p');
      jobLocation.textContent = 'Location: ' + job.location;
  
      const jobDescription = document.createElement('p');
      jobDescription.textContent = job.description;
  
      jobCard.appendChild(jobTitle);
      jobCard.appendChild(jobLocation);
      jobCard.appendChild(jobDescription);
  
      jobsList.appendChild(jobCard);
    });
  }
  
  // Function to filter jobs based on search input
  function searchJobs() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
  
    const filteredJobs = jobData.filter(job => {
      return job.company.toLowerCase().includes(searchInput) ||
             job.position.toLowerCase().includes(searchInput) ||
             job.location.toLowerCase().includes(searchInput);
    });
  
    displayJobs(filteredJobs);
  }
  
  // Initial display of all jobs
  displayJobs(jobData);
  