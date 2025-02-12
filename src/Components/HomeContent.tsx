import { Button } from "@mui/material"
import "./HomeContent.css"
import {Link} from 'react-router-dom';

export default function HomeContent() {
  return (
    <>
    <div className="TitleContent">
        A calender specialized in education
    </div>
    <div className="TitleContent2">
        Eventide is a calendar that focuses on its 
        <br>
        </br>
        impact on student’s education.
    </div>

    <div
      className="button1">
    <Button
      variant="contained"
      component={Link}
      style={{minWidth: 200, minHeight: 100}}
      to={'/signup'}>
        Sign Up!
    </Button>
    </div>

    <div
      className="button2">
    <Button
      variant = "contained"
      component={Link}
      style={{minWidth:200, minHeight: 100}}
      to={'/login'}>
        Login!
    </Button>
    </div>
    </>
  )
}
