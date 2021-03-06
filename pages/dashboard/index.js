import { useState } from "react";
import Navigation from "../../components/navigation.component";

function Dashboard({ userData }) {
    
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        AuthenticateUser.then((data) => {
            setAuthenticated(data.success);
        })
        .catch((err) => {
            console.log(err);
            setAuthenticated(false);
        })
    },[])

    return (
        <>
            <Navigation authenticated={authenticated}/>
            <h1>You aren't logged in</h1>
        </>
    )
}

export default Dashboard