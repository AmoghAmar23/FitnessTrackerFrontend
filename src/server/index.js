const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`

export const registerUser = async (username,password) => {
  console.log(username,password)
  try {
    const response = await fetch(
      `${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    });
    const result = await response.json();
    // As written below you can log your result
    // to check what data came back from the above code.
    console.log(result)
    return result
  } catch (err) {
    console.error(err);
  }
}

  export const login = async (username,password) => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  export const myData = async (token) => {
    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const myRoutines = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users/albert/routines`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer `
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const fetchActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }  

  const postActivities = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Running',
          description: 'Keep on running!'
        }) 
      });
  
      const result = await response.json();
  
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
        
  const fetchActivityById = async () => {
    try {
      const response = await fetch(`${BASE_URL}/activities/3/routines`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }
      
  const fetchRoutines = async () => {
    try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
      'Content-Type': 'application/json',
      },
    });
    
    const result = await response.json();
    console.log(result);
    return result
    } catch (err) {
    console.error(err);
    }
    }

  const postRoutines = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routines`, {
        method: "POST",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          name: 'Long Cardio Routine',
          goal: 'To get your heart pumping!',
          isPublic: true
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const updateRoutines = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routines/6`, {
        method: "PATCH",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
        body: JSON.stringify({
          name: 'Long Cardio Day',
          goal: 'To get your heart pumping!'
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

  const deleteRoutines = async () => {
    try {
      const response = await fetch(`${BASE_URL}/routines/6`, {
        method: "DELETE",
        headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${TOKEN_STRING_HERE}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
}

const postRoutineById = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines/6/activities`, {
      method: "POST",
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        activityId: 7,
        count: 1, 
        duration: 20
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
    
const updateRoutineActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
      method: "PATCH",
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
      body: JSON.stringify({
        count: 2,
        duration: 30
      })
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}

const delteRoutineActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities/11`, {
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${TOKEN_STRING_HERE}`
      },
    });
    const result = await response.json();
    console.log(result);
    return result
  } catch (err) {
    console.error(err);
  }
}
      
    
