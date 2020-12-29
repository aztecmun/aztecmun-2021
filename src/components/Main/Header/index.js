import Link from 'next/link'
import { useRouter } from 'next/router'

import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './styles'

export default function index() {

    const router = useRouter()

    return (
        <Nav>
            <NavLink>
                <h1>AztecMun</h1>
            </NavLink>

            <Bars />

            <NavMenu>
                <NavLink className={router.asPath == "/" ? "active" : ""}>
                    <Link href="/">Inicio</Link>
                </NavLink>

                <NavLink className={router.asPath == "/comites" ? "active" : ""}>
                    <Link href="/comites">Comites</Link>
                </NavLink>

                <NavLink className={router.asPath == "/secretarias" ? "active" : ""}>
                    <Link href="/secretarias">Secretarías</Link>
                </NavLink>
            </NavMenu>

            <NavBtn>
                <NavBtnLink>
                    <Link href="/login">Ingresa</Link>
                </NavBtnLink>
            </NavBtn>
        </Nav>
    )
}