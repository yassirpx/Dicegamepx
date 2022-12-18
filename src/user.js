function User ({user,setuser,gg,title}){
    const tmp = (e)=>{
        console.log(e.target.value);
        setuser(e.target.value)
    }
return(
        <form onSubmit={gg}>
            <h1> {title}</h1>
          <input
            type="text"
            value={user}
            onChange={tmp}
          />
          <button type="submit"> Let's Go</button>
        </form>
      );
}

export default User