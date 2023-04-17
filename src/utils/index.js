export const getCurrentUser = () => {
    let user = null;
    try {
      user = localStorage.getItem('user') != null ? JSON.parse(localStorage.getItem('user')) : null;
    } catch (error) {
      console.log(">>>> src/utils/index.js : getCurrentUser -> error", error)
      user = null;
    }
    return user;
  }
  const flag = 1
  export const setCurrentUser = (user) => {
    try {
      if (user) {
        let newuser = {
          id: user.data.user.id,
          full_name: user.data.user.full_name,
          email: user.data.user.email,
          role: user.data.user.user_type,
          agree_to_terms: user.data.user.agree_to_terms,
          token: user.data.user.token,
          /* flag:flag */
        }
        console.log(newuser);
        
        localStorage.setItem('user', JSON.stringify(newuser))
        localStorage.setItem('token', newuser.token)
      //  localStorage.setItem('brand_id', newuser.id)
      } else {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.warn( 'No user Found')
    }
  }