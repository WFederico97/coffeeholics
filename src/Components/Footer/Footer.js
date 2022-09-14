import { RiUserHeartLine, RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
    return (
        <footer className="mt-auto text-white-50 justify-content-center d-flex">
            <p>Coded with <RiUserHeartLine /> by  <RiLinkedinBoxFill /><a href="https://www.linkedin.com/in/federico-wuthrich-668633164/" target={'_blank'} rel="noreferrer" className="text-white">Federico</a>.</p>
        </footer>
    )
}
export default Footer