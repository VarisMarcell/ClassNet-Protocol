const CreateSession = ({sessionKey, adminKey}) => {

    function getSessionData() {
        fetch(`127.0.0.1:5000/joinData?${sessionKey}`, {
          'methods': "POST",
          headers: {
            'Content-Type': "application/json",
            'Accept': "application/json"
          }
        })
          .then(response => response.json())
          .then(response => setData(response))
          .catch(error => console.log(error))
      }

    return (
        <div className="App">
            <h1 className='mainTitle'>ClassNet Protocols</h1>
            <section className='mainButtons'>
            </section>
        </div>
    )
}

export default CreateSession