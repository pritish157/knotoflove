// Sample data for user profiles
const profiles = [
    {
        name: "Aisha",
        age: 28,
        location: "Bhubaneswar",
        religion: "Muslim",
        caste: "",
        motherTongue: "Odia",
        income: 60000,
        gender: "female",
        dob: "1995-01-15",
        email: "aisha@example.com",
        image: "g1.jpg" // Replace with actual image path
    },
    {
        name: "Raj",
        age: 30,
        location: "Mumbai",
        religion: "Hindu",
        caste: "Brahmin",
        motherTongue: "Hindi",
        income: 75000,
        gender: "male",
        dob: "1993-02-20",
        email: "raj@example.com",
        image: "p1.jpg" // Replace with actual image path
    },
        {
            name: "Aisha",
            age: 28,
            location: "Bhubaneswar",
            religion: "Muslim",
            caste: "",
            motherTongue: "Odia",
            income: 60000,
            gender: "female",
            dob: "1995-01-15",
            email: "aisha@example.com",
            image: "g1.jpg"
        },
        {
            name: "Raj",
            age: 30,
            location: "Mumbai",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Hindi",
            income: 75000,
            gender: "male",
            dob: "1993-02-20",
            email: "raj@example.com",
            image: "p2.jpg"
        },
        {
            name: "Sneha",
            age: 26,
            location: "Delhi",
            religion: "Christian",
            caste: "Kayastha",
            motherTongue: "Hindi",
            income: 55000,
            gender: "female",
            dob: "1997-03-10",
            email: "sneha@example.com",
            image: "g2.jpg"
        },
        {
            name: "Vikram",
            age: 34,
            location: "Kolkata",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Bengali",
            income: 80000,
            gender: "male",
            dob: "1989-04-22",
            email: "vikram@example.com",
            image: "p3.jpg"
        },
        {
            name: "Meera",
            age: 29,
            location: "Chennai",
            religion: "Hindu",
            caste: "Scheduled Caste",
            motherTongue: "Tamil",
            income: 50000,
            gender: "female",
            dob: "1994-05-30",
            email: "meera@example.com",
            image: "g3.jpg"
        },
        {
            name: "Arjun",
            age: 32,
            location: "Mumbai",
            religion: "Sikh",
            caste: "Kshatriya",
            motherTongue: "Punjabi",
            income: 85000,
            gender: "male",
            dob: "1991-06-15",
            email: "arjun@example.com",
            image: "p4.jpg"
        },
        {
            name: "Priya",
            age: 27,
            location: "Delhi",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Hindi",
            income: 62000,
            gender: "female",
            dob: "1996-07-12",
            email: "priya@example.com",
            image: "g4.jpg"
        },
        {
            name: "Nitin",
            age: 31,
            location: "Bhubaneswar",
            religion: "Muslim",
            caste: "",
            motherTongue: "Odia",
            income: 72000,
            gender: "male",
            dob: "1992-08-25",
            email: "nitin@example.com",
            image: "p5.jpg"
        },
        {
            name: "Riya",
            age: 25,
            location: "Kolkata",
            religion: "Christian",
            caste: "Kayastha",
            motherTongue: "Bengali",
            income: 58000,
            gender: "female",
            dob: "1998-09-19",
            email: "riya@example.com",
            image: "g5.jpg"
        },
        {
            name: "Suresh",
            age: 33,
            location: "Mumbai",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Hindi",
            income: 90000,
            gender: "male",
            dob: "1990-10-05",
            email: "suresh@example.com",
            image: "p6.jpg"
        },
        {
            name: "Anjali",
            age: 26,
            location: "Chennai",
            religion: "Hindu",
            caste: "Scheduled Tribe",
            motherTongue: "Tamil",
            income: 50000,
            gender: "female",
            dob: "1997-11-11",
            email: "anjali@example.com",
            image: "g6.jpg"
        },
        {
            name: "Rohit",
            age: 30,
            location: "Delhi",
            religion: "Muslim",
            caste: "Khandayat",
            motherTongue: "Hindi",
            income: 70000,
            gender: "male",
            dob: "1993-12-30",
            email: "rohit@example.com",
            image: "p7.jpg"
        },
        {
            name: "Sonia",
            age: 29,
            location: "Kolkata",
            religion: "Christian",
            caste: "Kayastha",
            motherTongue: "Bengali",
            income: 65000,
            gender: "female",
            dob: "1994-01-20",
            email: "sonia@example.com",
            image: "g7.jpg"
        },
        {
            name: "Karan",
            age: 31,
            location: "Bhubaneswar",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Odia",
            income: 80000,
            gender: "male",
            dob: "1992-02-14",
            email: "karan@example.com",
            image: "p8.jpg"
        },
        {
            name: "Neha",
            age: 27,
            location: "Mumbai",
            religion: "Sikh",
            caste: "Kshatriya",
            motherTongue: "Punjabi",
            income: 54000,
            gender: "female",
            dob: "1996-03-05",
            email: "neha@example.com",
            image: "g8.jpg"
        },
        {
            name: "Deepak",
            age: 34,
            location: "Delhi",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Hindi",
            income: 90000,
            gender: "male",
            dob: "1989-04-17",
            email: "deepak@example.com",
            image: "p9.jpg"
        },
        {
            name: "Shreya",
            age: 24,
            location: "Chennai",
            religion: "Christian",
            caste: "Kayastha",
            motherTongue: "Tamil",
            income: 48000,
            gender: "female",
            dob: "1999-05-22",
            email: "shreya@example.com",
            image: "g9.jpg"
        },
        {
            name: "Anil",
            age: 32,
            location: "Kolkata",
            religion: "Hindu",
            caste: "Scheduled Caste",
            motherTongue: "Bengali",
            income: 77000,
            gender: "male",
            dob: "1991-06-10",
            email: "anil@example.com",
            image: "p10.jpg"
        },
        {
            name: "Pooja",
            age: 28,
            location: "Bhubaneswar",
            religion: "Muslim",
            caste: "Khandayat",
            motherTongue: "Odia",
            income: 59000,
            gender: "female",
            dob: "1995-07-29",
            email: "pooja@example.com",
            image: "g10.jpg"
        },
        {
            name: "Rahul",
            age: 30,
            location: "Mumbai",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Hindi",
            income: 85000,
            gender: "male",
            dob: "1993-08-14",
            email: "rahul@example.com",
            image: "p11.jpg"
        },
        {
            name: "Samikshya",
            age: 21,
            location: "Delhi",
            religion: "Hindu",
            caste: "khandayat",
            motherTongue: "Odia",
            income: 6000,
            gender: "female",
            dob: "2004-09-29",
            email: "samikshya@example.com",
            image: "sami.jpg"
        },
        {
            name: "Vijay",
            age: 35,
            location: "Kolkata",
            religion: "Hindu",
            caste: "Scheduled Tribe",
            motherTongue: "Bengali",
            income: 82000,
            gender: "male",
            dob: "1988-10-08",
            email: "vijay@example.com",
            image: "b10.jpg"
        },
        // Add more profiles as needed
        {
            name: "Soumya",
            age: 27,
            location: "Bhubaneswar",
            religion: "Hindu",
            caste: "Khandayat",
            motherTongue: "Odia",
            income: 62000,
            gender: "female",
            dob: "1996-01-10",
            email: "soumya@example.com",
            image: "b2.jpg"
        },
        {
            name: "Sanjay",
            age: 29,
            location: "Cuttack",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Odia",
            income: 70000,
            gender: "male",
            dob: "1994-02-18",
            email: "sanjay@example.com",
            image: "b9.jpg"
        },
        {
            name: "Pratikshya",
            age: 21,
            location: "Bhubaneswar",
            religion: "Hindu",
            caste: "Khandayat",
            motherTongue: "Odia",
            income: 0,
            gender: "female",
            dob: "29-09-2003",
            email: "pratikhya@gmail.com",
            image: "pratikhya.jpg"
        },
        {
            name: "Amit",
            age: 30,
            location: "Cuttack",
            religion: "Christian",
            caste: "Scheduled Caste",
            motherTongue: "Odia",
            income: 80000,
            gender: "male",
            dob: "1993-04-14",
            email: "amit@example.com",
            image: "b8.jpg"
        },
        {
            name: "Nandita",
            age: 24,
            location: "Bhubaneswar",
            religion: "Muslim",
            caste: "Khandayat",
            motherTongue: "Odia",
            income: 48000,
            gender: "female",
            dob: "1999-05-08",
            email: "nandita@example.com",
            image: "b3.jpg"
        },
        {
            name: "Debashis",
            age: 31,
            location: "Cuttack",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Odia",
            income: 95000,
            gender: "male",
            dob: "1992-06-20",
            email: "debashis@example.com",
            image: "b7.jpg"
        },
        {
            name: "Gita",
            age: 28,
            location: "Bhubaneswar",
            religion: "Sikh",
            caste: "Kshatriya",
            motherTongue: "Odia",
            income: 54000,
            gender: "female",
            dob: "1995-07-15",
            email: "gita@example.com",
            image: "b4.jpg"
        },
        {
            name: "Pritish",
            age: 21,
            location: "Bhubaneswar",
            religion: "Hindu",
            caste: "Brahmin",
            motherTongue: "Odia",
            income: 8500000,
            gender: "male",
            dob: "2004-02-19",
            email: "pritish@example.com",
            image: "pritish.jpg"
        },
        {
            name: "Priyanka",
            age: 29,
            location: "Bhubaneswar",
            religion: "Christian",
            caste: "Kayastha",
            motherTongue: "Odia",
            income: 63000,
            gender: "female",
            dob: "1994-09-05",
            email: "priyanka@example.com",
            image: "b5.jpg"
        },
      
        
    
    
];

