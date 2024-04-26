import { Login } from "../components/Login"
import { WordQuote } from "../components/WordQuote"


export const Signup = () =>{
    return <div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                <Login type="signup"/>
            </div>
            <div className="hidden lg:block">
                <WordQuote/>
            </div>
        </div>
    </div>
}