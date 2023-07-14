import {FaGithub, FaLinkedinIn} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className='footer'>
                <li>
                    Desenvolvido por Lorena Borges 
                    <a rel="linkedin" href="https://www.linkedin.com/in/lorenadasilvaborges/" target='_blank'><FaLinkedinIn></FaLinkedinIn></a>
                    <a rel="Github" href="https://github.com/lbsilva8/" target='_blank'><FaGithub></FaGithub></a>
                </li>
        </footer>
    )
}