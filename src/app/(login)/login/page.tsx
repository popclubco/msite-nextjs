import Link from "next/link"

function Login() {
    return (
        <>
            <section>
                login page
            </section>
            <Link href="/test">
                <div>goto login</div>
            </Link>
        </>
    )
}

export default Login