import Link from 'next/link'
import styles from '../styles/MLink.module.css'

export default function MLink ({text, href}) {
    return (
        <Link href={href}>
            <a className={styles.link}>{text}</a>
        </Link>
    )
}