import { databaseMock as database } from './databaseMock.js';

export function requestAccess(loginData) {
  const {email, password} = loginData;
  let ans = {success: false, message: 'Incorrect name or password'};
  Object.keys(database).forEach(userEmail => {
    if (userEmail===email && database[userEmail].password===password) {
      ans = {
        success: true,
        userData: {
          email: email,
          password: password,  // I know its a bad practice, this
          // is only for demonstration purposes;
          name: database[userEmail].name,
          lastname: database[userEmail].lastname,
          age: database[userEmail].age,
          activities: database[userEmail].activities,
        },
        message: 'Log in succesful',
      };
    }
  })
  return ans;
}

export function createUser(userObject) {
  console.log(userObject);
  if (Object.keys(database).includes(userObject.email)){
    return {success: false, message: 'Username already exists'};
  }
  const { name, lastname, age, email, password } = userObject;
  database[email] = {
    name: name,
    lastname: lastname,
    password: password, // I know this should be hashed, this 
    // project is only demonstrative.
    age: age,
    activities: []
  };
  const userData = { name, lastname, age, email, password };
  const ans = {
    success: true,
    userData,
    message: 'User succesfully created and logged in',
  }
  return ans;
}

export function addActivity(userEmail, activity) {
  console.log(userEmail);
  console.log(activity);
  database[userEmail].activities.push(activity);
  const activitiesUpdated = database[userEmail].activities;
  console.log(activitiesUpdated);
  return {
    success: 'True',
    message: 'Activity added successfully',
    activitiesUpdated,
  }
}

export function getActivities(userEmail) {
  let ans = {
    success: false,
    message: 'Error: User not found',
  }
  console.log(userEmail);
  Object.keys(database).forEach(mailAddress => {
    console.log(database[userEmail].activities)
    if(userEmail === mailAddress) {
      ans = {
        success: true,
        message: 'Activities fetch successful',
        activities: database[userEmail].activities,
      }
    }
  })
  return ans
}

export function deleteActivity(userEmail, description) {
  let ans = {
    success: false,
    message: 'An error has ocurred',
  }
  Object.keys(database).forEach(mailAddress => {
    console.log(database[userEmail].activities)
    if(userEmail === mailAddress) {
      const activities = database[userEmail].activities
      const newActivities = activities.filter(activity => activity.activity !== description);
      database[userEmail].activities = newActivities;
    }
    ans = {
      success: true,
      message: 'Activity successfully erased',
      activities: database[userEmail].activities,
    }
  })
  return ans
}