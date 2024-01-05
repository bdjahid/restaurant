
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from './../../hooks/useAuth';


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.email,
                    email: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)

                        navigate("/")
                    })
            })
    }
    return (
        <div>
            <div className="text-center">
                <button onClick={handleGoogle} className="btn btn-ghost"> Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;




