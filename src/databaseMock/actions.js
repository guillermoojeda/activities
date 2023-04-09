import { databaseMock as database } from './databaseMock.js';

/*
You will notice here the use of structuredClone(). Here, it has the
same function as JSON.parse(JSON.stringify(someLiteralObject)): that is,
it creates an in-depth copy of a JS object.
Why do I need an in-depth copy of a JS-object? As I said, this project uses a mock
of a database: the database here is simply a JS literal object inside the project
src/databaseMock folder. Therefore, I do this for 2 reasons:
1- To properly simulate that the backend stores information in a different
memory location than the frontend and,
2- Because Redux tags those objects involved in state-changes of components as
"non-mutable", unless they are mutated via Redux. Since I want to provide the option
to work with window.localStorage instead of Redux, I needed depth copies of
the objects stored in the database, so hey are independent of the ones in the front-end.
*/

export function requestAccess(loginData) {
  const {email, password} = loginData;
  let ans = {success: false, message: 'Incorrect name or password'};
  Object.keys(database).forEach(userEmail => {
    if (userEmail===email && database[userEmail].password===password) {
      ans = {
        success: true,
        userData: {
          email: email,
          name: database[userEmail].name,
          lastname: database[userEmail].lastname,
          age: database[userEmail].age,
          activities: structuredClone(database[userEmail].activities),
        },
        message: 'Log in succesful',
      };
    }
  })
  return ans;
}

export function createUser(userObject) {
  console.log(userObject); // console.log left here for demonstration purposes only.
  if (Object.keys(database).includes(userObject.email)){
    return {success: false, message: 'Username already exists'};
  }
  console.log(userObject);
  const { firstName: name, lastname, age, email, password } = userObject;
  database[email] = {
    name: name,
    lastname: lastname,
    password: password, // I know this should be hashed, this 
    // project is only demonstrative.
    age: age,
    activities: []
  };
  const userData = { name, lastname, age, email };
  const ans = {
    success: true,
    userData,
    message: 'User succesfully created and logged in',
  }
  console.log('DB: User created:')
  console.log(database[userObject.email])
  //console.log()s left here on purpose with demonstration purposes
  return ans;
}

export function addActivity(userEmail, activity) {
  database[userEmail].activities.push(activity);
  const activitiesUpdated = database[userEmail].activities;
  console.log(`DB: For the user ${userEmail}`); // console.log left here for demonstration purposes only.
  console.log(`The activity "${activity.activity}" was added.`); // console.log left here for demonstration purposes only.
  console.log('DB: Activities are now:') // console.log left here for demonstration purposes only.
  console.log(activitiesUpdated); // console.log left here for demonstration purposes only.
  return {
    success: 'True',
    message: 'Activity added successfully',
    activitiesUpdated: structuredClone(activitiesUpdated),
  }
}

export function getActivities(userEmail) {
  let ans = {
    success: false,
    message: 'Error: User not found',
  }
  console.log(userEmail); // console.log left here for demonstration purposes only.
  Object.keys(database).forEach(mailAddress => {
    console.log(database[userEmail].activities) // console.log left here for demonstration purposes only.
    if(userEmail === mailAddress) {
      ans = {
        success: true,
        message: 'Activities fetch successful',
        activities: structuredClone(database[userEmail].activities),
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
    console.log(database[userEmail].activities) // console.log left here for demonstration purposes only.
    if(userEmail === mailAddress) {
      const activities = database[userEmail].activities
      const newActivities = activities.filter(activity => activity.activity !== description);
      database[userEmail].activities = newActivities;
    }
    ans = {
      success: true,
      message: 'Activity successfully erased',
      activities: structuredClone(database[userEmail].activities),
    }
  })
  return ans
}

export function getUserInfo(userEmail) {
  let ans = {
    success: false,
    message: 'An error took place',
  }
  Object.keys(database).forEach(mailAddress => {
    console.log(`DB: getting info of ${mailAddress}...`);
    if(userEmail === mailAddress) {
      ans = {
        success: true,
        message: 'User info retrieved successfully',
        userInfo: structuredClone({
          name: database[userEmail].name,
          lastname: database[userEmail].lastname,
          email: database[userEmail].email,
          age: database[userEmail].age,
          // activities: database[userEmail].activities,
        }),
      }
    }
  })
  return(ans);
}