// Function to filter profiles based on selected criteria
function filterProfiles() {
    const minAge = parseInt(document.getElementById('minAge').value) || 0;
    const maxAge = parseInt(document.getElementById('maxAge').value) || Infinity;
    const location = document.getElementById('location').value;
    const gender = document.getElementById('gender').value;
    const religion = document.getElementById('religion').value;
    const caste = document.getElementById('caste').value;
    const motherTongue = document.getElementById('motherTongue').value;
    const minIncome = parseInt(document.getElementById('income').value) || 0;

    const filteredProfiles = profiles.filter(profile => {
        return (
            profile.age >= minAge &&
            profile.age <= maxAge &&
            (location ? profile.location === location : true) &&
            (gender ? profile.gender === gender : true) &&
            (religion ? profile.religion === religion : true) &&
            (caste ? profile.caste === caste : true) &&
            (motherTongue ? profile.motherTongue === motherTongue : true) &&
            profile.income >= minIncome
        );
    });

    displayProfiles(filteredProfiles);
}

// Function to display filtered profiles
function displayProfiles(filteredProfiles) {
    const matchesContainer = document.getElementById('matchesContainer');
    matchesContainer.innerHTML = ''; // Clear existing profiles

    if (filteredProfiles.length === 0) {
        matchesContainer.innerHTML = '<div class="col-12"><p>No profiles found.</p></div>';
        return;
    }

    filteredProfiles.forEach(profile => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('col-md-4', 'profile-card', 'mb-4');
        profileDiv.innerHTML = `
            <div class="card" style="cursor: pointer;">
                <img src="${profile.image}" class="card-img-top" alt="${profile.name}" onclick="showProfileDetails('${profile.name}', '${profile.dob}', '${profile.location}', '${profile.email}', '${profile.image}')">
                <div class="card-body">
                    <h5 class="card-title">${profile.name}</h5>
                    <p class="card-text">Age: ${profile.age}</p>
                    <p class="card-text">Location: ${profile.location}</p>
                    <p class="card-text">Religion: ${profile.religion}</p>
                    <p class="card-text">Caste: ${profile.caste}</p>
                    <p class="card-text">Mother Tongue: ${profile.motherTongue}</p>
                    <p class="card-text">Income: ₹${profile.income.toLocaleString()}</p>
                    <p class="card-text">Gender: ${profile.gender.charAt(0).toUpperCase() + profile.gender.slice(1)}</p>
                </div>
            </div>
        `;
        matchesContainer.appendChild(profileDiv);
    });
}

// Function to show profile details in the modal
function showProfileDetails(name, dob, location, email, image) {
    document.getElementById('modalImage').src = image;
    document.getElementById('modalDOB').innerText = `Date of Birth: ${dob}`;
    document.getElementById('modalLocation').innerText = `Location: ${location}`;
    document.getElementById('modalEmail').innerHTML = `Contact: <a href="mailto:${email}">${email}</a>`;

    $('#profileModal').modal('show'); // Using Bootstrap's modal method
}

// Event listener for the filter button
document.getElementById('filterBtn').addEventListener('click', filterProfiles);
