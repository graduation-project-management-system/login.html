// Array to store user credentials (email, password, role, and name)
const users = [
    { 
        email: "sadeen@cit.just.edu.jo", // User's email address
        password: "Sadeen0*", // User's password, note: real applications should use hashing for security
        type: "student", // The role of the user, could be either "student" or "supervisor"
        name: "Sadeen" // User's full name
    },
    { 
        email: "razan@cit.just.edu.jo", 
        password: "Razan0*",
        type: "student",
        name: "Razan"
    },
    { 
        email: "bayan@cit.just.edu.jo", 
        password: "Bayan0*",
        type: "student",
        name: "Bayan"
    },
    { 
        email: "abdulKarim@cit.just.edu.jo", 
        password: "AbdulKarim0*",
        type: "student",
        name: "AbdulKarim"
    },
    { 
        email: "hamam@cit.just.edu.jo", 
        password: "Hamam0*",
        type: "student",
        name: "Hamam"
    },
    { 
        email: "sara@cit.just.edu.jo", 
        password: "Sara0*",
        type: "student",
        name: "Sara"
    },
    { 
        email: "seham@cit.just.edu.jo", 
        password: "Seham0*",
        type: "student",
        name: "Seham"
    },
    { 
        email: "omar@cit.just.edu.jo", 
        password: "Omar0*",
        type: "student",
        name: "Omar"
    },
    { 
        email: "hala@cit.just.edu.jo", 
        password: "Hala0*",
        type: "student",
        name: "Hala"
    },
    { 
        email: "hamza@just.edu.jo", // Supervisor's email
        password: "Hamza0*",
        type: "supervisor", // Role: supervisor
        name: "Hamza" // Supervisor's name
    },
    { 
        email: "mohammed@just.edu.jo", 
        password: "Mohammed0*",
        type: "supervisor",
        name: "Mohammed"
    },
    { 
        email: "malik@just.edu.jo", 
        password: "Malik0*",
        type: "supervisor",
        name: "Malik"
    },
    { 
        email: "sadeen@just.edu.jo", 
        password: "Sadeen0*",
        type: "supervisor",
        name: "Sadeen"
    },
    { 
        email: "razan@just.edu.jo", 
        password: "Razan0*",
        type: "supervisor",
        name: "Razan"
    },
    { 
        email: "bayan@just.edu.jo", 
        password: "Bayan0*",
        type: "supervisor",
        name: "Bayan"
    },
    { 
        email: "noor@just.edu.jo", 
        password: "Noor0*",
        type: "supervisor",
        name: "Noor"
    },
    { 
        email: "zakaria@just.edu.jo", 
        password: "Zakaria0*",
        type: "supervisor",
        name: "Zakaria"
    },
    { 
        email: "husam@just.edu.jo", 
        password: "Husam0*",
        type: "supervisor",
        name: "Husam"
    },
    { 
        email: "oula@just.edu.jo", 
        password: "Oula0*",
        type: "supervisor",
        name: "Oula"
    },
    { 
        email: "khaldoon@just.edu.jo", 
        password: "Khaldoon0*",
        type: "supervisor",
        name: "Khaldoon"
    }
];

// Example of using the `users` array to check credentials in a login form
// This array is a mock of a simple login system, where the user can be a student or supervisor
// In real-world applications, credentials should be securely stored in a database and not hardcoded like this.